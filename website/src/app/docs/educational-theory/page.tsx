import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EducationalTheoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Brain className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI個別最適化学習の学術的根拠
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              当学習塾のAIシステムは、心理学・教育学・認知科学の最新研究に基づいて設計されています。
              科学的エビデンスに裏打ちされた効果的な学習メソドロジーをご紹介します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#big-five">
                <Button size="lg" variant="secondary">
                  学術理論を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs/api">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  技術仕様
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">科学的アプローチによる個別最適化</h2>
            <p className="text-lg text-gray-600">
              当システムは4つの主要な学術理論を統合し、一人ひとりの学習者に最適化された学習体験を提供します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>パーソナリティ科学</CardTitle>
                </div>
                <CardDescription>Big Five理論による性格特性分析</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  50年以上の心理学研究で実証された最も信頼性の高いパーソナリティモデルを採用
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    開放性・誠実性・外向性・協調性・神経症傾向の5因子
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    学習スタイル（個人学習 vs グループ学習）の最適化
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>認知能力理論</CardTitle>
                </div>
                <CardDescription>Cattell-Horn-Carroll (CHC) 理論</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  流動性知能と結晶性知能の概念を活用した適応的学習システム
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    学習速度・理解度に応じた難易度調整
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    認知負荷理論に基づく情報提示量の最適化
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>多重知能理論</CardTitle>
                </div>
                <CardDescription>Gardner's Multiple Intelligence Theory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  8つの知能領域を考慮した多角的学習アプローチ
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    言語的・論理数学的・視覚空間的・身体運動的知能
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    音楽的・対人的・内省的・博物学的知能
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>自己決定理論</CardTitle>
                </div>
                <CardDescription>Self-Determination Theory (SDT)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  内発的動機づけを高める3つの基本的心理欲求に基づく設計
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    自律性（選択の自由）・有能感（達成体験）
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    関係性（コミュニティとのつながり）
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Big Five詳細 */}
      <section id="big-five" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Big Five パーソナリティ理論</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Costa & McCrae (1992) により確立され、現在最も信頼性の高いパーソナリティモデルとして
              世界中の心理学研究で使用されています。当システムでは子ども向けに適応化した簡易版を使用。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">5つのパーソナリティ因子</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      O
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">開放性 (Openness)</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        新しい経験や創造的活動への開放度。高い場合は探究的・芸術的学習を、
                        低い場合は構造化された学習を推奨。
                      </p>
                      <div className="text-xs bg-blue-50 p-2 rounded">
                        <strong>学習最適化:</strong> 創作活動 vs 反復学習の比重調整
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      C
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">誠実性 (Conscientiousness)</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        責任感・計画性・自己制御能力。高い場合は長期計画学習を、
                        低い場合は短期目標・即時フィードバックを重視。
                      </p>
                      <div className="text-xs bg-green-50 p-2 rounded">
                        <strong>学習最適化:</strong> 学習スケジュール・目標設定の個別化
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      E
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">外向性 (Extraversion)</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        社交性・活動性・積極性の程度。高い場合はグループ学習・討論を、
                        低い場合は個別学習・じっくり考える時間を提供。
                      </p>
                      <div className="text-xs bg-red-50 p-2 rounded">
                        <strong>学習最適化:</strong> グループ学習 vs 個人学習の選択
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">AIによる診断・最適化プロセス</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
                <h4 className="font-semibold mb-4">1. 診断段階（5分間）</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong>年齢適応化質問項目:</strong> 小学生が理解しやすい言葉・シチュエーションで表現
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong>視覚的インターフェース:</strong> イラスト・アイコンを使った直感的な回答方式
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong>リアルタイム分析:</strong> 回答パターン・反応時間も考慮した多角的評価
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
                <h4 className="font-semibold mb-4">2. 学習最適化</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      A
                    </div>
                    <div>
                      <strong>コンテンツ選択:</strong> パーソナリティに応じた教材・活動の自動推薦
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      B
                    </div>
                    <div>
                      <strong>指導スタイル調整:</strong> 励まし方・フィードバック方法の個別化
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      C
                    </div>
                    <div>
                      <strong>環境設定:</strong> オンライン vs オフライン活動の最適比率決定
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-semibold mb-3 text-blue-800">科学的妥当性</h4>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>信頼性係数:</strong> α = .80-.90 (非常に高い内的一貫性)</p>
                  <p><strong>妥当性:</strong> 50カ国以上での文化横断的検証済み</p>
                  <p><strong>予測力:</strong> 学業成績・学習継続率との有意な相関</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学習効果のエビデンス */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">学習効果のエビデンス</h2>
            <p className="text-lg text-gray-600">
              パーソナライズド学習の効果を示す最新研究結果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">2.3倍</div>
                <div className="text-sm text-gray-600">学習定着率向上</div>
                <div className="text-xs text-gray-500 mt-2">
                  Bloom (1984) 2σ問題<br />
                  個別指導 vs 集団指導
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">学習継続率</div>
                <div className="text-xs text-gray-500 mt-2">
                  Deci & Ryan (2000)<br />
                  内発的動機づけ効果
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">学習時間短縮</div>
                <div className="text-xs text-gray-500 mt-2">
                  Sweller (2011)<br />
                  認知負荷理論適用
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">主要研究文献</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-3">パーソナリティ理論</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Costa, P. T., & McCrae, R. R. (1992). NEO-PI-R professional manual.</li>
                  <li>• Goldberg, L. R. (1993). The structure of phenotypic personality traits.</li>
                  <li>• John, O. P., & Srivastava, S. (1999). The Big Five trait taxonomy.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">教育効果研究</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bloom, B. S. (1984). The 2 sigma problem: The search for methods.</li>
                  <li>• Gardner, H. (1983). Frames of mind: The theory of multiple intelligences.</li>
                  <li>• Deci, E. L., & Ryan, R. M. (2000). Self-determination theory.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIシステム詳細 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI個別最適化システム</h2>
            <p className="text-lg opacity-90">
              GPT-4oベースの自社開発LLMによる高度な個別最適化機能
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">教育特化ファインチューニング</CardTitle>
                <CardDescription className="text-gray-300">
                  教育心理学の知識を組み込んだ専門AIモデル
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">学習理論統合:</strong> 
                      認知負荷理論・構成主義・社会的学習理論
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">発達心理学:</strong> 
                      Piaget・Vygotsky理論に基づく年齢適応
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">安全性保証:</strong> 
                      児童保護・教育倫理ガイドライン組み込み
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">リアルタイム適応システム</CardTitle>
                <CardDescription className="text-gray-300">
                  学習状況に応じた動的コンテンツ調整
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">難易度調整:</strong> 
                      理解度に応じた自動レベリング
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">学習経路最適化:</strong> 
                      個人の進捗に応じたカリキュラム調整
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">感情認識:</strong> 
                      学習意欲・困惑度の検知と対応
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/docs/api">
              <Button size="lg" variant="secondary">
                技術仕様書を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}