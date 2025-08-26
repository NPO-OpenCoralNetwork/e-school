import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, Zap, Heart, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function KidsLabPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-gray-900 via-emerald-900/50 to-blue-900/50 py-20 px-4 overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI Kids Lab</span><br />
            みらいの創造工房
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            すべての子どもたちに、テクノロジーで創造する喜びを。遊びながら学ぶデジタル創造教育で未来を生きる力を育てます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kids-lab/trial">
              <Button size="lg" className="w-full sm:w-auto">
                無料体験申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/kids-lab/programs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                プログラム一覧
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ミッション */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">AI Kids Labのミッション</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">安心・安全な居場所</h3>
              <p className="text-sm text-gray-300">
                家庭でも学校でもない、第三の居場所として安心して過ごせる環境
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">創造性とテクノロジー</h3>
              <p className="text-sm text-gray-300">
                最新技術と創造的な思考を組み合わせた次世代の学び
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">地域コミュニティ</h3>
              <p className="text-sm text-gray-300">
                地域の人材と連携した温かいコミュニティ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Baby className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2 text-white">未来を生きる力</h3>
              <p className="text-sm text-gray-300">
                変化の激しい時代を生き抜く創造力と問題解決力
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 年齢別プログラム */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">年齢別プログラム</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ビギナーコース */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-500/20 rounded-full w-fit">
                  <Baby className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-xl text-white">🐣 ビギナーコース</CardTitle>
                <CardDescription className="text-gray-300">小学1-3年生</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg">
                  <div className="font-semibold text-white mb-2">週2～3回・フレキシブル参加</div>
                  <div className="text-sm text-gray-300">AIサポート自習 + みんなでおしゃべり</div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">サードプレイス型学習</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-500/10 p-3 rounded">
                      <div className="font-medium text-blue-400 mb-1">AIサポート自習</div>
                      <div className="text-xs text-gray-400">好きなことをAIと一緒に学び探索</div>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded">
                      <div className="font-medium text-green-400 mb-1">みんなでおしゃべり</div>
                      <div className="text-xs text-gray-400">作品を見せ合ったり、一緒に作ったり</div>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded">
                      <div className="font-medium text-purple-400 mb-1">自由な居場所</div>
                      <div className="text-xs text-gray-400">家でも学校でもない、安心できる第三の居場所</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-lg font-bold text-green-400">¥8,000/月</div>
                    <div className="text-xs text-gray-400">週2～3回・フレキシブル</div>
                  </div>
                  <Link href="/kids-lab/programs/beginner">
                    <Button size="sm">詳細</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* ジュニアコース */}
            <Card className="border-2 border-green-500/50 hover:shadow-lg transition-shadow bg-gray-800">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-500/20 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl text-white">🚀 ジュニアコース</CardTitle>
                <CardDescription className="text-gray-300">小学4-6年生</CardDescription>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold w-fit mx-auto">
                  人気
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                  <div className="font-semibold text-white mb-2">週2～3回・プロジェクト型学習</div>
                  <div className="text-sm text-gray-300">自分のペースで深く学び、仒間と共创する</div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">コミュニティ中心学習</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-500/10 p-3 rounded">
                      <div className="font-medium text-blue-400 mb-1">AIメンター自習</div>
                      <div className="text-xs text-gray-400">お子さんの興味に合わせたAI学習サポート</div>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded">
                      <div className="font-medium text-green-400 mb-1">プロジェクト共创</div>
                      <div className="text-xs text-gray-400">仒間と一緒に作品を作り上げる協働体験</div>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded">
                      <div className="font-medium text-purple-400 mb-1">発表・ディスカッション</div>
                      <div className="text-xs text-gray-400">作品を発表し、みんなで意見交換</div>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded">
                      <div className="font-medium text-orange-400 mb-1">学習サポート</div>
                      <div className="text-xs text-gray-400">困った時は仒間やスタッフがサポート</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-lg font-bold text-green-400">¥12,000/月</div>
                    <div className="text-xs text-gray-400">週2～3回・プロジェクト型</div>
                  </div>
                  <Link href="/kids-lab/programs/junior">
                    <Button size="sm">詳細</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* アドバンスコース */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-500/20 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">💫 アドバンスコース</CardTitle>
                <CardDescription className="text-gray-300">中高生</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                  <div className="font-semibold text-white mb-2">週2〜3回・スペシャリストコース</div>
                  <div className="text-sm text-gray-300">将来を見据えた本格的な技術学習</div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-white">メンター型深度学習</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-500/10 p-3 rounded">
                      <div className="font-medium text-blue-400 mb-1">AIパーソナルメンター</div>
                      <div className="text-xs text-gray-400">個人の目標に合わせたカスタム学習プラン</div>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded">
                      <div className="font-medium text-green-400 mb-1">専門分野探究</div>
                      <div className="text-xs text-gray-400">興味のある分野を本格的に学び、作品制作</div>
                    </div>
                    <div className="bg-purple-500/10 p-3 rounded">
                      <div className="font-medium text-purple-400 mb-1">コミュニティリーダー</div>
                      <div className="text-xs text-gray-400">年下の子たちをサポートし、リーダーシップを育成</div>
                    </div>
                    <div className="bg-orange-500/10 p-3 rounded">
                      <div className="font-medium text-orange-400 mb-1">ポートフォリオ作成</div>
                      <div className="text-xs text-gray-400">大学進学や就職に向けた作品集作成</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <div className="text-lg font-bold text-purple-400">¥15,000/月</div>
                    <div className="text-xs text-gray-400">週2〜3回・メンター型</div>
                  </div>
                  <Link href="/kids-lab/programs/advance">
                    <Button size="sm">詳細</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ハイブリッド学習環境 */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">ハイブリッド学習環境</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* リアル拠点 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-400" />
                  <CardTitle className="text-white">リアル拠点</CardTitle>
                </div>
                <CardDescription className="text-gray-300">地域の公民館・コミュニティセンター</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-500/20 rounded">
                    <div className="font-semibold text-white">メイン拠点</div>
                    <div className="text-sm text-gray-300">地域公民館</div>
                  </div>
                  <div className="text-center p-3 bg-blue-500/20 rounded">
                    <div className="font-semibold text-white">3拠点</div>
                    <div className="text-sm text-gray-300">各地域</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">設備</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• PC 20台・タブレット 30台</li>
                    <li>• 3Dプリンター・ロボット教材</li>
                    <li>• VRゴーグル・電子工作セット</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* オンライン環境 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">オンライン環境</CardTitle>
                </div>
                <CardDescription className="text-gray-300">24時間アクセス可能なバーチャル教室</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-500/20 rounded">
                    <div className="font-semibold text-white">Discord</div>
                    <div className="text-sm text-gray-300">コミュニティ</div>
                  </div>
                  <div className="text-center p-3 bg-purple-500/20 rounded">
                    <div className="font-semibold text-white">Gather</div>
                    <div className="text-sm text-gray-300">バーチャル空間</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">機能</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 24時間もくもく部屋</li>
                    <li>• 学年別チャンネル</li>
                    <li>• 作品共有・相互評価</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 料金・支援制度 */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">料金・支援制度</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">スライディングスケール方式</CardTitle>
                <CardDescription>
                  家庭環境に関わらず、すべての子どもたちが学べる料金体系
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">コース</th>
                        <th className="text-center p-3">通常料金</th>
                        <th className="text-center p-3">低所得世帯</th>
                        <th className="text-center p-3">生活保護世帯</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">週1回コース</td>
                        <td className="text-center p-3">¥8,000/月</td>
                        <td className="text-center p-3">¥4,000/月</td>
                        <td className="text-center p-3 font-semibold text-green-600">無料</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">週2回コース</td>
                        <td className="text-center p-3">¥14,000/月</td>
                        <td className="text-center p-3">¥7,000/月</td>
                        <td className="text-center p-3 font-semibold text-green-600">¥1,000/月</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">週3回以上</td>
                        <td className="text-center p-3">¥18,000/月</td>
                        <td className="text-center p-3">¥9,000/月</td>
                        <td className="text-center p-3 font-semibold text-green-600">¥2,000/月</td>
                      </tr>
                      <tr>
                        <td className="p-3">オンラインのみ</td>
                        <td className="text-center p-3">¥5,000/月</td>
                        <td className="text-center p-3">¥2,500/月</td>
                        <td className="text-center p-3 font-semibold text-green-600">無料</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">特別割引</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• 兄弟割引：2人目以降50%OFF</li>
                      <li>• ひとり親割引：50%OFF</li>
                      <li>• 早期申込割引：初月無料</li>
                      <li>• 紹介割引：1ヶ月無料</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">対象</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• ひとり親家庭：全体の30%</li>
                      <li>• 生活困窮世帯：全体の20%</li>
                      <li>• 不登校児童：積極受入</li>
                      <li>• 発達特性のある子：専門サポート</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">お子さまの可能性を広げませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            無料体験会で、創造性とテクノロジーが融合した学びを体感してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kids-lab/trial">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                無料体験申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/kids-lab/parents">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-emerald-600">
                保護者向け説明会
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}