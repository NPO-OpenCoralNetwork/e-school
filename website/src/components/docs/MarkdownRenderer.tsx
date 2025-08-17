"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
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
          h2: ({ children, ...props }) => (
            <h2 className="text-3xl font-semibold text-white mt-8 mb-4 pb-2 border-b border-gray-800" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-2xl font-semibold text-gray-100 mt-6 mb-3" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="text-xl font-medium text-gray-200 mt-5 mb-2" {...props}>
              {children}
            </h4>
          ),
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
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 ml-4" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-gray-300" {...props}>
              {children}
            </li>
          ),

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

          // コードブロック
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            if (!inline && match) {
              const codeString = String(children).replace(/\n$/, '');
              
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

            return (
              <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm font-mono" {...props}>
                {children}
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