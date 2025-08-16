import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Building2, ArrowRight, Star, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AIで未来を創る<br />
            <span className="text-blue-600">学びの場</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            すべての人にAI時代を生き抜く力を。大人から子どもまで、NPO法人まで、
            包括的なAI教育プラットフォームで未来をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adult-school/trial">
              <Button size="lg" className="w-full sm:w-auto">
                無料体験申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                資料ダウンロード
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの事業紹介 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">3つの事業でAI時代をサポート</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 大人向けスクール */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">大人向けAIスクール</CardTitle>
                <CardDescription>
                  仕事で使えるAIスキルを短期間で習得
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    3日間集中講座
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ChatGPT/Claude活用術
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    実践的なプロンプトエンジニアリング
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    業務効率化の実現
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/adult-school">
                    <Button className="w-full">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 子ども向けスクール */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">子ども向けスクール</CardTitle>
                <CardDescription>
                  遊びながら学ぶデジタル創造教育
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    年齢別プログラム（小1〜高校生）
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    AI・プログラミング・3DCG
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    公民館×オンラインのハイブリッド
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    安心・安全なサードプレイス
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/kids-lab">
                    <Button className="w-full">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* NPO向けサービス */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">NPO向けサービス</CardTitle>
                <CardDescription>
                  Google Ad Grants等の活用支援
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    月150万円の広告無料活用
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Azure年52万円クレジット
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    助成金データベース
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    技術サポート・コンサルティング
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/npo-services">
                    <Button className="w-full">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 特徴・強み - 新しいデザイン */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">AI Creator Labの強み</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 実践重視の教育 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-300 p-3 rounded-xl">
                    <span className="text-2xl font-bold text-white">実践</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">実践重視の教育</h3>
                    <p className="text-gray-300 leading-relaxed">
                      理論だけでなく、実際の業務や創作活動ですぐに使えるスキルを重視。
                      即戦力となる実践的な学習体験を提供します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 個別サポート */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-300 p-3 rounded-xl">
                    <span className="text-2xl font-bold text-white">個別</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">個別サポート</h3>
                    <p className="text-gray-300 leading-relaxed">
                      一人ひとりのレベルや目標に合わせたパーソナライズド教育。
                      あなただけの学習ペースで確実にスキルアップ。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 継続学習支援 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-300 p-3 rounded-xl">
                    <span className="text-2xl font-bold text-white">継続</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">継続学習支援</h3>
                    <p className="text-gray-300 leading-relaxed">
                      コース終了後もコミュニティで継続的な学習をサポート。
                      生涯にわたる学習パートナーとして寄り添います。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 最新技術対応 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-300 p-3 rounded-xl">
                    <span className="text-2xl font-bold text-white">最新</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">最新技術対応</h3>
                    <p className="text-gray-300 leading-relaxed">
                      急速に進歩するAI技術に対応した最新のカリキュラム。
                      常に時代の最先端を学び続けることができます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績・数字 - 新しいデザイン */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">数字で見る実績</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              多くの受講生に選ばれ、高い満足度を維持し続けています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* 受講生数 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  500<span className="text-2xl">+</span>
                </div>
                <div className="text-blue-800 font-semibold text-lg">受講生数</div>
                <div className="text-blue-600 text-sm mt-2">累計受講者数</div>
              </div>
            </div>

            {/* 満足度 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  98<span className="text-2xl">%</span>
                </div>
                <div className="text-emerald-800 font-semibold text-lg">満足度</div>
                <div className="text-emerald-600 text-sm mt-2">受講生評価</div>
              </div>
            </div>

            {/* 企業導入実績 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50<span className="text-2xl">+</span>
                </div>
                <div className="text-purple-800 font-semibold text-lg">企業導入実績</div>
                <div className="text-purple-600 text-sm mt-2">法人向け研修</div>
              </div>
            </div>

            {/* 学習サポート */}
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24<span className="text-2xl">h</span>
                </div>
                <div className="text-amber-800 font-semibold text-lg">学習サポート</div>
                <div className="text-amber-600 text-sm mt-2">いつでも質問可能</div>
              </div>
            </div>
          </div>

          {/* 追加の統計情報 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-gray-800 mb-2">平均3倍</div>
              <div className="text-gray-600">業務効率向上</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-gray-800 mb-2">80%削減</div>
              <div className="text-gray-600">残業時間</div>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600">コース完了率</div>
            </div>
          </div>
        </div>
      </section>

      {/* 利用者の声 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">利用者の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "3日間でChatGPTを業務に活用できるようになりました。作業効率が3倍になり、残業時間も大幅に削減できました。"
                </p>
                <div className="font-semibold">田中さん（30代・営業職）</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "息子が楽しそうにプログラミングを学んでいます。創造力と論理的思考力が身についているのを感じます。"
                </p>
                <div className="font-semibold">佐藤さん（保護者）</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Google Ad Grantsの活用で、年間1,800万円分の広告を無料で運用できるようになりました。"
                </p>
                <div className="font-semibold">NPO法人理事長</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐAI学習を始めませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            無料体験会を開催中。あなたのAI活用の第一歩をサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adult-school/trial">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                無料体験会に参加
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}