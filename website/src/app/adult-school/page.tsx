import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function AdultSchoolPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            大人向け<span className="text-blue-600">AIスクール</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            仕事で使えるAIスキルを短期間で習得。ChatGPT/Claudeを活用して業務効率を劇的に向上させます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adult-school/trial">
              <Button size="lg" className="w-full sm:w-auto">
                無料体験申込
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/adult-school/courses">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                コース一覧を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* メインコース紹介 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">人気のコース</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3日間集中講座 */}
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">ChatGPT/Claude 仕事効率化 3日間集中講座</CardTitle>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    人気No.1
                  </div>
                </div>
                <CardDescription className="text-lg">
                  AIツールを使って業務効率を劇的に向上させる実践的なスキルを習得
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">3日間</div>
                    <div className="text-sm text-gray-600">各2時間</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">少人数制</div>
                    <div className="text-sm text-gray-600">最大20名</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">修了証</div>
                    <div className="text-sm text-gray-600">デジタル発行</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">学習内容</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-blue-600 mb-1">Day 1: AI基礎編</div>
                      <ul className="text-sm text-gray-600 ml-4 space-y-1">
                        <li>• AIの仕組みと可能性</li>
                        <li>• アカウント作成・基本操作</li>
                        <li>• 効果的なプロンプトの書き方</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 mb-1">Day 2: 実践編</div>
                      <ul className="text-sm text-gray-600 ml-4 space-y-1">
                        <li>• 文書作成の自動化</li>
                        <li>• データ分析での活用</li>
                        <li>• 画像生成AIとの連携</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600 mb-1">Day 3: 応用編</div>
                      <ul className="text-sm text-gray-600 ml-4 space-y-1">
                        <li>• カスタムGPTの作成</li>
                        <li>• API連携の基礎</li>
                        <li>• 業務適用計画の策定</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">¥29,800</div>
                      <div className="text-sm text-gray-600">早期申込割引: ¥25,800</div>
                    </div>
                    <Link href="/adult-school/courses/3days-intensive">
                      <Button>
                        詳細・申込
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* プロンプトエンジニアリング上級 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">プロンプトエンジニアリング上級コース</CardTitle>
                <CardDescription className="text-lg">
                  高度なプロンプト技術で複雑な業務タスクを自動化
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">5日間</div>
                    <div className="text-sm text-gray-600">各3時間</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">少人数制</div>
                    <div className="text-sm text-gray-600">最大15名</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold">認定証</div>
                    <div className="text-sm text-gray-600">プロ資格</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">このコースで学べること</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Chain of Thought, Tree of Thought技法
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Few-shot, Zero-shot学習の活用
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      複雑なワークフローの自動化
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      AI API活用とシステム連携
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      企業向けAI導入戦略
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">¥89,800</div>
                      <div className="text-sm text-gray-600">分割払い可能</div>
                    </div>
                    <Link href="/adult-school/courses/prompt-engineering">
                      <Button variant="outline">
                        詳細・申込
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 学習の流れ */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">学習の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">無料体験会</h3>
              <p className="text-sm text-gray-600">
                AIの基礎を体験し、コースの雰囲気を確認
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">コース受講</h3>
              <p className="text-sm text-gray-600">
                実践的なカリキュラムで集中学習
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">実務適用</h3>
              <p className="text-sm text-gray-600">
                学んだスキルを実際の業務で活用
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">継続サポート</h3>
              <p className="text-sm text-gray-600">
                コミュニティでの継続的な学習
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 受講生の成果 */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">受講生の成果</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                <div className="font-semibold mb-2">作業効率向上</div>
                <div className="text-sm text-gray-600">
                  平均3倍の効率化を実現
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <div className="font-semibold mb-2">残業時間削減</div>
                <div className="text-sm text-gray-600">
                  月平均20時間の削減
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="font-semibold mb-2">満足度</div>
                <div className="text-sm text-gray-600">
                  受講生の高い満足度
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐAI活用を始めませんか？</h2>
          <p className="text-xl mb-8 opacity-90">
            無料体験会で、あなたの業務がどれだけ効率化できるかを体感してください。
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
                個別相談
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}