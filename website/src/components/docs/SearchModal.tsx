"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, File, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  url: string;
  content: string;
  type: 'document' | 'section';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 検索対象のドキュメントデータ
const searchableContent: SearchResult[] = [
  {
    title: "プロジェクト概要",
    url: "/docs/readme",
    content: "AI Creator Lab Next.js React TypeScript プロジェクト概要 技術スタック セットアップ",
    type: "document"
  },
  {
    title: "大人向けAIスクール",
    url: "/docs/services#大人向けaiスクール",
    content: "3日間集中講座 ChatGPT Claude 実践的 プロンプトエンジニアリング 業務効率化",
    type: "section"
  },
  {
    title: "子ども向けスクール",
    url: "/docs/services#子ども向けスクール",
    content: "AI Kids Lab 年齢別プログラム 創造性 テクノロジー 公民館 オンライン ハイブリッド",
    type: "section"
  },
  {
    title: "法人向けサービス",
    url: "/docs/services#法人向けサービス",
    content: "企業研修 AI導入 コンサルティング DX戦略 カスタム研修 継続サポート",
    type: "section"
  },
  {
    title: "開発環境セットアップ",
    url: "/docs/setup#開発環境のセットアップ",
    content: "Node.js npm yarn 依存関係 インストール 開発サーバー",
    type: "section"
  },
  {
    title: "本番環境デプロイ",
    url: "/docs/setup#本番環境デプロイ",
    content: "Vercel Netlify デプロイ 環境変数 カスタムドメイン",
    type: "section"
  },
  {
    title: "API仕様書",
    url: "/docs/api",
    content: "REST API JWT認証 エンドポイント データモデル TypeScript",
    type: "document"
  },
  {
    title: "認証・認可",
    url: "/docs/api#認証認可",
    content: "JWT JSON Web Token Bearer Token ユーザー認証 ログイン",
    type: "section"
  },
  {
    title: "トラブルシューティング",
    url: "/docs/setup#トラブルシューティング",
    content: "エラー解決 ポート3000 TypeScript npm install node_modules",
    type: "section"
  }
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    // 簡単な検索ロジック
    const searchResults = searchableContent.filter(item => {
      const searchText = (item.title + ' ' + item.content).toLowerCase();
      const queryLower = query.toLowerCase();
      return searchText.includes(queryLower);
    });

    setResults(searchResults.slice(0, 8)); // 最大8件
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev === 0 ? results.length - 1 : prev - 1);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      window.location.href = results[selectedIndex].url;
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-2xl mx-4">
        {/* 検索入力 */}
        <div className="flex items-center px-4 py-3 border-b border-gray-700">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="ドキュメントを検索..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white ml-3"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 検索結果 */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center">
              <Search className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">キーワードを入力してドキュメントを検索</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>検索のヒント:</p>
                <ul className="mt-2 space-y-1">
                  <li>• "セットアップ" - 環境構築手順</li>
                  <li>• "API" - API仕様書</li>
                  <li>• "子ども" - 子ども向けサービス</li>
                  <li>• "企業" - 法人向けサービス</li>
                </ul>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-400 mb-2">"{query}" の検索結果が見つかりません</p>
              <p className="text-sm text-gray-500">
                別のキーワードで検索してみてください
              </p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={result.url}
                  href={result.url}
                  onClick={onClose}
                  className={`
                    block px-4 py-3 hover:bg-gray-700 transition-colors
                    ${index === selectedIndex ? 'bg-gray-700' : ''}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        ${result.type === 'document' ? 'bg-blue-600' : 'bg-gray-600'}
                      `}>
                        <File className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {result.title}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">
                          {result.type === 'document' ? 'ドキュメント' : 'セクション'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="px-4 py-3 border-t border-gray-700 bg-gray-900 rounded-b-lg">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex space-x-4">
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs mr-1">↑↓</kbd>
                ナビゲート
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs mr-1">Enter</kbd>
                選択
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs mr-1">Esc</kbd>
                閉じる
              </span>
            </div>
            <span>{results.length > 0 && `${results.length} 件の結果`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}