import { DocLayout } from '@/components/docs/DocLayout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function StrategyPage() {
  return (
    <DocLayout
      title="NPO法人×株式会社 連携戦略ガイド"
      description="生成AI教育事業の最適な法人構造設計"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">NPO法人×株式会社 連携戦略ガイド</h1>
          <p className="text-xl mb-6">生成AI教育事業の最適な法人構造設計</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-500 hover:bg-green-600">NPO法人：子ども向け無料事業</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">株式会社：大人向け収益事業</Badge>
            <Badge className="bg-orange-500 hover:bg-orange-600">連携効果：年間2,420万円利益</Badge>
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">🎯 戦略概要</h3>
            <p className="text-sm text-gray-600">法人分離の全体構造とメリット</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">📢 Google Ad Grants</h3>
            <p className="text-sm text-gray-600">基本要件と制限事項の詳細</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">🏫 NPO法人事業</h3>
            <p className="text-sm text-gray-600">子ども向けフリースクール</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="font-semibold mb-2">🏢 株式会社事業</h3>
            <p className="text-sm text-gray-600">大人向けプロフェッショナル育成</p>
          </Card>
        </div>

        {/* 戦略概要 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🎯 戦略概要</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">法人分離の全体構造</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <Card className="p-6 text-center">
                <h4 className="font-bold text-green-600">NPO法人 e-school</h4>
                <p className="text-sm mt-2">子ども向け事業</p>
              </Card>
              <div className="text-2xl">⟷</div>
              <Card className="p-6 text-center">
                <h4 className="font-bold text-blue-600">株式会社 e-school</h4>
                <p className="text-sm mt-2">大人向け事業</p>
              </Card>
            </div>
            <p><strong>核となる教育コンテンツ：</strong>生成AI（ChatGPT、Claude、Gemini）、プロンプトエンジニアリング、Blender（3DCG）、デザイン（Figma、Adobe）、動画制作、Webデザイン</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-4 text-green-600">NPO法人のメリット</h4>
              <ul className="space-y-2 text-sm">
                <li>• Google Ad Grants（月1万ドル）活用</li>
                <li>• 各種助成金・補助金の受給資格</li>
                <li>• 税制優遇（法人住民税等免除）</li>
                <li>• 社会的信頼度・ブランド価値</li>
                <li>• 寄付金受領によるファンドレイジング</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-4 text-blue-600">株式会社のメリット</h4>
              <ul className="space-y-2 text-sm">
                <li>• 収益事業の自由度（制約なし）</li>
                <li>• 迅速な意思決定・経営判断</li>
                <li>• 投資家からの資金調達可能</li>
                <li>• 高収益サービスの展開</li>
                <li>• 役員報酬・配当の柔軟設定</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Google Ad Grants */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">📢 Google Ad Grants 基本要件</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">プログラム概要</h3>
            <ul className="space-y-2">
              <li><strong>月額上限：</strong>$10,000（約100万円）</li>
              <li><strong>対象：</strong>NPO法人、社会福祉法人、公益社団法人等</li>
              <li><strong>広告形式：</strong>検索広告のみ（ディスプレイ広告は対象外）</li>
            </ul>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">項目</th>
                  <th className="px-4 py-3 text-left font-semibold">制限内容</th>
                  <th className="px-4 py-3 text-left font-semibold">重要度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">CPC上限</td>
                  <td className="px-4 py-3">$2/クリック</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">CTR要件</td>
                  <td className="px-4 py-3">5%以上維持必須（2ヶ月連続で下回ると停止）</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">商用利用</td>
                  <td className="px-4 py-3">直接的な商品販売禁止</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">キーワード</td>
                  <td className="px-4 py-3">1語キーワード禁止（ブランド名等除く）</td>
                  <td className="px-4 py-3">⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold mb-2 text-orange-800">⚠️ CTR 5%要件について</h4>
            <p className="text-sm text-orange-700">Google Ad Grantsの5%CTR要件は<strong>登録・アカウント有効化の初月から適用</strong>されます。猶予期間はありません。初月から高品質なキーワード選定と魅力的な広告文が必要です。</p>
          </div>
        </section>

        {/* 収益モデル */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">💰 統合収益モデル・予測</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">連携効果を含む統合収益予測（3年目）</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Card className="p-4 text-center">
                <h4 className="font-semibold text-green-600">NPO法人利益</h4>
                <div className="text-2xl font-bold text-green-600 mt-2">620万円</div>
              </Card>
              <Card className="p-4 text-center">
                <h4 className="font-semibold text-blue-600">株式会社利益</h4>
                <div className="text-2xl font-bold text-blue-600 mt-2">1,200万円</div>
              </Card>
              <Card className="p-4 text-center">
                <h4 className="font-semibold text-orange-600">連携シナジー効果</h4>
                <div className="text-2xl font-bold text-orange-600 mt-2">+600万円</div>
              </Card>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-800">合計年間利益：2,420万円</h4>
              <p className="text-sm text-blue-700 mt-1">投資回収期間：2年 / ROI：年率150%以上</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">成長シナリオ（5年計画）</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">期間</th>
                  <th className="px-4 py-3 text-left font-semibold">フェーズ</th>
                  <th className="px-4 py-3 text-left font-semibold">NPO利益</th>
                  <th className="px-4 py-3 text-left font-semibold">株式会社利益</th>
                  <th className="px-4 py-3 text-left font-semibold">合計利益</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Year 1-2</td>
                  <td className="px-4 py-3">基盤構築期</td>
                  <td className="px-4 py-3">200-400万円</td>
                  <td className="px-4 py-3">300-600万円</td>
                  <td className="px-4 py-3">500-1,000万円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Year 3</td>
                  <td className="px-4 py-3">安定成長期</td>
                  <td className="px-4 py-3">620万円</td>
                  <td className="px-4 py-3">1,200万円</td>
                  <td className="px-4 py-3">2,420万円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Year 4-5</td>
                  <td className="px-4 py-3">拡大期</td>
                  <td className="px-4 py-3">1,000万円</td>
                  <td className="px-4 py-3">3,000万円</td>
                  <td className="px-4 py-3">4,000万円+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 実装ロードマップ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🗺️ 実装ロードマップ</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 1: 基盤構築（1-6ヶ月）</h3>
              <h4 className="font-semibold mb-2">共通基盤</h4>
              <ul className="space-y-1 text-sm mb-4">
                <li>• NPO法人設立手続き</li>
                <li>• Google Ad Grants申請</li>
                <li>• 生成AI教育プラットフォーム開発開始</li>
                <li>• LLMパーソナライズ学習システム設計</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 2: サービス開始（7-12ヶ月）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">大人向け事業開始</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 無料体験セミナー開始</li>
                    <li>• ハイブリッド型スクール第1期開講</li>
                    <li>• 企業研修営業開始</li>
                    <li>• 教育訓練給付制度申請</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">子ども向け事業開始</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• オンライン重視フリースクール開校</li>
                    <li>• 最初の生徒10名確保</li>
                    <li>• 在籍校との連携システム構築</li>
                    <li>• 補助金申請サポート開始</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 3: 事業拡大（13-24ヶ月）</h3>
              <h4 className="font-semibold mb-2">目標達成指標</h4>
              <ul className="space-y-1 text-sm">
                <li>• 大人向け：月間参加者100名達成</li>
                <li>• 子ども向け：在籍生徒50名達成</li>
                <li>• 年間利益1,000万円突破</li>
                <li>• 教材・コンテンツの共有活用開始</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 関連ドキュメント */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📚 関連ドキュメント</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">助成金・補助金情報</h3>
              <p className="text-sm text-gray-600 mb-4">利用可能な助成金制度の詳細</p>
              <a href="/docs/grants" className="text-blue-600 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">事業企画書</h3>
              <p className="text-sm text-gray-600 mb-4">AI Creator Labの立ち上げ計画</p>
              <a href="/docs/business-plan" className="text-blue-600 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}