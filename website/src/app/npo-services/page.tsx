import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DollarSign, Cloud, Database, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export default function NPOServicesPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-20 px-4 overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">NPO法人向け</span><br />
            テクノロジー支援サービス
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Google Ad Grants、Azure無料枠、助成金活用で、NPO法人の活動を技術でサポート。
            年間最大2,500万円相当のコスト削減を実現します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/npo-services/consultation">
              <Button size="lg" className="w-full sm:w-auto">
                無料相談申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/npo-services/case-studies">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                成功事例を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NPO法人の強力な優位性 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">NPO法人の強力な優位性</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">年間2,520万円のコスト削減効果</CardTitle>
                <CardDescription className="text-lg">
                  一般企業では不可能な特典を最大活用
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Google Ad Grants</span>
                      <span className="font-bold text-green-600">年間1,800万円</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Azure無料枠</span>
                      <span className="font-bold text-green-600">年間480万円</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Microsoft 365</span>
                      <span className="font-bold text-green-600">年間144万円</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>その他ツール</span>
                      <span className="font-bold text-green-600">年間96万円</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-600 mb-2">2,520万円</div>
                      <div className="text-lg text-gray-600">年間削減額</div>
                      <div className="text-sm text-gray-500 mt-2">
                        一般企業が3年かけて到達する地点に<br />
                        3ヶ月で到達可能
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 主要サービス */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">主要サービス</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Google Ad Grants */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Google Ad Grants</CardTitle>
                <CardDescription>月額150万円の広告を無料活用</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">$10,000</div>
                  <div className="text-sm text-gray-600">月額無料広告枠</div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">サポート内容</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      TechSoup登録サポート
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Google for Nonprofits申請
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      広告キャンペーン設計
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      継続的な運用支援
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link href="/npo-services/google-grants">
                    <Button className="w-full">
                      詳細・申込
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Azure活用支援 */}
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Cloud className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Azure活用ガイド</CardTitle>
                <CardDescription>年間52万円のクレジット活用</CardDescription>
                <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold w-fit mx-auto">
                  技術支援
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">$3,500</div>
                  <div className="text-sm text-gray-600">年間Azureクレジット</div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">活用例</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      AI chatbot構築
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      Webサイト・アプリ開発
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      データ分析基盤構築
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      動画配信プラットフォーム
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link href="/npo-services/azure-guide">
                    <Button className="w-full">
                      詳細・申込
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 助成金データベース */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">助成金データベース</CardTitle>
                <CardDescription>検索可能な助成金情報</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="font-bold text-green-600">500+</div>
                    <div className="text-xs text-gray-600">助成金情報</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="font-bold text-blue-600">毎週</div>
                    <div className="text-xs text-gray-600">情報更新</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">対象分野</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      教育・人材育成
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      IT・デジタル化
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      地域活性化
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      社会課題解決
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Link href="/npo-services/funding-database">
                    <Button className="w-full">
                      データベース検索
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 企業CSR連携 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">企業CSR連携サポート</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">企業スポンサー獲得支援</CardTitle>
                <CardDescription className="text-center text-lg">
                  大手企業との連携で安定した活動資金を確保
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">IT大手企業</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Google, Microsoft, AWS</li>
                      <li>NTT, ソフトバンク, 楽天</li>
                      <li>技術提供・資金援助</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">人材系企業</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>リクルート, パーソル</li>
                      <li>パソナ, エン・ジャパン</li>
                      <li>人材育成支援</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">教育系企業</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>ベネッセ, Z会</li>
                      <li>リソー教育, 学研</li>
                      <li>教育ノウハウ共有</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4 text-center">企業への提供価値</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="font-semibold">CSRレポート掲載</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="font-semibold">社員向け優待</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="font-semibold">ロゴ掲載権</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="font-semibold">講師派遣</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 成功事例 */}
      <section className="bg-purple-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">成功事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">1,800万円</div>
                <div className="font-semibold mb-2">年間広告効果</div>
                <div className="text-sm text-gray-600 mb-4">
                  Google Ad Grantsの活用で、年間1,800万円分の広告を無料で運用。
                  リード獲得数が300%向上。
                </div>
                <div className="text-xs text-gray-500">NPO法人A（教育支援）</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">500万円</div>
                <div className="font-semibold mb-2">開発コスト削減</div>
                <div className="text-sm text-gray-600 mb-4">
                  Azure無料枠を活用して学習プラットフォームを構築。
                  通常の開発コストを80%削減。
                </div>
                <div className="text-xs text-gray-500">NPO法人B（IT教育）</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">3件採択</div>
                <div className="font-semibold mb-2">助成金獲得</div>
                <div className="text-sm text-gray-600 mb-4">
                  データベースを活用して3件の助成金に採択。
                  総額800万円の活動資金を獲得。
                </div>
                <div className="text-xs text-gray-500">NPO法人C（地域活性化）</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 今すぐやるべきアクション */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">今すぐやるべきアクション</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">今週中</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TechSoup Japan 登録</li>
                  <li>• NPO法人書類準備</li>
                  <li>• 無料相談申込</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">来週中</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Google for Nonprofits申請</li>
                  <li>• Microsoft for Nonprofits申請</li>
                  <li>• ウェブサイト最適化</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">1ヶ月後</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ad Grants運用開始</li>
                  <li>• Azure環境構築</li>
                  <li>• 助成金申請準備</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">NPO法人の可能性を最大化しませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            無料相談で、あなたの団体がどれだけのコスト削減と効率化を実現できるかを確認してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/npo-services/consultation">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                無料相談申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/npo-services/google-grants">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600">
                Google Ad Grants申請支援
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}