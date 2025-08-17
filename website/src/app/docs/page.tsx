import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Settings, FileText, Search, Download } from "lucide-react";

export default function DocsPage() {
  const documentSections = [
    {
      id: "overview",
      title: "プロジェクト概要",
      description: "AI Creator Labの全体像とプロジェクト構成",
      icon: BookOpen,
      docs: [
        {
          title: "README",
          description: "プロジェクト概要・技術スタック・セットアップ手順",
          href: "/docs/readme",
          color: "bg-blue-500"
        }
      ]
    },
    {
      id: "strategy",
      title: "事業戦略",
      description: "NPO法人×株式会社連携戦略と助成金活用",
      icon: FileText,
      docs: [
        {
          title: "連携戦略ガイド",
          description: "NPO法人×株式会社の最適な法人構造設計",
          href: "/docs/strategy",
          color: "bg-purple-600"
        },
        {
          title: "助成金活用ガイド",
          description: "利用可能な助成金制度の詳細情報",
          href: "/docs/grants",
          color: "bg-green-600"
        },
        {
          title: "事業企画書",
          description: "AI Creator Lab Tokyo 30日間立ち上げ計画",
          href: "/docs/business-plan",
          color: "bg-orange-600"
        }
      ]
    },
    {
      id: "services",
      title: "サービス詳細",
      description: "各事業の詳細なサービス内容と料金体系",
      icon: FileText,
      docs: [
        {
          title: "サービス詳細",
          description: "大人・子ども・法人向けサービスの詳細",
          href: "/docs/services",
          color: "bg-green-500"
        }
      ]
    },
    {
      id: "development",
      title: "開発ガイド",
      description: "開発環境のセットアップとデプロイ手順",
      icon: Settings,
      docs: [
        {
          title: "セットアップガイド",
          description: "開発環境構築からデプロイまでの完全ガイド",
          href: "/docs/setup",
          color: "bg-purple-500"
        }
      ]
    },
    {
      id: "api",
      title: "API仕様",
      description: "将来実装予定のAPI設計とエンドポイント仕様",
      icon: Code,
      docs: [
        {
          title: "API仕様書",
          description: "認証・エンドポイント・データモデル仕様",
          href: "/docs/api",
          color: "bg-orange-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">ドキュメント</span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> & </span>
            <span className="text-white">技術資料</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            AI Creator Lab E-Schoolプラットフォームの包括的なドキュメンテーション
          </p>
          
          {/* 検索バー */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ドキュメントを検索..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* クイックアクション */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <Download className="w-4 h-4 mr-2" />
              PDFダウンロード
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              <FileText className="w-4 h-4 mr-2" />
              印刷用表示
            </Button>
          </div>
        </div>

        {/* ドキュメントセクション */}
        <div className="space-y-12">
          {documentSections.map((section) => (
            <div key={section.id} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <section.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.docs.map((doc) => (
                  <Card key={doc.href} className="bg-gray-800 border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={doc.href}>
                        <Button className="w-full group-hover:bg-blue-600 transition-colors">
                          ドキュメントを読む
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* フッターセクション */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">お困りですか？</h3>
            <p className="text-gray-400 mb-6">
              ドキュメントで解決しない問題がございましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="https://github.com/your-username/e-school/issues">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  GitHub Issues
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}