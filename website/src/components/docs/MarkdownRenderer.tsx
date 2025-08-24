"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';
import { ExternalLink, Copy, Check } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Mermaidズームモーダルコンポーネント
function MermaidZoomModal({ svg, isOpen, onClose }: { svg: string; isOpen: boolean; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return;
      
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale(prev => Math.max(1, Math.min(6, prev + delta)));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!contentRef.current?.contains(e.target as Node)) return;
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      document.body.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
    };

    if (isOpen) {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.overflow = 'unset';
      document.body.style.cursor = 'default';
    };
  }, [isOpen, onClose, isDragging, position, dragStart]);

  useEffect(() => {
    if (isOpen) {
      setScale(1.5); // モーダル開く時に1.5倍でスタート
      setPosition({ x: 0, y: 0 }); // 位置もリセット
      setIsDragging(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col"
      onClick={onClose}
    >
      {/* ヘッダー */}
      <div className="flex items-center justify-between p-4 bg-gray-900/95 border-b border-gray-700 flex-shrink-0">
        <div className="text-sm text-gray-300">
          ズーム: {Math.round(scale * 100)}% | スクロールで拡大・縮小 | ドラッグで移動 | ESCキーで閉じる
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <span className="text-gray-400 hover:text-white text-xl">×</span>
        </button>
      </div>

      {/* 図表エリア - 全画面使用 */}
      <div 
        ref={modalRef}
        className="flex-1 overflow-hidden flex items-center justify-center relative bg-gray-900/50"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          ref={contentRef}
          className="transition-transform duration-200 ease-out select-none"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center'
          }}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>

      {/* フッター - 操作ヒント */}
      <div className="p-3 bg-gray-900/95 border-t border-gray-700 text-center flex-shrink-0">
        <div className="flex justify-center space-x-8 text-xs text-gray-400">
          <span>🖱️ ドラッグで移動</span>
          <span>🔍 スクロールでズーム</span>
          <span>⌨️ ESCで閉じる</span>
          <span>🖱️ 外側クリックで閉じる</span>
        </div>
      </div>
    </div>
  );
}

// Mermaidコンポーネント
function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#1f2937',
            lineColor: '#6b7280',
            secondaryColor: '#1f2937',
            tertiaryColor: '#374151',
          }
        });

        const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart);
        setSvg(svg);
        setError('');
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError('図表の描画でエラーが発生しました');
      }
    };

    renderDiagram();
  }, [chart, isClient]);

  if (error) {
    return (
      <div className="my-8 p-4 bg-red-900 border border-red-700 rounded-lg">
        <p className="text-red-300 text-center">{error}</p>
        <pre className="text-xs text-red-200 mt-2 overflow-auto">
          {chart}
        </pre>
      </div>
    );
  }

  if (!isClient) {
    return (
      <div className="mermaid-container my-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex justify-center items-center h-32">
          <div className="text-gray-400">図表を読み込み中...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mermaid-container my-8 p-4 bg-gray-800 rounded-lg border border-gray-700 group">
        <div className="relative">
          <div 
            className="mermaid flex justify-center cursor-pointer hover:bg-gray-700/50 rounded-lg p-2 transition-colors"
            dangerouslySetInnerHTML={{ __html: svg }}
            onClick={() => setIsModalOpen(true)}
            title="クリックで拡大表示"
          />
          {/* ズームアイコンオーバーレイ */}
          <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      {/* ズームモーダル */}
      <MermaidZoomModal 
        svg={svg} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
      <style jsx>{`
        .mermaid {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
        }
        .mermaid svg {
          max-width: 100%;
          height: auto;
          transition: all 0.2s ease;
        }
        .mermaid-container:hover .mermaid svg {
          filter: brightness(1.1);
        }
        .mermaid-container {
          position: relative;
        }
      `}</style>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // ヘッダー
          h1: ({ children, ...props }) => (
            <h1 className="text-4xl font-bold text-white mb-6 pb-3 border-b border-gray-700" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => {
            const childText = typeof children === 'string' ? children : children?.toString() || '';
            let bgColor = 'bg-gray-800';
            let borderColor = 'border-gray-600';
            let textColor = 'text-white';
            let icon = '📄';
            
            // セクション別の色分け
            if (childText.includes('日本教育の歴史') || childText.includes('現状の課題')) {
              bgColor = 'bg-blue-900/30';
              borderColor = 'border-blue-500/50';
              textColor = 'text-blue-100';
              icon = '📊';
            } else if (childText.includes('本プロジェクトの位置づけ')) {
              bgColor = 'bg-purple-900/30';
              borderColor = 'border-purple-500/50';
              textColor = 'text-purple-100';
              icon = '🎯';
            } else if (childText.includes('教育理論に基づく')) {
              bgColor = 'bg-green-900/30';
              borderColor = 'border-green-500/50';
              textColor = 'text-green-100';
              icon = '📚';
            }
            
            return (
              <div className={`${bgColor} border ${borderColor} rounded-lg p-4 mt-8 mb-6`} {...props}>
                <h2 className={`text-2xl font-semibold ${textColor} flex items-center space-x-3`}>
                  <span className="text-2xl">{icon}</span>
                  <span>{children}</span>
                </h2>
              </div>
            );
          },
          h3: ({ children, ...props }) => {
            const childText = typeof children === 'string' ? children : children?.toString() || '';
            
            // 時代区分の特別な処理
            if (/^\d+\..*戦後|ゆとり教育|学力重視|現在/.test(childText)) {
              let accentColor = 'border-l-blue-500 bg-blue-900/10';
              
              if (childText.includes('ゆとり教育')) {
                accentColor = 'border-l-orange-500 bg-orange-900/10';
              } else if (childText.includes('学力重視')) {
                accentColor = 'border-l-red-500 bg-red-900/10';
              } else if (childText.includes('現在')) {
                accentColor = 'border-l-green-500 bg-green-900/10';
              }
              
              return (
                <div className={`${accentColor} border-l-4 pl-4 py-2 mt-6 mb-4`} {...props}>
                  <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                    <span className="text-2xl">📅</span>
                    <span>{children}</span>
                  </h3>
                </div>
              );
            }
            
            return (
              <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3" {...props}>
                {children}
              </h3>
            );
          },
          h4: ({ children, ...props }) => {
            const childText = typeof children === 'string' ? children : children?.toString() || '';
            
            // 教育理論の特別な処理
            if (childText.includes('教育理論：')) {
              return (
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mt-4 mb-3" {...props}>
                  <h4 className="text-lg font-medium text-yellow-300 flex items-center space-x-2">
                    <span className="text-xl">🧠</span>
                    <span>{children}</span>
                  </h4>
                </div>
              );
            }
            
            return (
              <h4 className="text-lg font-medium text-gray-200 mt-5 mb-2" {...props}>
                {children}
              </h4>
            );
          },
          h5: ({ children, ...props }) => (
            <h5 className="text-lg font-medium text-gray-200 mt-4 mb-2" {...props}>
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6 className="text-base font-medium text-gray-300 mt-3 mb-2" {...props}>
              {children}
            </h6>
          ),

          // パラグラフ
          p: ({ children, ...props }) => (
            <p className="text-gray-300 leading-relaxed mb-4" {...props}>
              {children}
            </p>
          ),

          // リスト
          ul: ({ children, ...props }) => (
            <ul className="space-y-3 mb-6" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="space-y-3 mb-6" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => {
            const extractText = (node: any): string => {
              if (typeof node === 'string') return node;
              if (typeof node === 'number') return String(node);
              if (Array.isArray(node)) return node.map(extractText).join('');
              if (node && typeof node === 'object' && node.props) {
                return extractText(node.props.children);
              }
              return String(node);
            };
            
            const text = extractText(children);
            
            // ✓/✗マークの特別な処理
            if (text.startsWith('✓')) {
              return (
                <li className="flex items-start space-x-3 p-3 bg-green-900/20 border border-green-700/30 rounded-lg" {...props}>
                  <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-green-100 font-medium">{text.substring(1).trim()}</span>
                </li>
              );
            }
            
            if (text.startsWith('✗')) {
              return (
                <li className="flex items-start space-x-3 p-3 bg-red-900/20 border border-red-700/30 rounded-lg" {...props}>
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-red-100 font-medium">{text.substring(1).trim()}</span>
                </li>
              );
            }
            
            // 番号付きリストかどうかチェック
            const isNumberedList = props.node?.parent?.tagName === 'ol';
            
            if (isNumberedList) {
              return (
                <li className="flex items-start space-x-3 p-3 bg-blue-900/10 border border-blue-700/20 rounded-lg text-blue-100" {...props}>
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span>{children}</span>
                </li>
              );
            }
            
            // 重要な項目をハイライト
            if (text.includes('国家戦略') || text.includes('成果') || text.includes('問題点') || text.includes('教訓')) {
              return (
                <li className="flex items-start space-x-3 p-3 bg-yellow-900/10 border border-yellow-700/20 rounded-lg" {...props}>
                  <span className="text-yellow-400 text-lg flex-shrink-0">⭐</span>
                  <span className="text-yellow-100 font-medium">{children}</span>
                </li>
              );
            }
            
            // 通常のリスト項目
            return (
              <li className="flex items-start space-x-3 p-2 text-gray-300" {...props}>
                <span className="text-gray-500 flex-shrink-0 mt-1">•</span>
                <span>{children}</span>
              </li>
            );
          },

          // 強調
          strong: ({ children, ...props }) => (
            <strong className="font-semibold text-white" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="italic text-blue-300" {...props}>
              {children}
            </em>
          ),

          // コードブロック（Mermaid対応）
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            if (!inline && match) {
              // childrenを文字列に正しく変換（デバッグ付き）
              let codeString = '';
              
              // より堅牢なchildren処理
              const extractText = (node: any): string => {
                if (typeof node === 'string') return node;
                if (typeof node === 'number') return String(node);
                if (Array.isArray(node)) return node.map(extractText).join('');
                if (node && typeof node === 'object' && node.props) {
                  return extractText(node.props.children);
                }
                return String(node);
              };
              
              codeString = extractText(children);
              
              codeString = codeString.replace(/\n$/, '');
              
              // Mermaidの場合は特別処理
              if (language === 'mermaid') {
                return (
                  <MermaidDiagram key={codeString} chart={codeString} />
                );
              }
              
              return (
                <div className="relative group">
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
                    <span className="text-sm text-gray-400 font-mono">{language}</span>
                    <button
                      onClick={() => copyToClipboard(codeString)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors p-1 rounded"
                      title="コードをコピー"
                    >
                      {copiedCode === codeString ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    style={oneDark}
                    language={language}
                    PreTag="div"
                    className="!mt-0 !rounded-t-none"
                    showLineNumbers
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              );
            }

            // インラインコードの処理
            const extractText = (node: any): string => {
              if (typeof node === 'string') return node;
              if (typeof node === 'number') return String(node);
              if (Array.isArray(node)) return node.map(extractText).join('');
              if (node && typeof node === 'object' && node.props) {
                return extractText(node.props.children);
              }
              return String(node);
            };
            
            const inlineCode = extractText(children);
            
            return (
              <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono" {...props}>
                {inlineCode}
              </code>
            );
          },

          // ブロッククォート
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 bg-gray-800 pl-4 py-2 my-4 italic text-gray-300" {...props}>
              {children}
            </blockquote>
          ),

          // テーブル
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg" {...props}>
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-gray-700" {...props}>
              {children}
            </thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody className="divide-y divide-gray-700" {...props}>
              {children}
            </tbody>
          ),
          tr: ({ children, ...props }) => (
            <tr className="hover:bg-gray-700 transition-colors" {...props}>
              {children}
            </tr>
          ),
          th: ({ children, ...props }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-white" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="px-4 py-3 text-sm text-gray-300" {...props}>
              {children}
            </td>
          ),

          // リンク
          a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith('http');
            const isInternal = href?.startsWith('/');
            
            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  {...props}
                >
                  {children}
                  <ExternalLink className="h-3 w-3" />
                </a>
              );
            }
            
            if (isInternal) {
              return (
                <Link href={href} className="text-blue-400 hover:text-blue-300 transition-colors" {...props}>
                  {children}
                </Link>
              );
            }
            
            return (
              <span className="text-blue-400" {...props}>
                {children}
              </span>
            );
          },

          // 水平線
          hr: ({ ...props }) => (
            <hr className="border-gray-700 my-8" {...props} />
          ),

          // 画像
          img: ({ src, alt, ...props }) => (
            <img
              src={src}
              alt={alt}
              className="max-w-full h-auto rounded-lg shadow-lg my-6"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}