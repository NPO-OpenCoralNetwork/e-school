import { DocLayout } from '@/components/docs/DocLayout'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function BusinessPlanPage() {
  return (
    <DocLayout
      title="AI Creator Lab Tokyo 事業企画書"
      description="30日間立ち上げ計画とNPO法人特別戦略"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Creator Lab Tokyo</h1>
          <p className="text-xl mb-6">30日間立ち上げ計画とNPO法人特別戦略</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-yellow-500 hover:bg-yellow-600">30日間で立ち上げ</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">NPO特別戦略</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">子ども向けスクール</Badge>
          </div>
        </div>

        {/* 目次 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📋 目次</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
              <h3 className="font-semibold mb-2 text-white">🚀 30日間アクションプラン</h3>
              <p className="text-sm text-gray-300">最速での事業立ち上げ戦略</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
              <h3 className="font-semibold mb-2 text-white">🎯 NPO法人特別戦略</h3>
              <p className="text-sm text-gray-300">Google Ad Grants完全攻略</p>
            </Card>
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
              <h3 className="font-semibold mb-2 text-white">🌟 AI Kids Lab</h3>
              <p className="text-sm text-gray-300">子ども向けデジタル創造スクール</p>
            </Card>
          </div>
        </section>

        {/* 30日間アクションプラン */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🚀 立ち上げ30日間アクションプラン</h2>
          
          <div className="space-y-8">
            {/* Week 1 */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">🗓️ Week 1（Day 1-7）: 基盤構築</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4 bg-gray-700 border-gray-600">
                  <h4 className="font-semibold mb-3 text-white">Day 1-2: ビジネス設計</h4>
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm text-blue-400">午前（4時間）</h5>
                    <ul className="text-sm space-y-1 ml-4 text-gray-300">
                      <li>• ビジョン・ミッションの文書化</li>
                      <li>• ターゲット顧客の明確化（ペルソナ3つ）</li>
                      <li>• 競合分析シート作成（5社以上）</li>
                      <li>• 独自価値提案（USP）の定義</li>
                    </ul>
                    <h5 className="font-medium text-sm mt-3 text-green-400">午後（4時間）</h5>
                    <ul className="text-sm space-y-1 ml-4 text-gray-300">
                      <li>• 収支計画Excel作成</li>
                      <li>• 初期投資：50万円想定</li>
                      <li>• 月間収支シミュレーション</li>
                      <li>• 価格設定の決定</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-4 bg-gray-700 border-gray-600">
                  <h4 className="font-semibold mb-3 text-white">Day 3-4: 法的準備</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 事業形態の決定（個人→法人化）</li>
                    <li>• 屋号の決定と商標調査</li>
                    <li>• ドメイン取得（.com/.jp）</li>
                    <li>• ロゴ作成（Canva無料版）</li>
                    <li>• 開業届の準備</li>
                    <li>• 銀行口座の準備（事業用）</li>
                    <li>• 会計ソフトの選定</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-4 mt-4 bg-gray-700 border-gray-600">
                <h4 className="font-semibold mb-3 text-white">Day 5-7: Web基盤構築</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-sm mb-2 text-purple-400">必須ページ作成</h5>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>• トップページ</li>
                      <li>• コース紹介</li>
                      <li>• 料金表</li>
                      <li>• 講師紹介</li>
                      <li>• お問い合わせフォーム</li>
                      <li>• プライバシーポリシー</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-2 text-pink-400">SNSアカウント開設</h5>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>• X (Twitter) - @AICreatorLabTokyo</li>
                      <li>• Instagram - @ai.creator.lab.tokyo</li>
                      <li>• YouTube - AI Creator Lab Tokyo</li>
                      <li>• TikTok - @aicreatorlab</li>
                      <li>• LinkedIn - 会社ページ</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Week 2 */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">🗓️ Week 2（Day 8-14）: コンテンツ制作</h3>
              
              <Card className="p-4 mb-4 bg-gray-700 border-gray-600">
                <h4 className="font-semibold mb-3 text-white">最初の講座：「ChatGPT/Claude 仕事効率化 3日間集中講座」</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm bg-gray-800 rounded">
                    <thead className="bg-gray-600">
                      <tr>
                        <th className="px-3 py-2 text-left text-white">日程</th>
                        <th className="px-3 py-2 text-left text-white">内容</th>
                        <th className="px-3 py-2 text-left text-white">時間配分</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600">
                      <tr>
                        <td className="px-3 py-2 text-gray-300">Day 1: 基礎編</td>
                        <td className="px-3 py-2 text-gray-300">AIの仕組み、アカウント作成、基本操作、演習</td>
                        <td className="px-3 py-2 text-gray-300">30分×4セッション（計2時間）</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-300">Day 2: 実践編</td>
                        <td className="px-3 py-2 text-gray-300">文書作成自動化、データ分析、画像生成連携</td>
                        <td className="px-3 py-2 text-gray-300">40分×3セッション（計2時間）</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-gray-300">Day 3: 応用編</td>
                        <td className="px-3 py-2 text-gray-300">カスタムGPT作成、API連携基礎、業務適用計画</td>
                        <td className="px-3 py-2 text-gray-300">40分×3セッション（計2時間）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gray-700 border-gray-600">
                  <h4 className="font-semibold mb-3 text-white">Day 11-12: 無料コンテンツ制作</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 無料PDF：「AIで仕事を10倍速にする7つの方法」</li>
                    <li>• YouTube動画5本撮影</li>
                    <li>• ブログ記事3本（SEO対策）</li>
                    <li>• 各2000文字程度</li>
                  </ul>
                </Card>
                <Card className="p-4 bg-gray-700 border-gray-600">
                  <h4 className="font-semibold mb-3 text-white">Day 13-14: システム構築</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• Stripe（決済システム）</li>
                    <li>• Calendly（予約システム）</li>
                    <li>• Google Classroom（LMS）</li>
                    <li>• Zapier連携（自動化）</li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* 初期投資 */}
            <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">💰 初期投資内訳（最小限版）</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm bg-gray-800 rounded">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-3 py-2 text-left text-white">項目</th>
                      <th className="px-3 py-2 text-left text-white">金額</th>
                      <th className="px-3 py-2 text-left text-white">備考</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    <tr>
                      <td className="px-3 py-2 text-gray-300">ドメイン・サーバー</td>
                      <td className="px-3 py-2 text-gray-300">5,000円</td>
                      <td className="px-3 py-2 text-gray-300">年間</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-300">Zoom Pro</td>
                      <td className="px-3 py-2 text-gray-300">2,000円</td>
                      <td className="px-3 py-2 text-gray-300">月額</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-300">ChatGPT Plus</td>
                      <td className="px-3 py-2 text-gray-300">3,000円</td>
                      <td className="px-3 py-2 text-gray-300">月額</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-300">広告費</td>
                      <td className="px-3 py-2 text-gray-300">30,000円</td>
                      <td className="px-3 py-2 text-gray-300">Facebook/Google</td>
                    </tr>
                    <tr className="bg-yellow-800 font-semibold">
                      <td className="px-3 py-2 text-yellow-200">合計</td>
                      <td className="px-3 py-2 text-yellow-200">50,000円</td>
                      <td className="px-3 py-2 text-yellow-200"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* NPO法人特別戦略 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 NPO法人向け特別戦略</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">NPO法人の強力な優位性</h3>
            <p className="mb-4 text-gray-300">NPO法人をお持ちなら、一般的な営利企業では不可能な特典が山ほどあります！</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-purple-400">Google Ad Grants</h4>
                <div className="text-2xl font-bold text-purple-400 mt-2">月150万円</div>
                <p className="text-sm text-gray-300 mt-1">年間1,800万円分無料</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-blue-400">各種助成金</h4>
                <div className="text-2xl font-bold text-blue-400 mt-2">500万円</div>
                <p className="text-sm text-gray-300 mt-1">複数申請可能</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-green-400">ツール無料化</h4>
                <div className="text-2xl font-bold text-green-400 mt-2">150万円</div>
                <p className="text-sm text-gray-300 mt-1">年間コスト削減</p>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h4 className="font-semibold mb-4 text-blue-400">Google Ad Grants 完全攻略法</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2 text-white">申請準備（1週間）</h5>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• TechSoup Japan で団体確認</li>
                    <li>• Google for Nonprofits 申請</li>
                    <li>• NPO法人のWebサイト（必須）</li>
                    <li>• SSL証明書（https://）</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-white">高価値キーワード戦略</h5>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 「生成AI 学習」（月8,100回）</li>
                    <li>• 「ChatGPT 使い方」（月27,100回）</li>
                    <li>• 「AI 副業」（月4,400回）</li>
                    <li>• 「東京 AI スクール」（月720回）</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <h4 className="font-semibold mb-4 text-green-400">その他の無料・割引サービス</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm bg-gray-700 rounded">
                  <thead className="bg-gray-600">
                    <tr>
                      <th className="px-3 py-2 text-left text-white">ツール</th>
                      <th className="px-3 py-2 text-left text-white">割引率</th>
                      <th className="px-3 py-2 text-left text-white">月額節約額</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-600">
                    <tr>
                      <td className="px-3 py-2 text-gray-300">Microsoft 365 Business Premium</td>
                      <td className="px-3 py-2 text-gray-300">無料</td>
                      <td className="px-3 py-2 text-gray-300">約33万円（年間）</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-300">Slack</td>
                      <td className="px-3 py-2 text-gray-300">85%割引</td>
                      <td className="px-3 py-2 text-gray-300">約15,000円</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-gray-300">Adobe Creative Cloud</td>
                      <td className="px-3 py-2 text-gray-300">60%割引</td>
                      <td className="px-3 py-2 text-gray-300">約4,000円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* AI Kids Lab */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🌟 AI Kids Lab - みらいの創造工房</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">ビジョン・ミッション</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">ビジョン</h4>
                <p className="text-sm text-gray-300">「すべての子どもたちに、テクノロジーで創造する喜びを」</p>
                <p className="text-sm mt-2 text-gray-300">デジタル格差をなくし、家庭環境に関わらず、すべての子どもたちが最先端技術に触れ、自由に創造できる第三の居場所（サードプレイス）を提供します。</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">ミッション</h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• 安心・安全な放課後の居場所づくり</li>
                  <li>• 創造性とテクノロジーの融合教育</li>
                  <li>• 地域コミュニティの活性化</li>
                  <li>• 未来を生きる力の育成</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-900 border border-green-700 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-green-300">💰 収支計画（年間）</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-green-400 mb-2">収入（2,520万円）</h5>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• 受講料収入：960万円</li>
                  <li>• 助成金：800万円</li>
                  <li>• 企業協賛：400万円</li>
                  <li>• 寄付金：200万円</li>
                  <li>• イベント収入：100万円</li>
                  <li>• 教材販売：60万円</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-400 mb-2">支出（2,200万円）</h5>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• 人件費：1,320万円</li>
                  <li>• 機材・教材費：300万円</li>
                  <li>• システム費：180万円</li>
                  <li>• 会場費：120万円</li>
                  <li>• 予備費：120万円</li>
                  <li>• 広報費：100万円</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-800 rounded border-2 border-green-600 text-center">
              <p className="font-bold text-green-300">年間収支：+320万円（次年度拡大資金）</p>
            </div>
          </div>
        </section>

        {/* 今すぐ始めるアクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 今すぐ始めるアクション</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-900 border-red-700">
              <h4 className="font-semibold mb-3 text-red-300">今日中に（30分で）</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>1. Xアカウント作成</li>
                <li>2. 最初のツイート投稿</li>
                <li>3. Notionで計画管理ページ作成</li>
              </ul>
            </Card>
            <Card className="p-6 bg-orange-900 border-orange-700">
              <h4 className="font-semibold mb-3 text-orange-300">明日までに（2時間で）</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>1. ドメイン取得</li>
                <li>2. Canvaでロゴ作成</li>
                <li>3. 体験会の日程決定</li>
              </ul>
            </Card>
            <Card className="p-6 bg-green-900 border-green-700">
              <h4 className="font-semibold mb-3 text-green-300">今週中に（10時間で）</h4>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>1. Webサイト公開</li>
                <li>2. 最初の教材作成</li>
                <li>3. 無料体験会の告知開始</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900 to-pink-900 border border-purple-700 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-purple-300">🌟 成功の秘訣</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• 完璧を求めない（70%で走り出す）</li>
                <li>• 毎日1つは必ず前進する</li>
              </ul>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>• フィードバックは即反映</li>
                <li>• 最初の1人を大切にする</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 関連ドキュメント */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">🔗 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">連携戦略ガイド</h3>
              <p className="text-sm text-gray-300 mb-4">NPO×合同会社の法人構造設計</p>
              <a href="/docs/strategy" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">助成金活用ガイド</h3>
              <p className="text-sm text-gray-300 mb-4">利用可能な助成金制度の詳細</p>
              <a href="/docs/grants" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">サービス仕様</h3>
              <p className="text-sm text-gray-300 mb-4">技術仕様とAPI設計</p>
              <a href="/docs/services" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}