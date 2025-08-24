"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Settings, FileText, Search, Download, Menu, X, Home, ArrowRight, Clock, Users, Star } from "lucide-react";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const documentSections = [
    {
      id: "overview",
      title: "プロジェクト概要",
      description: "AI Creator Labの全体像とプロジェクト構成",
      icon: BookOpen,
      priority: "high",
      docs: [
        {
          title: "プロジェクト背景書",
          description: "日本教育の歴史的変遷と本プロジェクトの位置づけ",
          href: "/docs/project-background",
          color: "bg-indigo-500",
          tags: ["教育史", "背景", "理論"],
          readTime: "15分",
          status: "完成"
        },
        {
          title: "教育事業企画書",
          description: "文科省方針を先行実装するハイブリッド学習塾",
          href: "/docs/educational-proposal",
          color: "bg-cyan-500",
          tags: ["企画書", "文科省", "ハイブリッド"],
          readTime: "20分",
          status: "完成"
        },
        {
          title: "README",
          description: "プロジェクト概要・技術スタック・セットアップ手順",
          href: "/docs/readme",
          color: "bg-blue-500",
          tags: ["概要", "技術", "セットアップ"],
          readTime: "8分",
          status: "完成"
        }
      ]
    },
    {
      id: "strategy",
      title: "事業戦略",
      description: "NPO法人×株式会社連携戦略と助成金活用",
      icon: FileText,
      priority: "high",
      docs: [
        {
          title: "連携戦略ガイド",
          description: "NPO法人×株式会社の最適な法人構造設計",
          href: "/docs/strategy",
          color: "bg-purple-600",
          tags: ["NPO", "連携", "法人"],
          readTime: "18分",
          status: "準備中"
        },
        {
          title: "助成金活用ガイド",
          description: "利用可能な助成金制度の詳細情報",
          href: "/docs/grants",
          color: "bg-green-600",
          tags: ["助成金", "制度", "活用"],
          readTime: "25分",
          status: "準備中"
        },
        {
          title: "事業企画書",
          description: "AI Creator Lab Tokyo 30日間立ち上げ計画",
          href: "/docs/business-plan",
          color: "bg-orange-600",
          tags: ["企画", "立ち上げ", "30日"],
          readTime: "22分",
          status: "準備中"
        }
      ]
    },
    {
      id: "services",
      title: "サービス詳細",
      description: "各事業の詳細なサービス内容と料金体系",
      icon: Users,
      priority: "medium",
      docs: [
        {
          title: "サービス詳細",
          description: "大人・子ども・法人向けサービスの詳細",
          href: "/docs/services",
          color: "bg-green-500",
          tags: ["サービス", "料金", "詳細"],
          readTime: "16分",
          status: "準備中"
        }
      ]
    },
    {
      id: "development",
      title: "開発ガイド",
      description: "開発環境のセットアップとデプロイ手順",
      icon: Settings,
      priority: "medium",
      docs: [
        {
          title: "セットアップガイド",
          description: "開発環境構築からデプロイまでの完全ガイド",
          href: "/docs/setup",
          color: "bg-purple-500",
          tags: ["開発", "セットアップ", "デプロイ"],
          readTime: "30分",
          status: "準備中"
        }
      ]
    },
    {
      id: "api",
      title: "API仕様",
      description: "将来実装予定のAPI設計とエンドポイント仕様",
      icon: Code,
      priority: "low",
      docs: [
        {
          title: "API仕様書",
          description: "認証・エンドポイント・データモデル仕様",
          href: "/docs/api",
          color: "bg-orange-500",
          tags: ["API", "仕様", "エンドポイント"],
          readTime: "35分",
          status: "準備中"
        }
      ]
    }
  ];

  // 検索フィルタリング
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return documentSections;
    
    return documentSections.map(section => ({
      ...section,
      docs: section.docs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })).filter(section => section.docs.length > 0);
  }, [searchQuery]);

  const totalDocs = documentSections.reduce((acc, section) => acc + section.docs.length, 0);
  const completedDocs = documentSections.reduce((acc, section) => 
    acc + section.docs.filter(doc => doc.status === "完成").length, 0);

  const quickLinks = [
    { name: "はじめに", href: "/docs/project-background", icon: BookOpen },
    { name: "セットアップ", href: "/docs/setup", icon: Settings },
    { name: "API仕様", href: "/docs/api", icon: Code },
    { name: "お問い合わせ", href: "/contact", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* ヘッダー */}
      <div className="relative bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Home className="w-4 h-4 mr-2" />
                ホーム
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-600" />
              <span className="text-white font-medium">ドキュメント</span>
            </div>
            
            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isNavOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AI Creator Lab ドキュメント
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              学術的根拠から技術仕様まで、当学習塾のAIシステムに関する詳細情報
            </p>

            {/* ステータスバッジ */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">総文書数: {totalDocs}</span>
              </div>
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <Star className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">完成: {completedDocs}/{totalDocs}</span>
              </div>
              <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">最終更新: 今日</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* サイドナビゲーション */}
          <div className={`lg:w-1/4 ${isNavOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-8 space-y-6">
              {/* 検索バー */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="文書を検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* クイックリンク */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">クイックリンク</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* セクション目次 */}
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">セクション</h3>
                <div className="space-y-2">
                  {documentSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors text-sm"
                    >
                      <section.icon className="w-4 h-4" />
                      <span>{section.title}</span>
                      <span className="ml-auto bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {section.docs.length}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* アクションボタン */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Download className="w-4 h-4 mr-2" />
                  PDFダウンロード
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <FileText className="w-4 h-4 mr-2" />
                  印刷用表示
                </Button>
              </div>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {filteredSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-8">
                  {/* セクションヘッダー */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        section.priority === 'high' ? 'bg-red-900/30 border border-red-800' :
                        section.priority === 'medium' ? 'bg-yellow-900/30 border border-yellow-800' :
                        'bg-gray-800 border border-gray-700'
                      }`}>
                        <section.icon className={`h-6 w-6 ${
                          section.priority === 'high' ? 'text-red-400' :
                          section.priority === 'medium' ? 'text-yellow-400' :
                          'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                        <p className="text-gray-400 mt-1">{section.description}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center space-x-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        section.priority === 'high' ? 'bg-red-900 text-red-300' :
                        section.priority === 'medium' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-gray-800 text-gray-300'
                      }`}>
                        {section.priority === 'high' ? '高優先度' :
                         section.priority === 'medium' ? '中優先度' : '低優先度'}
                      </span>
                    </div>
                  </div>

                  {/* ドキュメントカード */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {section.docs.map((doc) => (
                      <Card key={doc.href} className="bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 group backdrop-blur-sm">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 ${doc.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                doc.status === '完成' ? 'bg-green-900 text-green-300' :
                                'bg-orange-900 text-orange-300'
                              }`}>
                                {doc.status}
                              </span>
                              <div className="flex items-center text-gray-400 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {doc.readTime}
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {doc.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400 text-sm leading-relaxed">
                            {doc.description}
                          </CardDescription>
                          
                          {/* タグ */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {doc.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Link href={doc.href}>
                            <Button className="w-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 group-hover:shadow-lg">
                              ドキュメントを読む
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}

              {filteredSections.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">検索結果が見つかりません</h3>
                  <p className="text-gray-400 mb-6">
                    「{searchQuery}」に一致するドキュメントはありませんでした
                  </p>
                  <Button onClick={() => setSearchQuery("")} variant="outline">
                    検索をクリア
                  </Button>
                </div>
              )}
            </div>

            {/* フッターセクション */}
            <div className="mt-20 pt-8 border-t border-gray-700">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 text-center backdrop-blur-sm border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">サポートが必要ですか？</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  ドキュメントで解決しない問題や、より詳細な情報が必要な場合は、<br />
                  お気軽にお問い合わせください。専門チームがサポートします。
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Users className="w-4 h-4 mr-2" />
                      お問い合わせ
                    </Button>
                  </Link>
                  <Link href="https://github.com/your-username/e-school/issues">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Code className="w-4 h-4 mr-2" />
                      GitHub Issues
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}