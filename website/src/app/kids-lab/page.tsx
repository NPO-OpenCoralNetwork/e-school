import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, Zap, Heart, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function KidsLabPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">AI Kids Lab</span><br />
            みらいの創造工房
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">AI Kids Labのミッション</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">安心・安全な居場所</h3>
              <p className="text-sm text-gray-600">
                家庭でも学校でもない、第三の居場所として安心して過ごせる環境
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">創造性とテクノロジー</h3>
              <p className="text-sm text-gray-600">
                最新技術と創造的な思考を組み合わせた次世代の学び
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">地域コミュニティ</h3>
              <p className="text-sm text-gray-600">
                地域の人材と連携した温かいコミュニティ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Baby className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">未来を生きる力</h3>
              <p className="text-sm text-gray-600">
                変化の激しい時代を生き抜く創造力と問題解決力
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 年齢別プログラム */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">年齢別プログラム</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ビギナーコース */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                  <Baby className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">🐣 ビギナーコース</CardTitle>
                <CardDescription>小学1-3年生</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-semibold">月</div>
                    <div>AI遊び</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-semibold">火</div>
                    <div>プログラミング</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div className="font-semibold">水</div>
                    <div>デジタルアート</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded">
                    <div className="font-semibold">木</div>
                    <div>ロボット</div>
                  </div>
                  <div className="text-center p-2 bg-pink-50 rounded">
                    <div className="font-semibold">金</div>
                    <div>自由制作</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">学習内容</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      ChatGPTで物語作り
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Scratch Jr.プログラミング
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      お絵かき・3Dモデリング
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      micro:bit電子工作
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-lg font-bold text-green-600">¥8,000/月</div>
                    <div className="text-xs text-gray-600">週1回 16:00-17:00</div>
                  </div>
                  <Link href="/kids-lab/programs/beginner">
                    <Button size="sm">詳細</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* ジュニアコース */}
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">🚀 ジュニアコース</CardTitle>
                <CardDescription>小学4-6年生</CardDescription>
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold w-fit mx-auto">
                  人気
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-semibold">月</div>
                    <div>AI活用</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-semibold">火</div>
                    <div>Python</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded">
                    <div className="font-semibold">水</div>
                    <div>3DCG</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded">
                    <div className="font-semibold">木</div>
                    <div>STEM</div>
                  </div>
                  <div className="text-center p-2 bg-pink-50 rounded">
                    <div className="font-semibold">金</div>
                    <div>PBL</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">学習内容</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      プロンプトエンジニアリング
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Scratch→Python移行
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Blender・VRChat制作
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Arduino・IoT工作
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-lg font-bold text-green-600">¥14,000/月</div>
                    <div className="text-xs text-gray-600">週2回 16:30-18:00</div>
                  </div>
                  <Link href="/kids-lab/programs/junior">
                    <Button size="sm">詳細</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* アドバンスコース */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">💫 アドバンスコース</CardTitle>
                <CardDescription>中高生</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <div className="font-semibold">土曜集中講座</div>
                  <div className="text-sm text-gray-600">13:00-17:00</div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">専門技術</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      機械学習入門
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Web開発（React/Next.js）
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      ゲームエンジン（Unity）
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      ポートフォリオ作成
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-lg font-bold text-purple-600">¥18,000/月</div>
                    <div className="text-xs text-gray-600">週1回 4時間</div>
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
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ハイブリッド学習環境</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* リアル拠点 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <CardTitle>リアル拠点</CardTitle>
                </div>
                <CardDescription>地域の公民館・コミュニティセンター</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="font-semibold">メイン拠点</div>
                    <div className="text-sm text-gray-600">地域公民館</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="font-semibold">3拠点</div>
                    <div className="text-sm text-gray-600">各地域</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">設備</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• PC 20台・タブレット 30台</li>
                    <li>• 3Dプリンター・ロボット教材</li>
                    <li>• VRゴーグル・電子工作セット</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* オンライン環境 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <CardTitle>オンライン環境</CardTitle>
                </div>
                <CardDescription>24時間アクセス可能なバーチャル教室</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="font-semibold">Discord</div>
                    <div className="text-sm text-gray-600">コミュニティ</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <div className="font-semibold">Gather</div>
                    <div className="text-sm text-gray-600">バーチャル空間</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">機能</h4>
                  <ul className="space-y-1 text-sm">
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
      <section className="bg-green-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">料金・支援制度</h2>
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
                    <h4 className="font-semibold mb-2">特別割引</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 兄弟割引：2人目以降50%OFF</li>
                      <li>• ひとり親割引：50%OFF</li>
                      <li>• 早期申込割引：初月無料</li>
                      <li>• 紹介割引：1ヶ月無料</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">対象</h4>
                    <ul className="space-y-1 text-sm">
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
      <section className="bg-green-600 text-white py-20 px-4">
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
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600">
                保護者向け説明会
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}