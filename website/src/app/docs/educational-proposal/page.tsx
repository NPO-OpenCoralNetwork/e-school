import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import Link from 'next/link';
import { FileText, Users, Lightbulb, Target, TrendingUp, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';

export default function EducationalProposalPage() {
  const filePath = path.join(process.cwd(), '..', 'docs', 'EDUCATIONAL_PROPOSAL.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# 教育事業企画書\n\n現在準備中です。';
  }
  
  return (
    <DocLayout title="教育事業企画書">
      <div className="space-y-8">
        {/* ヒーローセクション */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/50 via-blue-900/30 to-indigo-900/20 rounded-2xl border border-emerald-500/20 p-8 md:p-12">
          {/* 背景装飾 */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">教育事業企画書</h1>
                <p className="text-lg md:text-xl text-emerald-200">文科省方針を先行実装する革新的教育プログラム</p>
              </div>
            </div>
            
            {/* 特徴カード */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h3 className="font-semibold text-emerald-200">革新的アプローチ</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">従来の教育手法を刷新し、AI時代に対応した学習体験</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Users className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="font-semibold text-blue-200">包括的対象</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">大人・子ども・法人まで、すべての世代をサポート</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Target className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h3 className="font-semibold text-indigo-200">実践重視</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">理論と実践を融合した即戦力育成プログラム</p>
              </div>
            </div>
          </div>
        </div>

        {/* マークダウンコンテンツ */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          <MarkdownRenderer content={content} />
        </div>

        {/* 事業概要セクション */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">事業概要</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 大人向けAIスクール */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-300">3日間</div>
                    <div className="text-xs text-blue-400">集中講座</div>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">大人向けAIスクール</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">ChatGPT/Claude活用術から実践的なプロンプトエンジニアリングまで</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• 業務効率化の実現</li>
                  <li>• 実践的なスキル習得</li>
                  <li>• 継続サポート体制</li>
                </ul>
              </div>
            </div>

            {/* 子ども向けスクール */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-900/40 to-green-800/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-300">小1〜</div>
                    <div className="text-xs text-green-400">高校生</div>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-green-200 transition-colors">子ども向けスクール</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">遊びながら学ぶデジタル創造教育プログラム</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• AI・プログラミング・3DCG</li>
                  <li>• 年齢別カリキュラム</li>
                  <li>• 安心・安全な環境</li>
                </ul>
              </div>
            </div>

            {/* 法人向けサービス */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Target className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-300">DX</div>
                    <div className="text-xs text-purple-400">推進支援</div>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">法人向けサービス</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">企業のAI導入とデジタルトランスフォーメーション</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• カスタム研修プログラム</li>
                  <li>• AI導入コンサルティング</li>
                  <li>• 継続的な技術サポート</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 関連リンクセクション */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">関連ドキュメント</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/docs/project-background"
              className="group relative overflow-hidden bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <BookOpen className="w-6 h-6 text-indigo-300" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">プロジェクト背景書</h4>
                <p className="text-sm text-gray-400 leading-relaxed">日本教育の歴史的変遷と本プロジェクトの位置づけ</p>
              </div>
            </Link>
            
            <Link
              href="/docs/services"
              className="group relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-300" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">サービス詳細</h4>
                <p className="text-sm text-gray-400 leading-relaxed">3つの事業領域における包括的教育ソリューション</p>
              </div>
            </Link>
            
            <Link
              href="/docs/strategy"
              className="group relative overflow-hidden bg-gradient-to-br from-amber-900/40 to-amber-800/20 border border-amber-500/30 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-amber-300" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">実装戦略</h4>
                <p className="text-sm text-gray-400 leading-relaxed">段階的実装計画と成功指標の設定</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 期待効果セクション */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          {/* 背景装飾 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">期待される効果</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <h4 className="font-semibold text-emerald-300 text-lg">教育効果</h4>
                </div>
                <div className="space-y-3">
                  {[
                    "AI時代に必要なスキル習得",
                    "創造性と論理的思考力の育成",
                    "デジタルデバイドの解消",
                    "生涯学習習慣の形成"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h4 className="font-semibold text-blue-300 text-lg">社会的効果</h4>
                </div>
                <div className="space-y-3">
                  {[
                    "教育格差の解消",
                    "不登校児童への新たな学習機会",
                    "地域コミュニティの活性化",
                    "日本の国際競争力向上"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}