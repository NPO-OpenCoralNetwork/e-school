import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cpu, Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AIArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Server className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              自社LLM技術アーキテクチャ
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              GPT-4oベースの教育特化AIシステム。自社運用により85%のコスト削減と
              完全なデータプライバシー保護を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#architecture">
                <Button size="lg" variant="secondary">
                  システム構成を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs/educational-theory">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  学術的根拠
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* コスト削減効果 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">自社LLM運用によるコスト削減効果</h2>
            <p className="text-lg text-gray-600">
              NPO法人優位性とGPT-4oオープンソース活用により、大幅なコスト削減を実現
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl font-bold text-green-600 mb-4">85%</div>
                <div className="text-lg font-semibold mb-2">コスト削減</div>
                <div className="text-sm text-gray-600">
                  OpenAI API: 月額200万円<br />
                  → 自社運用: 月額30万円
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">100%</div>
                <div className="text-lg font-semibold mb-2">データ主権</div>
                <div className="text-sm text-gray-600">
                  学習データ・個人情報の<br />
                  完全自社管理
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-4">3年</div>
                <div className="text-lg font-semibold mb-2">投資回収</div>
                <div className="text-sm text-gray-600">
                  初期投資200万円を<br />
                  3年で回収完了
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">年間コスト比較</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-4">項目</th>
                    <th className="text-center p-4">OpenAI API利用</th>
                    <th className="text-center p-4">自社LLM運用</th>
                    <th className="text-center p-4">削減額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">AI API利用料</td>
                    <td className="text-center p-4 text-red-600 font-semibold">¥2,400万円</td>
                    <td className="text-center p-4 text-gray-400">¥0円</td>
                    <td className="text-center p-4 text-green-600 font-semibold">¥2,400万円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">インフラ運用費</td>
                    <td className="text-center p-4">¥0円</td>
                    <td className="text-center p-4 text-blue-600">¥360万円</td>
                    <td className="text-center p-4 text-red-600">-¥360万円</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">開発・保守費</td>
                    <td className="text-center p-4">¥200万円</td>
                    <td className="text-center p-4 text-blue-600">¥480万円</td>
                    <td className="text-center p-4 text-red-600">-¥280万円</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="p-4">年間合計</td>
                    <td className="text-center p-4 text-red-600">¥2,600万円</td>
                    <td className="text-center p-4 text-blue-600">¥840万円</td>
                    <td className="text-center p-4 text-green-600 text-xl">¥1,760万円削減</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* システムアーキテクチャ */}
      <section id="architecture" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">システムアーキテクチャ</h2>
            <p className="text-lg text-gray-600">
              Azure NPO無料枠を活用したスケーラブルなAIインフラ
            </p>
          </div>

          {/* アーキテクチャ図（テキストベース） */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">システム構成図</h3>
            <div className="font-mono text-sm bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
              <pre>{`
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Web Frontend  │────│   API Gateway    │────│   Auth Service  │
│   (Next.js)     │    │  (Azure APIM)    │    │  (Azure AD B2C) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   CDN           │    │   Load Balancer  │    │   User Database │
│ (Azure CDN)     │    │  (Azure LB)      │    │  (Azure SQL)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
            ┌─────────────────────────────────────────────┐
            │              AI Processing Layer             │
            │                                             │
            │  ┌─────────────┐  ┌─────────────┐          │
            │  │   GPT-4o    │  │  Vector DB  │          │
            │  │ Fine-tuned  │  │ (Pinecone)  │          │
            │  │   Model     │  │             │          │
            │  └─────────────┘  └─────────────┘          │
            │                                             │
            │  ┌─────────────┐  ┌─────────────┐          │
            │  │ Learning    │  │ Analytics   │          │
            │  │ Analytics   │  │ Engine      │          │
            │  │ (Python)    │  │ (ML.NET)    │          │
            │  └─────────────┘  └─────────────┘          │
            └─────────────────────────────────────────────┘
                                │
                                ▼
            ┌─────────────────────────────────────────────┐
            │              Data Layer                     │
            │                                             │
            │  ┌─────────────┐  ┌─────────────┐          │
            │  │ Learning    │  │ Content     │          │
            │  │ Data Store  │  │ Storage     │          │
            │  │(Cosmos DB)  │  │(Blob Store) │          │
            │  └─────────────┘  └─────────────┘          │
            └─────────────────────────────────────────────┘
              `}</pre>
            </div>
          </div>

          {/* 各レイヤー詳細 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Server className="h-6 w-6 text-blue-600" />
                  <CardTitle>AIプロセシング層</CardTitle>
                </div>
                <CardDescription>GPT-4oベース教育特化モデル</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">GPT-4o Fine-tuned Model</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 教育心理学データセット（50,000件）でファインチューニング</li>
                      <li>• 年齢別適応化（小学生〜高校生）</li>
                      <li>• 安全性フィルター組み込み</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vector Database</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 学習コンテンツのベクトル検索</li>
                      <li>• パーソナリティ類似度マッチング</li>
                      <li>• RAG (Retrieval-Augmented Generation)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <CardTitle>学習分析エンジン</CardTitle>
                </div>
                <CardDescription>リアルタイム学習最適化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">学習データ分析</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 学習進捗・理解度のリアルタイム追跡</li>
                      <li>• つまずきポイントの自動検出</li>
                      <li>• 最適な復習タイミング算出</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">適応アルゴリズム</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• スペースド・リピティション</li>
                      <li>• 認知負荷理論ベース難易度調整</li>
                      <li>• マルチアームバンディット最適化</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-purple-600" />
                  <CardTitle>データレイヤー</CardTitle>
                </div>
                <CardDescription>スケーラブルなデータ管理</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cosmos DB</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 学習履歴・進捗データ（NoSQL）</li>
                      <li>• グローバル分散・低レイテンシ</li>
                      <li>• 自動スケーリング</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Blob Storage</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 学習コンテンツ（動画・画像・音声）</li>
                      <li>• CDN統合による高速配信</li>
                      <li>• 自動アーカイブ・コスト最適化</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  <CardTitle>セキュリティ層</CardTitle>
                </div>
                <CardDescription>エンタープライズグレードセキュリティ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">データ保護</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• エンドツーエンド暗号化（AES-256）</li>
                      <li>• GDPR・個人情報保護法準拠</li>
                      <li>• 自動バックアップ・災害対策</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">アクセス制御</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Azure AD B2C統合認証</li>
                      <li>• ロールベースアクセス制御（RBAC）</li>
                      <li>• 多要素認証（MFA）対応</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 技術スタック詳細 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">技術スタック詳細</h2>
            <p className="text-lg text-gray-600">
              最新技術と実績のある技術の最適な組み合わせ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">フロントエンド・API</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-black text-white p-2 rounded text-sm font-bold">Next.js</div>
                      <span className="text-sm text-gray-600">v15 (App Router)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      React Server Components、TypeScript完全対応、SEO最適化
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-blue-600 text-white p-2 rounded text-sm font-bold">Azure</div>
                      <span className="text-sm text-gray-600">Functions v4</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      サーバーレス AI API、自動スケーリング、従量課金
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-green-600 text-white p-2 rounded text-sm font-bold">WebSocket</div>
                      <span className="text-sm text-gray-600">Socket.io</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      リアルタイムチャット、学習状況同期
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">AI・データ処理</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-purple-600 text-white p-2 rounded text-sm font-bold">GPT-4o</div>
                      <span className="text-sm text-gray-600">Self-hosted</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      教育特化ファインチューニング済み、プライベートクラウド運用
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-orange-600 text-white p-2 rounded text-sm font-bold">Python</div>
                      <span className="text-sm text-gray-600">3.11 + FastAPI</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      機械学習パイプライン、データ分析、学習最適化アルゴリズム
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-teal-600 text-white p-2 rounded text-sm font-bold">Pinecone</div>
                      <span className="text-sm text-gray-600">Vector DB</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      セマンティック検索、コンテンツ推薦、類似学習者マッチング
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* インフラ構成 */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">インフラ・運用</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Cpu className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">コンピュート</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Azure Container Instances</p>
                    <p>• GPU最適化 (NC-series)</p>
                    <p>• オートスケーリング</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">データベース</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Azure Cosmos DB</p>
                    <p>• Azure SQL Database</p>
                    <p>• Redis Cache</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">セキュリティ</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Azure Key Vault</p>
                    <p>• WAF + DDoS Protection</p>
                    <p>• 24/7 監視・アラート</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 実装ロードマップ */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">実装ロードマップ</h2>
            <p className="text-lg text-gray-600">
              段階的実装による安全で効率的なシステム構築計画
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Phase 1: 基盤システム構築</h3>
                    <p className="text-gray-600">期間: 1ヶ月</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    進行中
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">インフラ構築</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Azure リソース構成</li>
                      <li>• CI/CD パイプライン</li>
                      <li>• 監視・ログ設定</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">基本AI機能</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• GPT-4o モデルデプロイ</li>
                      <li>• 基本的なチャット機能</li>
                      <li>• セキュリティ実装</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Phase 2: AI診断・最適化機能</h3>
                    <p className="text-gray-600">期間: 1.5ヶ月</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    予定
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">診断システム</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Big Five 診断実装</li>
                      <li>• 学習スタイル判定</li>
                      <li>• 個別プラン生成</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">学習分析エンジン</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 進捗追跡システム</li>
                      <li>• 適応アルゴリズム</li>
                      <li>• レポート生成</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Phase 3: 高度なパーソナライゼーション</h3>
                    <p className="text-gray-600">期間: 2ヶ月</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    計画中
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">教育特化AI</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• ファインチューニング完了</li>
                      <li>• コンテンツ自動生成</li>
                      <li>• 感情認識機能</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">統合プラットフォーム</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• サードプレイス連携</li>
                      <li>• 保護者ダッシュボード</li>
                      <li>• モバイルアプリ対応</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">次世代AI教育システムの構築を始めませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            自社LLMによる完全制御可能なAIシステムで、教育の新たな可能性を切り開きます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                システム導入相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                技術詳細資料
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}