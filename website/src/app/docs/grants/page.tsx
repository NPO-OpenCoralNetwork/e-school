import { DocLayout } from '@/components/docs/DocLayout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function GrantsPage() {
  return (
    <DocLayout
      title="助成金・補助金活用ガイド"
      description="NPO法人・教育事業向け助成金制度の詳細情報"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">助成金・補助金活用ガイド</h1>
          <p className="text-xl mb-6">NPO法人・教育事業向け助成金制度の詳細情報</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-500 hover:bg-green-600">最大1,000万円</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">年間複数申請可能</Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">教育事業特化</Badge>
          </div>
        </div>

        {/* 概要セクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 助成金活用戦略</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">年間助成金獲得目標</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-green-400">NPO法人</h4>
                <div className="text-2xl font-bold text-green-400 mt-2">800万円</div>
                <p className="text-sm text-gray-300 mt-1">複数助成金採択</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-blue-400">企業協賛</h4>
                <div className="text-2xl font-bold text-blue-400 mt-2">400万円</div>
                <p className="text-sm text-gray-300 mt-1">10社×40万円</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-purple-400">合計効果</h4>
                <div className="text-2xl font-bold text-purple-400 mt-2">1,200万円</div>
                <p className="text-sm text-gray-300 mt-1">年間資金調達</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 子どもゆめ基金 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🌟 子どもゆめ基金（最重要）</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">教材開発・普及活動助成金</h3>
              <Badge className="bg-blue-600">最大1,000万円</Badge>
            </div>
            <p className="mb-4 text-gray-300">子どもの体験活動や読書活動を支援するインターネット教材の開発・普及活動に対する助成</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-gray-700 border-gray-600">
              <h4 className="font-semibold mb-4 text-green-400">対象となる教材</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Webブラウザ上で使用する教材</li>
                <li>• スマートフォン・タブレット用アプリ</li>
                <li>• インターネット経由の学習コンテンツ</li>
                <li>• 既存ソフトウェアの改修も対象</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-700 border-gray-600">
              <h4 className="font-semibold mb-4 text-orange-400">必須要件</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 専門人材の参画（学識経験者等）</li>
                <li>• トライアウト（試行）の実施</li>
                <li>• 最低3年間の無償提供義務</li>
                <li>• 令和8年1月31日までの開発完了</li>
              </ul>
            </Card>
          </div>

          <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-2 text-yellow-300">📅 申請スケジュール</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><strong className="text-yellow-400">申請期間：</strong>令和6年10月1日（火）～11月7日（木）17時締切</li>
              <li><strong className="text-yellow-400">開発期間：</strong>令和7年4月1日～令和8年1月31日</li>
              <li><strong className="text-yellow-400">普及期間：</strong>開発完了後30日経過日、または令和8年2月28日まで</li>
            </ul>
          </div>

          <div className="bg-red-900 border border-red-700 rounded-lg p-6">
            <h4 className="font-semibold mb-2 text-red-300">⚠️ 注意事項</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• 申請は電子申請のみ（郵送・持参不可）</li>
              <li>• 予算成立前提の募集（変更の可能性あり）</li>
              <li>• 他の国の助成金との同時申請は不可</li>
              <li>• 実績報告時の経費変更により交付額減額の可能性</li>
            </ul>
          </div>
        </section>

        {/* その他の助成金 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">💰 その他の重要助成金</h2>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">ベネッセこども基金</h3>
                <Badge className="bg-purple-600">100-300万円</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-4">重い病気を抱えるこどもの学び支援活動助成</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-white">対象</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 重い病気の子どもの学習支援</li>
                    <li>• 経済困難家庭への支援</li>
                    <li>• オンライン学習環境整備</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">申請時期</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 年2回募集</li>
                    <li>• 経済困難家庭重点</li>
                    <li>• 継続的な活動を評価</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">こども地域応援ファンド</h3>
                <Badge className="bg-green-600">200-500万円</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">地域における子どもの居場所づくりや学習支援活動</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">対象活動</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 子どもの居場所づくり</li>
                    <li>• 学習支援・体験活動</li>
                    <li>• 地域コミュニティ形成</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 地域密着型を重視</li>
                    <li>• 多世代交流を推進</li>
                    <li>• 持続可能性を評価</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">IT・教育特化助成金</h3>
                <Badge className="bg-blue-600">300-500万円</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">ソフトバンクみらい基金、KDDI財団等のIT教育支援</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">ソフトバンクみらい基金</h4>
                  <ul className="text-sm space-y-1">
                    <li>• IT教育支援</li>
                    <li>• 上限500万円</li>
                    <li>• テクノロジー活用重視</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">KDDI財団</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 社会的課題解決</li>
                    <li>• 上限300万円</li>
                    <li>• ICT活用事業優遇</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Google.org</h4>
                  <ul className="text-sm space-y-1">
                    <li>• インパクトチャレンジ</li>
                    <li>• 最大1,000万円</li>
                    <li>• テクノロジー活用</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 申請戦略 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">📋 申請戦略・タイムライン</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">年間申請スケジュール</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-600 min-w-fit">4月</Badge>
                <div>
                  <h4 className="font-semibold">日本財団（年2回目）</h4>
                  <p className="text-sm text-gray-600">教育・人材育成事業、上限1,000万円</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-600 min-w-fit">5月</Badge>
                <div>
                  <h4 className="font-semibold">子どもゆめ基金（2回目）</h4>
                  <p className="text-sm text-gray-600">体験活動・読書活動、上限300万円</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-purple-600 min-w-fit">10月</Badge>
                <div>
                  <h4 className="font-semibold">子どもゆめ基金 教材開発</h4>
                  <p className="text-sm text-gray-600">デジタル教材開発、上限1,000万円</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-orange-600 min-w-fit">11月</Badge>
                <div>
                  <h4 className="font-semibold">ベネッセこども基金</h4>
                  <p className="text-sm text-gray-600">学び支援活動、上限300万円</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-4 text-green-600">成功のポイント</h4>
              <ul className="space-y-2 text-sm">
                <li>• 社会的インパクトの明確化</li>
                <li>• 具体的な成果指標（KPI）設定</li>
                <li>• 持続可能性の説明</li>
                <li>• 専門家・パートナーとの連携</li>
                <li>• 過去実績の積み重ね</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-4 text-orange-600">申請準備チェックリスト</h4>
              <ul className="space-y-2 text-sm">
                <li>• NPO法人登記完了</li>
                <li>• 定款・役員名簿準備</li>
                <li>• 納税証明書取得</li>
                <li>• 事業計画書詳細作成</li>
                <li>• 収支予算書精緻化</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 企業CSR連携 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">🤝 企業CSR連携戦略</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">アプローチ先企業</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">IT大手</h4>
                <ul className="text-sm space-y-1">
                  <li>• Google, Microsoft, AWS</li>
                  <li>• NTT, ソフトバンク, 楽天</li>
                  <li>• CSRレポート掲載価値</li>
                  <li>• 社員向け優待</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">人材系</h4>
                <ul className="text-sm space-y-1">
                  <li>• リクルート, パーソル</li>
                  <li>• パソナ</li>
                  <li>• 人材育成連携</li>
                  <li>• 転職支援連携</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">教育系</h4>
                <ul className="text-sm space-y-1">
                  <li>• ベネッセ, Z会</li>
                  <li>• リソー教育</li>
                  <li>• 教育ノウハウ共有</li>
                  <li>• 相互紹介</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">財務インパクト（年間予想）</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">項目</th>
                    <th className="text-left py-2">金額</th>
                    <th className="text-left py-2">備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 font-medium">収入増</td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2">・Google広告効果</td>
                    <td className="py-2 text-green-600 font-semibold">+600万円</td>
                    <td className="py-2 text-sm">CV率2%想定</td>
                  </tr>
                  <tr>
                    <td className="py-2">・助成金</td>
                    <td className="py-2 text-green-600 font-semibold">+500万円</td>
                    <td className="py-2 text-sm">2-3件採択</td>
                  </tr>
                  <tr>
                    <td className="py-2">・企業スポンサー</td>
                    <td className="py-2 text-green-600 font-semibold">+300万円</td>
                    <td className="py-2 text-sm">5社×60万</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">コスト削減</td>
                    <td className="py-2"></td>
                    <td className="py-2"></td>
                  </tr>
                  <tr>
                    <td className="py-2">・ソフトウェア</td>
                    <td className="py-2 text-blue-600 font-semibold">-150万円</td>
                    <td className="py-2 text-sm">無料/割引</td>
                  </tr>
                  <tr>
                    <td className="py-2">・広告費</td>
                    <td className="py-2 text-blue-600 font-semibold">-1,800万円</td>
                    <td className="py-2 text-sm">Ad Grants</td>
                  </tr>
                  <tr className="border-t-2">
                    <td className="py-2 font-bold">総効果</td>
                    <td className="py-2 text-purple-600 font-bold text-lg">+2,850万円</td>
                    <td className="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔗 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">連携戦略ガイド</h3>
              <p className="text-sm text-gray-600 mb-4">NPO×株式会社の法人構造設計</p>
              <a href="/docs/strategy" className="text-blue-600 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">事業企画書</h3>
              <p className="text-sm text-gray-600 mb-4">AI Creator Labの立ち上げ計画</p>
              <a href="/docs/business-plan" className="text-blue-600 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">サービス仕様</h3>
              <p className="text-sm text-gray-600 mb-4">技術仕様とAPI設計</p>
              <a href="/docs/services" className="text-blue-600 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}