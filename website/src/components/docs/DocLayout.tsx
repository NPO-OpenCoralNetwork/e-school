"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  FileText, 
  Settings, 
  Code,
  Search,
  ArrowUp,
  Users
} from 'lucide-react';
import { SearchModal } from '@/components/docs/SearchModal';
import { LucideIcon } from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
  children?: DocSection[];
}

const docSections: DocSection[] = [
  {
    id: 'overview',
    title: 'プロジェクト概要',
    href: '/docs/project-background',
    icon: BookOpen,
    children: [
      { id: 'project-background', title: 'プロジェクト背景書', href: '/docs/project-background', icon: FileText },
      { id: 'educational-proposal', title: '教育事業企画書', href: '/docs/educational-proposal', icon: FileText },
      { id: 'readme', title: 'README', href: '/docs/readme', icon: FileText },
    ]
  },
  {
    id: 'strategy',
    title: '事業戦略',
    href: '/docs/strategy',
    icon: FileText,
    children: [
      { id: 'strategy', title: '連携戦略ガイド', href: '/docs/strategy', icon: FileText },
      { id: 'grants', title: '助成金活用ガイド', href: '/docs/grants', icon: FileText },
      { id: 'business-plan', title: '事業企画書', href: '/docs/business-plan', icon: FileText },
    ]
  },
  {
    id: 'services',
    title: 'サービス詳細',
    href: '/docs/services',
    icon: Users,
    children: [
      { id: 'services', title: 'サービス詳細', href: '/docs/services', icon: FileText },
    ]
  },
  {
    id: 'development',
    title: '開発ガイド',
    href: '/docs/setup',
    icon: Settings,
    children: [
      { id: 'setup', title: 'セットアップガイド', href: '/docs/setup', icon: Settings },
    ]
  },
  {
    id: 'api',
    title: 'API仕様',
    href: '/docs/api',
    icon: Code,
    children: [
      { id: 'api', title: 'API仕様書', href: '/docs/api', icon: Code },
    ]
  },
];

interface DocLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function DocLayout({ children, title }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // スクロール監視
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAllDocs = () => {
    const allDocs: DocSection[] = [];
    docSections.forEach(section => {
      if (section.children) {
        allDocs.push(...section.children);
      } else {
        allDocs.push(section);
      }
    });
    return allDocs;
  };

  const getCurrentDocIndex = () => {
    const allDocs = getAllDocs();
    return allDocs.findIndex(doc => doc.href === pathname);
  };

  const allDocs = getAllDocs();
  const currentIndex = getCurrentDocIndex();
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/docs" className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-blue-400" />
              <span className="font-semibold text-white">Docs</span>
            </Link>
            {title && (
              <>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">{title}</span>
              </>
            )}
          </div>
          
          {/* 検索ボタン */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">検索</span>
            <span className="hidden sm:inline text-xs text-gray-500">⌘K</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* サイドバー */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          bg-gray-800 border-r border-gray-700 pt-16 lg:pt-0
        `}>
          <div className="h-full flex flex-col">
            {/* サイドバーヘッダー */}
            <div className="p-4 border-b border-gray-700 lg:hidden">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">ドキュメント</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* ナビゲーション */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                {docSections.map((section) => {
                  const hasActiveChild = section.children?.some(child => pathname === child.href);
                  const isSectionActive = pathname === section.href || hasActiveChild;
                  
                  return (
                    <li key={section.id}>
                      {/* セクションヘッダー */}
                      <div className={`
                        flex items-center space-x-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide
                        ${isSectionActive ? 'text-blue-400' : 'text-gray-500'}
                      `}>
                        <section.icon className="h-4 w-4" />
                        <span>{section.title}</span>
                      </div>
                      
                      {/* 子項目 */}
                      {section.children && (
                        <ul className="ml-6 space-y-1 mb-4">
                          {section.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <li key={child.id}>
                                <Link
                                  href={child.href}
                                  className={`
                                    flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm
                                    ${isChildActive 
                                      ? 'bg-blue-600 text-white border-l-2 border-blue-400' 
                                      : 'text-gray-300 hover:bg-gray-700 hover:text-white border-l-2 border-transparent hover:border-gray-600'
                                    }
                                  `}
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  <child.icon className="h-4 w-4" />
                                  <span>{child.title}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                      
                      {/* 子項目がない場合は直接リンク */}
                      {!section.children && (
                        <ul className="ml-6 space-y-1 mb-4">
                          <li>
                            <Link
                              href={section.href}
                              className={`
                                flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm
                                ${pathname === section.href
                                  ? 'bg-blue-600 text-white border-l-2 border-blue-400' 
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white border-l-2 border-transparent hover:border-gray-600'
                                }
                              `}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <section.icon className="h-4 w-4" />
                              <span>{section.title}</span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* サイドバーフッター */}
            <div className="p-4 border-t border-gray-700">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                ← メインサイトに戻る
              </Link>
            </div>
          </div>
        </aside>

        {/* オーバーレイ */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* メインコンテンツ */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {children}

            {/* ナビゲーション */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                {prevDoc ? (
                  <Link
                    href={prevDoc.href}
                    className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-400 group-hover:text-white" />
                    <div className="text-left">
                      <div className="text-sm text-gray-400">前のページ</div>
                      <div className="text-white font-medium">{prevDoc.title}</div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextDoc && (
                  <Link
                    href={nextDoc.href}
                    className="flex items-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group text-right"
                  >
                    <div className="text-right">
                      <div className="text-sm text-gray-400">次のページ</div>
                      <div className="text-white font-medium">{nextDoc.title}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* スクロールトップボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-50"
          title="ページトップに戻る"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* 検索モーダル */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}