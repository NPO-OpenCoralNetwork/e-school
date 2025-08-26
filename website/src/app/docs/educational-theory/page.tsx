import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function EducationalTheoryPage() {
  const filePath = path.join(process.cwd(), 'docs', 'educational-theory.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# 教育理論統合アプローチ\n\n現在準備中です。';
  }
  
  return (
    <DocLayout
      title="教育理論統合アプローチ"
      description="3つの教育理論の統合による革新的学習システム"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">教育理論統合アプローチ</h1>
          <p className="text-xl mb-6">3つの教育理論の統合による革新的学習システム</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-red-500 hover:bg-red-600">行動主義</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">認知主義</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">構成主義</Badge>
          </div>
        </div>

        {/* 概要セクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🧠 理論統合の革新性</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">3つの学習理論の統合実現</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <h4 className="font-semibold text-red-300">行動主義</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  習慣形成・行動変容による学習の基盤づくり
                </p>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>• 効果的反復学習</li>
                  <li>• ゲーミフィケーション</li>
                  <li>• 習慣化メカニズム</li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <h4 className="font-semibold text-blue-300">認知主義</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  情報処理・記憶システムの科学的活用
                </p>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>• 記憶宮殿法</li>
                  <li>• AIイメージ記憶法</li>
                  <li>• メタ認知能力向上</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <h4 className="font-semibold text-green-300">構成主義</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  意味構築・協働学習による深い理解
                </p>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>• 探究型学習</li>
                  <li>• 問題解決学習</li>
                  <li>• コミュニティ学習</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* 理論統合の背景 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📚 理論統合の歴史的背景</h2>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">日本教育の現状と課題</h3>
              <div className="text-gray-300 space-y-4">
                <p>これまで日本では<strong className="text-orange-400">行動主義的な立場で安直な暗記法を中心として教育に取り入れられてきました</strong>。行動主義的な立場は世界的にも有力な学派として力がありました。なぜなら、<strong className="text-blue-400">客観と実験によって観測可能である</strong>のはこの行動主義だけだったからです。</p>
                
                <p>内部的な意思決定プロセスなどは観測不能であったため、根拠として乏しいとされてきました（認知主義・構成主義）。</p>
                
                <p>しかし<strong className="text-green-400">fMRIなどの外部観測装置が出てきたことによって、脳のパターンからある程度内部的な要因が学習に影響していることが観測可能になり</strong>、今では認知主義と構成主義も重要視されており、<strong className="text-purple-400">3つの理論それぞれの有効性が認められる手法があり、それらをうまく統合する動き</strong>が強まっています。</p>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">AI Creator Labの革新的解決</h3>
              <div className="text-gray-300 space-y-4">
                <p>しかし、<strong className="text-red-400">まだ現場レベルでそれが実装されていません</strong>。教育現場では教育者の育成などにも時間がかかります。</p>
                
                <p>そこで<strong className="text-cyan-400">AIにこれらの要件を学習させ、仕組み化したプラットフォームを提供する</strong>ことで、理論統合を実現します。</p>
                
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-700 rounded-lg p-4 mt-4">
                  <p className="text-cyan-200">これは<strong>エクレクティック・アプローチ</strong>または<strong>ハイブリッド・アプローチ</strong>と呼ばれる革新的教育手法の実現です。</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 3つの教育理論詳細 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 各教育理論の詳細実装</h2>
          
          <div className="space-y-6">
            {/* 行動主義詳細 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                <h3 className="text-xl font-semibold text-white">行動主義的アプローチ（効率的学習習慣の形成）</h3>
              </div>
              <div className="text-gray-300 mb-4">
                <p className="mb-3"><strong className="text-red-300">理論的根拠</strong>: スキナーのオペラント条件づけ理論と記憶科学</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">従来の問題</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 単純な暗記重視</li>
                      <li>• その場での連続記入</li>
                      <li>• 短期記憶依存</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">AI Creator Labの実装</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <a href="/docs/educational-theories/behaviorism" className="text-red-400 hover:underline">効果的反復学習</a></li>
                      <li>• ゲーミフィケーション機能</li>
                      <li>• スマートリマインダー</li>
                      <li>• 習慣化メカニズム</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* 認知主義詳細 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                <h3 className="text-xl font-semibold text-white">認知主義的アプローチ（理解と思考力）</h3>
              </div>
              <div className="text-gray-300 mb-4">
                <p className="mb-3"><strong className="text-blue-300">理論的根拠</strong>: ブルーナーの発見学習、情報処理理論</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">革新的手法</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <a href="/docs/educational-theories/cognitivism" className="text-blue-400 hover:underline">記憶宮殿法</a></li>
                      <li>• AIイメージ記憶法</li>
                      <li>• 空間的チャンキング</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">システム機能</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 知識構造の可視化</li>
                      <li>• 既習知識とのリンク形成</li>
                      <li>• <a href="/docs/ai-metacognitive-reflection" className="text-cyan-400 hover:underline">AI型メタ認知リフレクション</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* 構成主義詳細 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 rounded-full bg-green-400"></div>
                <h3 className="text-xl font-semibold text-white">構成主義的アプローチ（探究と創造）</h3>
              </div>
              <div className="text-gray-300 mb-4">
                <p className="mb-3"><strong className="text-green-300">理論的根拠</strong>: ピアジェの発達段階論、ヴィゴツキーのZPD理論</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">学習アプローチ</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <a href="/docs/educational-theories/constructivism" className="text-green-400 hover:underline">探究型学習</a></li>
                      <li>• 問題解決学習</li>
                      <li>• 創作活動支援</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">コミュニティ機能</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 協働学習環境</li>
                      <li>• ピア・フィードバック</li>
                      <li>• 作品共有システム</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 比較表 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📊 理論統合の効果</h2>
          
          <Card className="p-6 bg-gray-800 border-gray-600">
            <h3 className="text-xl font-semibold mb-4 text-white">従来の単一理論 vs 統合アプローチ</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-gray-300">項目</th>
                    <th className="text-left py-3 px-4 text-red-300">行動主義のみ</th>
                    <th className="text-left py-3 px-4 text-blue-300">認知主義のみ</th>
                    <th className="text-left py-3 px-4 text-green-300">構成主義のみ</th>
                    <th className="text-left py-3 px-4 text-purple-300">AI Creator Lab統合</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">学習継続率</td>
                    <td className="py-3 px-4">60%（一般的）</td>
                    <td className="py-3 px-4">70%（理解重視）</td>
                    <td className="py-3 px-4">65%（自主性依存）</td>
                    <td className="py-3 px-4 text-purple-300">✓ 85%（統合効果）</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">記憶定着率</td>
                    <td className="py-3 px-4">高（反復効果）</td>
                    <td className="py-3 px-4">中（理解依存）</td>
                    <td className="py-3 px-4">低（体系性不足）</td>
                    <td className="py-3 px-4 text-purple-300">✓ 最高（全要素統合）</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">創造性・応用力</td>
                    <td className="py-3 px-4">低（パターン依存）</td>
                    <td className="py-3 px-4">中（理論理解）</td>
                    <td className="py-3 px-4">高（探究重視）</td>
                    <td className="py-3 px-4 text-purple-300">✓ 最高（段階的発展）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">学習者満足度</td>
                    <td className="py-3 px-4">中（単調感）</td>
                    <td className="py-3 px-4">中（難易度感）</td>
                    <td className="py-3 px-4">高（自由度）</td>
                    <td className="py-3 px-4 text-purple-300">✓ 最高（個別最適化）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />

        {/* 関連リンク */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🔗 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">行動主義詳細</h3>
              <p className="text-sm text-gray-300 mb-4">効果的反復学習とゲーミフィケーション戦略</p>
              <a href="/docs/educational-theories/behaviorism" className="text-red-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">認知主義詳細</h3>
              <p className="text-sm text-gray-300 mb-4">記憶宮殿法とAIイメージ記憶システム</p>
              <a href="/docs/educational-theories/cognitivism" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">構成主義詳細</h3>
              <p className="text-sm text-gray-300 mb-4">探究型学習と協働学習環境の設計</p>
              <a href="/docs/educational-theories/constructivism" className="text-green-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}