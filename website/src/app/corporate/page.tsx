import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Award, CheckCircle, ArrowRight, Target, Lightbulb, BarChart3 } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="text-white">企業の</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">AI変革</span>
              <span className="text-white">をサポート</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              カスタム研修から導入コンサルティングまで。<br />
              企業のDX推進を包括的にサポートし、競争力の向上を実現します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/corporate/consultation">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl hover:transform hover:scale-105 transition duration-300 flex items-center space-x-2">
                    <span className="text-lg">無料コンサルティング</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </Link>
              
              <Link href="/corporate/case-studies">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <button className="relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl hover:transform hover:scale-105 transition duration-300 flex items-center space-x-2">
                    <span className="text-lg">導入事例を見る</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              企業の<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">成長</span>を加速
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI技術の戦略的活用で、競争優位性の確立と持続的な成長を実現
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* 企業研修 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition duration-500">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl w-fit">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">企業向けカスタム研修</h3>
                  <p className="text-gray-300">
                    組織のニーズに合わせた完全オーダーメイド研修
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    <span>役職・部署別プログラム設計</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    <span>実業務に即したケーススタディ</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    <span>継続的なスキルアップサポート</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    <span>効果測定・ROI分析</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-blue-500/20 rounded-xl mb-6">
                  <div className="text-2xl font-bold text-white">10名〜</div>
                  <div className="text-cyan-400 text-sm">少人数から大規模まで対応</div>
                </div>
              </div>
            </div>

            {/* AI導入コンサルティング */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition duration-500">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-2xl w-fit">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI導入コンサルティング</h3>
                  <p className="text-gray-300">
                    戦略策定から実装まで一貫したサポート
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>AI戦略策定・ロードマップ作成</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>業務プロセス分析・最適化</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>ツール選定・導入支援</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                    <span>定着化・文化醸成サポート</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-emerald-500/20 rounded-xl mb-6">
                  <div className="text-2xl font-bold text-white">3ヶ月〜</div>
                  <div className="text-emerald-400 text-sm">段階的導入プログラム</div>
                </div>
              </div>
            </div>

            {/* 社内講師育成 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition duration-500">
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-400 to-pink-300 rounded-2xl w-fit">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">社内講師育成プログラム</h3>
                  <p className="text-gray-300">
                    自社でAI教育を展開できる人材を育成
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                    <span>講師スキル習得プログラム</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                    <span>教材作成・カリキュラム設計</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                    <span>指導法・評価手法の指導</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                    <span>認定制度・継続サポート</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-purple-500/20 rounded-xl mb-6">
                  <div className="text-2xl font-bold text-white">2〜5名</div>
                  <div className="text-purple-400 text-sm">コア講師陣の育成</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入効果・実績 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入企業の成果</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              50社以上の企業でAI導入を支援し、具体的な成果を実現
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  40<span className="text-2xl">%</span>
                </div>
                <div className="text-blue-800 font-semibold text-lg">業務効率向上</div>
                <div className="text-blue-600 text-sm mt-2">平均的な改善効果</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  6<span className="text-2xl">ヶ月</span>
                </div>
                <div className="text-emerald-800 font-semibold text-lg">ROI回収期間</div>
                <div className="text-emerald-600 text-sm mt-2">投資対効果の実現</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  90<span className="text-2xl">%</span>
                </div>
                <div className="text-purple-800 font-semibold text-lg">社員満足度</div>
                <div className="text-purple-600 text-sm mt-2">研修評価スコア</div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <div className="relative">
                <div className="text-5xl font-extrabold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50<span className="text-2xl">+</span>
                </div>
                <div className="text-amber-800 font-semibold text-lg">導入企業数</div>
                <div className="text-amber-600 text-sm mt-2">実績のある支援</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 導入プロセス */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">導入プロセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">1. 課題分析</h3>
              <p className="text-sm text-gray-600">
                現状把握とAI活用ポイントの特定
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">2. 戦略策定</h3>
              <p className="text-sm text-gray-600">
                カスタムソリューションの設計
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">3. 実施・研修</h3>
              <p className="text-sm text-gray-600">
                段階的導入とスキル習得支援
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">4. 効果測定</h3>
              <p className="text-sm text-gray-600">
                継続的な改善と最適化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">企業の</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">AI変革</span>
              <span className="text-white">を始めませんか？</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              無料コンサルティングで、あなたの企業に最適なAI活用戦略をご提案します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/corporate/consultation">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-5 px-10 rounded-2xl hover:transform hover:scale-110 transition duration-300 flex items-center space-x-3 text-lg">
                    <span>無料コンサルティング申込</span>
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              </Link>
              
              <Link href="/contact">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <button className="relative bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold py-5 px-10 rounded-2xl hover:transform hover:scale-110 transition duration-300 flex items-center space-x-3 text-lg">
                    <span>資料請求・お問い合わせ</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}