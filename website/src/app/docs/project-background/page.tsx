import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import EducationPolicyTimeline from '@/components/timeline/EducationPolicyTimeline';

export default function ProjectBackgroundPage() {
  const filePath = path.join(process.cwd(), '..', 'docs', 'PROJECT_BACKGROUND.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# プロジェクト背景書\n\n現在準備中です。';
  }
  
  return (
    <DocLayout
      title="プロジェクト背景書"
      description="日本教育の歴史的変遷と本プロジェクトの位置づけ"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">プロジェクト背景書</h1>
          <p className="text-xl mb-6">日本教育の歴史的変遷と本プロジェクトの位置づけ</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-blue-500 hover:bg-blue-600">教育史75年分析</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">10の実装原則</Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">社会的インパクト重視</Badge>
          </div>
        </div>

        {/* 概要セクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 プロジェクトの位置づけ</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">教育改革への貢献</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-blue-400">教育格差解消</h4>
                <div className="text-2xl font-bold text-blue-400 mt-2">全世代</div>
                <p className="text-sm text-gray-300 mt-1">包括的アプローチ</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-green-400">実装戦略</h4>
                <div className="text-2xl font-bold text-green-400 mt-2">10原則</div>
                <p className="text-sm text-gray-300 mt-1">理念の現実化</p>
              </Card>
              <Card className="p-4 text-center bg-gray-700 border-gray-600">
                <h4 className="font-semibold text-purple-400">社会変革</h4>
                <div className="text-2xl font-bold text-purple-400 mt-2">モデル</div>
                <p className="text-sm text-gray-300 mt-1">日本教育の未来</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 教育史分析 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📖 日本の教育政策 70年の変遷</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">時代の要請に応え、進化し続ける教育理念</h3>
              <Badge className="bg-indigo-600">歴史的検証</Badge>
            </div>
            <p className="mb-4 text-gray-300">戦後復興から現在までの教育政策を体系的に分析し、現在の課題と解決策を導出</p>
          </div>

          {/* 縦型タイムラインコンポーネント */}
          <div className="mb-8">
            <EducationPolicyTimeline />
          </div>

          {/* 歴史から学ぶ重要な教訓 - 独立セクション */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">📚 歴史から学ぶ重要な教訓</h3>
                <p className="text-gray-300">70年間の教育改革の成功と失敗から導き出された重要な学び</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* 過去の問題 */}
                <div className="bg-red-900/30 rounded-lg p-6 border border-red-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-red-400"></div>
                    <h4 className="text-xl font-semibold text-red-300">過去の共通問題</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-800/20 rounded">
                      <span className="text-red-400 font-bold">•</span>
                      <div>
                        <p className="font-medium text-white">理念と現場実践の乖離</p>
                        <p className="text-xs text-gray-400 mt-1">政策理念が教育現場に浸透せず、実践に結びつかない</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-800/20 rounded">
                      <span className="text-red-400 font-bold">•</span>
                      <div>
                        <p className="font-medium text-white">教員研修・理解不足</p>
                        <p className="text-xs text-gray-400 mt-1">新しい教育方法に対する教員の準備・理解が不十分</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-800/20 rounded">
                      <span className="text-red-400 font-bold">•</span>
                      <div>
                        <p className="font-medium text-white">評価システムの未整備</p>
                        <p className="text-xs text-gray-400 mt-1">新しい学習効果を測定する仕組みが整備されていない</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-800/20 rounded">
                      <span className="text-red-400 font-bold">•</span>
                      <div>
                        <p className="font-medium text-white">段階的導入の失敗</p>
                        <p className="text-xs text-gray-400 mt-1">急激な変化による混乱と反発の発生</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Creator Labの解決策 */}
                <div className="bg-green-900/30 rounded-lg p-6 border border-green-600/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    <h4 className="text-xl font-semibold text-green-300">AI Creator Labの革新的アプローチ</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-800/20 rounded">
                      <span className="text-green-400 font-bold">✓</span>
                      <div>
                        <p className="font-medium text-white">科学的根拠に基づくハイブリッド学習設計</p>
                        <p className="text-xs text-gray-400 mt-1">3つの教育理論を統合した実証的アプローチ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-800/20 rounded">
                      <span className="text-green-400 font-bold">✓</span>
                      <div>
                        <p className="font-medium text-white">学力評価を超えた探究力・思考力の育成</p>
                        <p className="text-xs text-gray-400 mt-1">AIリフレクションによる深い学びの支援</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-800/20 rounded">
                      <span className="text-green-400 font-bold">✓</span>
                      <div>
                        <p className="font-medium text-white">AI補完による効率的メンター体制の実現</p>
                        <p className="text-xs text-gray-400 mt-1">人的制約を超えた24時間学習支援</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-800/20 rounded">
                      <span className="text-green-400 font-bold">✓</span>
                      <div>
                        <p className="font-medium text-white">人間的つながりを重視したコミュニティ形成</p>
                        <p className="text-xs text-gray-400 mt-1">世代を超えた学習コミュニティの構築</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* バッジ表示 */}
              <div className="flex justify-center gap-4 flex-wrap mt-8">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  歴史的正統性
                </Badge>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                  失敗からの学び
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                  政策との整合性
                </Badge>
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 px-4 py-2">
                  未来への革新
                </Badge>
              </div>
            </Card>
          </div>

          {/* 政策変遷の概要図 */}
          <Card className="p-6 bg-gray-800 border-gray-600 mb-6">
            <h4 className="font-semibold mb-4 text-white">教育政策の変遷概要</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-gray-300 text-sm font-mono">
                <div className="mb-4 text-center text-lg font-bold text-cyan-400">教育政策の変遷フロー</div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-red-400">1947-1970:</span>
                    <span className="ml-2">戦後復興期</span>
                    <span className="ml-auto text-gray-500">→ 基礎教育の確立</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-400">1971-1990:</span>
                    <span className="ml-2">高度成長期</span>
                    <span className="ml-auto text-gray-500">→ 教育の量的拡大</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">1991-2010:</span>
                    <span className="ml-2">質的転換期</span>
                    <span className="ml-auto text-gray-500">→ 個性重視への転換</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400">2011-現在:</span>
                    <span className="ml-2">グローバル化・ICT時代</span>
                    <span className="ml-auto text-gray-500">→ AI活用・個別最適化</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 現在の課題 */}
          <Card className="p-6 bg-gray-700 border-gray-600">
            <h4 className="font-semibold mb-4 text-orange-400">現在直面している課題</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">教育格差の拡大</p>
                  <p className="text-xs text-gray-400 mt-1">経済格差が学習機会の差に直結</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">不登校児童の増加</p>
                  <p className="text-xs text-gray-400 mt-1">30万人を超える不登校問題</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">教員の働き方改革</p>
                  <p className="text-xs text-gray-400 mt-1">過重労働と人材不足の深刻化</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">デジタル化の遅れ</p>
                  <p className="text-xs text-gray-400 mt-1">OECD最下位レベルのICT活用</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">個別最適化の必要性</p>
                  <p className="text-xs text-gray-400 mt-1">一斉教育の限界が顕在化</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2"></div>
                <div>
                  <p className="font-medium text-white">グローバル競争力</p>
                  <p className="text-xs text-gray-400 mt-1">国際的な学力低下傾向</p>
                </div>
              </div>
            </div>
          </Card>
        </section>


        {/* 文科省方針との整合性 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🏛️ 文科省方針との整合性</h2>
          
          {/* 令和の日本型学校教育の構造図 */}
          <Card className="p-6 bg-gray-800 border-gray-600 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">「令和の日本型学校教育」実装モデル</h3>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold">
                  AI Creator Lab プロジェクト
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* 個別最適な学び */}
                <div className="text-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 font-semibold">
                    個別最適な学び
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>学習状況把握</span>
                      <span className="text-blue-400">AI分析</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>ICT活用</span>
                      <span className="text-blue-400">最新AI技術</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>多様な学習</span>
                      <span className="text-blue-400">パーソナライズ</span>
                    </div>
                  </div>
                </div>

                {/* 協働的な学び */}
                <div className="text-center">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 font-semibold">
                    協働的な学び
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>多様な他者協働</span>
                      <span className="text-green-400">全世代連携</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>地域連携</span>
                      <span className="text-green-400">公民館活用</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
                      <span>開かれた教育</span>
                      <span className="text-green-400">企業連携</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 統合効果 */}
              <div className="mt-6 text-center">
                <div className="bg-purple-600 text-white px-6 py-2 rounded-lg inline-block font-semibold">
                  相乗効果による学習効果最大化
                </div>
              </div>
            </div>
          </Card>

          {/* 詳細比較表 */}
          <Card className="p-6 bg-gray-800 border-gray-600 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">文科省方針と本プロジェクトの対応表</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-gray-300">政策目標</th>
                    <th className="text-left py-3 px-4 text-blue-300">文科省の方針</th>
                    <th className="text-left py-3 px-4 text-green-300">本プロジェクトの実装</th>
                    <th className="text-left py-3 px-4 text-purple-300">革新性</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">学習者視点の教育</td>
                    <td className="py-3 px-4">個別最適な学びの実現</td>
                    <td className="py-3 px-4">AI型パーソナライゼーション</td>
                    <td className="py-3 px-4 text-purple-300">✓ Big Five性格分析活用</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">ICT活用推進</td>
                    <td className="py-3 px-4">GIGAスクール構想</td>
                    <td className="py-3 px-4">AI学習支援システム</td>
                    <td className="py-3 px-4 text-purple-300">✓ 生成AI活用教育</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">地域連携強化</td>
                    <td className="py-3 px-4">社会に開かれた教育課程</td>
                    <td className="py-3 px-4">公民館×オンライン融合</td>
                    <td className="py-3 px-4 text-purple-300">✓ 全世代学習モデル</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-medium">教員負荷軽減</td>
                    <td className="py-3 px-4">働き方改革推進</td>
                    <td className="py-3 px-4">AI支援による効率化</td>
                    <td className="py-3 px-4 text-purple-300">✓ 自動採点・分析機能</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">多様性への対応</td>
                    <td className="py-3 px-4">インクルーシブ教育</td>
                    <td className="py-3 px-4">スライディングスケール</td>
                    <td className="py-3 px-4 text-purple-300">✓ 経済格差解消策</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* 先行実装の意義 */}
          <Card className="p-6 bg-gray-800 border-gray-600">
            <h3 className="text-xl font-semibold mb-4 text-white">文科省方針の先行実装</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">政策実装の課題</h4>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <span>現場での実装に時間がかかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <span>教員研修・システム整備が必要</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <span>予算・リソース制約</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-400">本プロジェクトの優位性</h4>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <span>即座に理念を形にして提供</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <span>AIによる自動化で人的負担軽減</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <span>NPO特典でコスト効率化</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
            
          {/* 参考資料・出典 */}
          <Card className="p-4 bg-gray-900 border-gray-700 mt-6">
            <h4 className="font-semibold mb-3 text-gray-400 text-sm">📚 参考資料・出典</h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-500">文科省「令和の日本型学校教育」の構築を目指して：</span>
                <a 
                  href="https://www.mext.go.jp/b_menu/shingi/chukyo/chukyo3/079/sonota/1412985.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline ml-1"
                >
                  中央教育審議会答申（令和3年1月）
                </a>
              </div>
              <div>
                <span className="text-gray-500">個別最適な学びと協働的な学びの一体的な充実：</span>
                <a 
                  href="https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/mext_00117.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline ml-1"
                >
                  GIGAスクール構想の実現
                </a>
              </div>
              <div>
                <span className="text-gray-500">Society 5.0に向けた人材育成：</span>
                <a 
                  href="https://www.mext.go.jp/component/a_menu/other/detail/__icsFiles/afieldfile/2018/06/06/1405844_002.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline ml-1"
                >
                  文部科学省政策文書
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* プロジェクトインパクト分析 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📈 社会的インパクト分析</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 教育格差解消効果 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">教育格差解消への効果</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-cyan-400">従来の問題</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 地域格差（都市部 vs 地方）</li>
                    <li>• 経済格差（家計収入による学習機会の差）</li>
                    <li>• 情報格差（ICT環境の差）</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">本プロジェクトの解決</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 全国どこでも同質の教育機会</li>
                    <li>• スライディングスケールで経済格差対応</li>
                    <li>• AI支援による個別最適化学習</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* 効果予測データ */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">定量的効果予測</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">学習継続率向上</span>
                  <span className="text-2xl font-bold text-blue-400">85%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">教育格差縮小</span>
                  <span className="text-2xl font-bold text-green-400">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-900 rounded">
                  <span className="text-gray-300">学習コスト削減</span>
                  <span className="text-2xl font-bold text-purple-400">60%</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  ※ 類似プラットフォームとの比較に基づく予測値
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />

        {/* 関連リンク */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🔗 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">教育理論統合</h3>
              <p className="text-sm text-gray-300 mb-4">3つの教育理論の革新的統合アプローチ</p>
              <a href="/docs/educational-theory" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">AI型メタ認知リフレクション</h3>
              <p className="text-sm text-gray-300 mb-4">AIによる革新的学習支援手法</p>
              <a href="/docs/ai-metacognitive-reflection" className="text-cyan-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">認知主義詳細</h3>
              <p className="text-sm text-gray-300 mb-4">記憶宮殿法とパーソナライズ学習理論</p>
              <a href="/docs/educational-theories/cognitivism" className="text-green-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}