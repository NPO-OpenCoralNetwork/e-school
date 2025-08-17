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
          <h1 className="text-4xl font-bold mb-4">NPO法人×合同会社 連携戦略ガイド</h1>
          <p className="text-xl mb-6">生成AI教育事業の最適な法人構造設計</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-green-500 hover:bg-green-600">NPO法人：子ども向け無料事業</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">合同会社：大人向け収益事業</Badge>
            <Badge className="bg-orange-500 hover:bg-orange-600">連携効果：年間2,420万円利益</Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">ボランティア・メンバー募集中</Badge>
          </div>
        </div>

        {/* 新規参加者向けクイックガイド */}
        <div className="bg-gradient-to-r from-green-800 to-blue-800 text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">🚀 プロジェクトに参加する方へ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👀</span>
              </div>
              <h3 className="font-semibold mb-2">1. 全体像を把握</h3>
              <p className="text-sm opacity-90">この戦略ガイドでプロジェクトの目標と構造を理解</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">2. 役割を選択</h3>
              <p className="text-sm opacity-90">下記の「参加方法」から自分に合った貢献方法を選択</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">3. アクション開始</h3>
              <p className="text-sm opacity-90">「今すぐできること」から活動をスタート</p>
            </div>
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
            <h3 className="font-semibold mb-2 text-white">🎯 戦略概要</h3>
            <p className="text-sm text-gray-300">法人分離の全体構造とメリット</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
            <h3 className="font-semibold mb-2 text-white">📢 Google Ad Grants</h3>
            <p className="text-sm text-gray-300">基本要件と制限事項の詳細</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
            <h3 className="font-semibold mb-2 text-white">🏫 NPO法人事業</h3>
            <p className="text-sm text-gray-300">子ども向けフリースクール</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer bg-gray-800 border-gray-700">
            <h3 className="font-semibold mb-2 text-white">🏢 株式会社事業</h3>
            <p className="text-sm text-gray-300">大人向けプロフェッショナル育成</p>
          </Card>
        </div>

        {/* 戦略概要 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 戦略概要</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">法人分離の全体構造</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
              <Card className="p-6 text-center bg-gray-700 border-gray-600">
                <h4 className="font-bold text-green-400">NPO法人 e-school</h4>
                <p className="text-sm mt-2 text-gray-300">子ども向け事業</p>
              </Card>
              <div className="text-2xl text-white">⟷</div>
              <Card className="p-6 text-center bg-gray-700 border-gray-600">
                <h4 className="font-bold text-blue-400">合同会社 e-school</h4>
                <p className="text-sm mt-2 text-gray-300">大人向け事業</p>
              </Card>
            </div>
            <p className="text-gray-300"><strong className="text-white">核となる教育コンテンツ：</strong>生成AI（ChatGPT、Claude、Gemini）、プロンプトエンジニアリング、Blender（3DCG）、デザイン（Figma、Adobe）、動画制作、Webデザイン</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h4 className="font-semibold mb-4 text-green-400">NPO法人のメリット</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Google Ad Grants（月1万ドル）活用</li>
                <li>• 各種助成金・補助金の受給資格</li>
                <li>• 税制優遇（法人住民税等免除）</li>
                <li>• 社会的信頼度・ブランド価値</li>
                <li>• 寄付金受領によるファンドレイジング</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h4 className="font-semibold mb-4 text-blue-400">合同会社のメリット</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 設立コストが安く簡単（最低6万円）</li>
                <li>• 迅速な意思決定・柔軟性</li>
                <li>• 法人税率が低い（小規模時）</li>
                <li>• 高収益サービスの展開</li>
                <li>• 有限責任でリスク低減</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Google Ad Grants */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📢 Google Ad Grants 基本要件</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">プログラム概要</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">月額上限：</strong>$10,000（約100万円）</li>
              <li><strong className="text-white">対象：</strong>NPO法人、社会福祉法人、公益社団法人等</li>
              <li><strong className="text-white">広告形式：</strong>検索広告のみ（ディスプレイ広告は対象外）</li>
            </ul>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-600 rounded-lg bg-gray-800">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-white">項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">制限内容</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">重要度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-4 py-3 font-medium text-white">CPC上限</td>
                  <td className="px-4 py-3 text-gray-300">$2/クリック</td>
                  <td className="px-4 py-3 text-gray-300">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">CTR要件</td>
                  <td className="px-4 py-3 text-gray-300">5%以上維持必須（2ヶ月連続で下回ると停止）</td>
                  <td className="px-4 py-3 text-gray-300">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">商用利用</td>
                  <td className="px-4 py-3 text-gray-300">直接的な商品販売禁止</td>
                  <td className="px-4 py-3 text-gray-300">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">キーワード</td>
                  <td className="px-4 py-3 text-gray-300">1語キーワード禁止（ブランド名等除く）</td>
                  <td className="px-4 py-3 text-gray-300">⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-orange-900 border border-orange-700 rounded-lg p-6">
            <h4 className="font-semibold mb-2 text-orange-300">⚠️ CTR 5%要件について</h4>
            <p className="text-sm text-orange-200">Google Ad Grantsの5%CTR要件は<strong className="text-white">登録・アカウント有効化の初月から適用</strong>されます。猶予期間はありません。初月から高品質なキーワード選定と魅力的な広告文が必要です。</p>
          </div>
        </section>

        {/* 収益モデル */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">💰 統合収益モデル・予測</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">連携効果を含む統合収益予測（3年目）</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-green-400">NPO法人利益</h4>
                <div className="text-2xl font-bold text-green-400 mt-2">620万円</div>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-blue-400">合同会社利益</h4>
                <div className="text-2xl font-bold text-blue-400 mt-2">1,200万円</div>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-orange-400">連携シナジー効果</h4>
                <div className="text-2xl font-bold text-orange-400 mt-2">+600万円</div>
              </Card>
            </div>
            <div className="bg-blue-900 border border-blue-700 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-300">合計年間利益：2,420万円</h4>
              <p className="text-sm text-blue-200 mt-1">投資回収期間：2年 / ROI：年率150%以上</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">成長シナリオ（5年計画）</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-600 rounded-lg bg-gray-800">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-white">期間</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">フェーズ</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">NPO利益</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">合同会社利益</th>
                  <th className="px-4 py-3 text-left font-semibold text-white">合計利益</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-4 py-3 text-gray-300">Year 1-2</td>
                  <td className="px-4 py-3 text-gray-300">基盤構築期</td>
                  <td className="px-4 py-3 text-gray-300">200-400万円</td>
                  <td className="px-4 py-3 text-gray-300">300-600万円</td>
                  <td className="px-4 py-3 text-gray-300">500-1,000万円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Year 3</td>
                  <td className="px-4 py-3 text-gray-300">安定成長期</td>
                  <td className="px-4 py-3 text-gray-300">620万円</td>
                  <td className="px-4 py-3 text-gray-300">1,200万円</td>
                  <td className="px-4 py-3 text-gray-300">2,420万円</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Year 4-5</td>
                  <td className="px-4 py-3 text-gray-300">拡大期</td>
                  <td className="px-4 py-3 text-gray-300">1,000万円</td>
                  <td className="px-4 py-3 text-gray-300">3,000万円</td>
                  <td className="px-4 py-3 text-gray-300">4,000万円+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 実装ロードマップ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🗺️ 実装ロードマップ</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 1: 基盤構築（1-6ヶ月）</h3>
              <h4 className="font-semibold mb-2 text-green-400">共通基盤</h4>
              <ul className="space-y-1 text-sm mb-4 text-gray-300">
                <li>• NPO法人設立手続き</li>
                <li>• Google Ad Grants申請</li>
                <li>• 生成AI教育プラットフォーム開発開始</li>
                <li>• LLMパーソナライズ学習システム設計</li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 2: サービス開始（7-12ヶ月）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-400">大人向け事業開始</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 無料体験セミナー開始</li>
                    <li>• ハイブリッド型スクール第1期開講</li>
                    <li>• 企業研修営業開始</li>
                    <li>• 教育訓練給付制度申請</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-400">子ども向け事業開始</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 子ども向けプログラミングゲーム開発中 🎮</li>
                    <li>• オンライン重視フリースクール開校準備</li>
                    <li>• 最初の生徒10名確保</li>
                    <li>• 在籍校との連携システム構築</li>
                    <li>• 助成金申請・活用開始（申請中）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Phase 3: 事業拡大（13-24ヶ月）</h3>
              <h4 className="font-semibold mb-2 text-orange-400">目標達成指標</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• 大人向け：月間参加者100名達成</li>
                <li>• 子ども向け：在籍生徒50名達成</li>
                <li>• 年間利益1,000万円突破</li>
                <li>• 教材・コンテンツの共有活用開始</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 現在進行中の助成金申請 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 現在進行中の助成金申請</h2>
          
          <div className="bg-green-900 border border-green-700 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-300">申請中・開発中プロジェクト</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-white">🎮 子ども向けプログラミングゲーム開発</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 現在開発進行中</li>
                  <li>• 助成金活用予定</li>
                  <li>• ゲーミフィケーション学習</li>
                  <li>• AI技術を活用した個別最適化</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">📝 申請中・検討中助成金</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span><strong className="text-yellow-400">足立区げんき応援助成金</strong></span>
                      <span className="text-xs bg-yellow-600 px-2 py-1 rounded">申請済み</span>
                    </div>
                    <p className="text-gray-300 text-xs">課題解決方30万円申請中</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300">子どもゆめ基金 教材開発助成</span>
                      <span className="text-xs bg-blue-600 px-2 py-1 rounded">検討中</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://yumekikin.niye.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">公式サイト</a>
                      <a href="/docs/grants" className="text-green-400 hover:underline text-xs">ガイド</a>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300">ベネッセこども基金</span>
                      <span className="text-xs bg-blue-600 px-2 py-1 rounded">検討中</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://benesse-kodomokikin.or.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">公式サイト</a>
                      <a href="/docs/grants" className="text-green-400 hover:underline text-xs">ガイド</a>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-3 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300">こども地域応援ファンド</span>
                      <span className="text-xs bg-gray-600 px-2 py-1 rounded">検討中</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <a href="https://kodomoouen.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">公式サイト</a>
                      <a href="/docs/grants" className="text-green-400 hover:underline text-xs">ガイド</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 border border-blue-700 rounded-lg p-6">
            <h4 className="font-semibold mb-3 text-blue-300">📍 足立区げんき応援助成金について</h4>
            <p className="text-sm text-gray-300 mb-3">
              足立区が推進する地域課題解決・協働支援助成制度。NPO法人や市民活動団体による地域課題の解決に向けた取り組みを支援します。課題解決方は最大30万円の助成が受けられます。
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.city.adachi.tokyo.jp/kyoso/chiikibunka/kuminsanka/30genkijyoseikin.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                足立区げんき応援助成金 詳細 →
              </a>
              <a 
                href="/docs/grants" 
                className="text-green-400 hover:text-green-300 text-sm underline"
              >
                助成金活用ガイド →
              </a>
            </div>
          </div>
        </section>

        {/* プロジェクト参加方法 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🤝 プロジェクト参加方法</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">👨‍💻</div>
              <h3 className="font-semibold mb-3 text-white">開発・技術サポート</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• プログラミングゲーム開発</li>
                <li>• Webサイト・UI/UX改善</li>
                <li>• AI・機械学習実装</li>
                <li>• インフラ・システム構築</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>GitHubリポジトリをフォーク、issueを確認
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold mb-3 text-white">デザイン・コンテンツ</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• UI/UXデザイン</li>
                <li>• 教材・ゲームアセット作成</li>
                <li>• 動画・アニメーション制作</li>
                <li>• ブランディング・ロゴ</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>デザインガイドライン確認、サンプル作成
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold mb-3 text-white">事務・運営サポート</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• 助成金申請サポート</li>
                <li>• ドキュメント作成・翻訳</li>
                <li>• SNS運営・広報</li>
                <li>• イベント企画・運営</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>助成金情報調査、SNS投稿案作成
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-semibold mb-3 text-white">教育・講師</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• 子ども向け講師・メンター</li>
                <li>• カリキュラム作成</li>
                <li>• 教材レビュー・改善</li>
                <li>• 保護者対応・相談</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>教育方針確認、模擬授業準備
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-semibold mb-3 text-white">営業・パートナーシップ</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• 企業研修営業</li>
                <li>• 自治体・学校連携</li>
                <li>• スポンサー開拓</li>
                <li>• メディア対応</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>ターゲット企業リスト作成、営業資料確認
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-3 text-white">分析・戦略</h3>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                <li>• 市場調査・競合分析</li>
                <li>• データ分析・KPI設計</li>
                <li>• 事業計画・戦略立案</li>
                <li>• 法務・会計サポート</li>
              </ul>
              <div className="text-xs text-blue-400">
                <strong>今すぐできること：</strong>競合調査、市場レポート作成
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">🚀 今すぐ始められるアクション</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-yellow-400">すぐに始められること（5分〜）</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• このドキュメントを最後まで読む</li>
                  <li>• GitHubアカウントでプロジェクトをスター</li>
                  <li>• SNSでプロジェクトをシェア</li>
                  <li>• Discordサーバーに参加</li>
                  <li>• 自己紹介とスキルを投稿</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-400">週末にできること（1-3時間）</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 助成金申請書類のレビュー</li>
                  <li>• 競合サービスの調査レポート作成</li>
                  <li>• 教材プロトタイプの作成</li>
                  <li>• UI改善提案の作成</li>
                  <li>• 営業先リストの作成</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-200">
                <strong className="text-white">👥 参加方法：</strong>
                まずは興味のある分野を選んで、「今すぐできること」から始めてください。
                質問や相談がある場合は、Discordまたはお問い合わせフォームからご連絡ください。
              </p>
            </div>
          </div>
        </section>

        {/* 関連ドキュメント */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">📚 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">助成金・補助金情報</h3>
              <p className="text-sm text-gray-300 mb-4">利用可能な助成金制度の詳細一覧</p>
              <a href="/docs/grants" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">事業企画書</h3>
              <p className="text-sm text-gray-300 mb-4">AI Creator Labの立ち上げ計画</p>
              <a href="/docs/business-plan" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">子どもゆめ基金申請ガイド</h3>
              <p className="text-sm text-gray-300 mb-4">最大1,000万円の教材開発助成</p>
              <a href="https://yumekikin.niye.go.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">公式サイト →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}