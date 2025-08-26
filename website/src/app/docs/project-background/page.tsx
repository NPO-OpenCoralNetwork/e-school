import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import EducationPolicyTimeline from '@/components/timeline/EducationPolicyTimeline';

export default function ProjectBackgroundPage() {
  const filePath = path.join(process.cwd(), 'docs', 'PROJECT_BACKGROUND.md');
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

        {/* 本プロジェクトの位置づけ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🎯 本プロジェクトの位置づけ</h2>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">なぜ今、AI Creator Labが必要なのか</h3>
          </div>

          {/* 3つの主要な理由 */}
          <div className="grid gap-8 mb-12">
            {/* 1. 文科省方針の先行実装 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="text-xl font-bold text-blue-400">文科省方針の先行実装</h4>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  国が推進する<strong className="text-blue-400">「個別最適な学び」</strong>と<strong className="text-green-400">「協働的な学び」</strong>の二つの方針は、
                  多くの教育現場で実装が遅れています。
                </p>
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <p>本プロジェクトは、<strong className="text-blue-300">NPOとしてサードプレイスの強みを活かし、小さく始めることができる環境</strong>で、これらの理念を実現します。</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-900 rounded-lg">
                    <div className="text-blue-400 font-bold mb-1">プラットフォーム化</div>
                    <div className="text-sm">システム化で標準化</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900 rounded-lg">
                    <div className="text-green-400 font-bold mb-1">ハイブリッド型</div>
                    <div className="text-sm">オンライン＆対面</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900 rounded-lg">
                    <div className="text-purple-400 font-bold mb-1">新学習体験</div>
                    <div className="text-sm">従来校では困難</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 2. 誰でも使える教育プラットフォームの実現 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="text-xl font-bold text-green-400">誰でも使える教育プラットフォームの実現</h4>
              </div>
              
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-4 text-green-300">包括的なアクセシビリティ設計</h5>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👩‍🏫</div>
                    <div className="text-green-400 font-bold mb-1">教育者向け</div>
                    <div className="text-xs text-gray-400">技術知識不要で直感的操作</div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👨‍🎓</div>
                    <div className="text-blue-400 font-bold mb-1">学習者向け</div>
                    <div className="text-xs text-gray-400">年齢・レベル問わずアクセス</div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="text-purple-400 font-bold mb-1">保護者向け</div>
                    <div className="text-xs text-gray-400">進捗確認・学習サポート</div>
                  </div>
                  <div className="bg-orange-900/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🏛️</div>
                    <div className="text-orange-400 font-bold mb-1">地域社会向け</div>
                    <div className="text-xs text-gray-400">公民館等と連携可能</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4 text-cyan-400">プラットフォーム技術仕様</h5>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h6 className="font-semibold mb-2 text-white">ユーザビリティ最優先</h6>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>• 直感的操作</li>
                      <li>• アクセシビリティ準拠</li>
                      <li>• 多言語対応</li>
                      <li>• あらゆるデバイス対応</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2 text-white">教育者支援</h6>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>• プログラミング不要</li>
                      <li>• 豊富なテンプレート</li>
                      <li>• 自動評価システム</li>
                      <li>• 学習分析ダッシュボード</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2 text-white">柔軟な運用</h6>
                    <ul className="text-sm space-y-1 text-gray-300">
                      <li>• クラウド完結</li>
                      <li>• オンライン・対面ハイブリッド</li>
                      <li>• 小規模～大規模対応</li>
                      <li>• 組織応じたカスタマイズ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* 3. ゆとり教育の教訓を活かした設計 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="text-xl font-bold text-purple-400">ゆとり教育の教訓を活かした設計</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* 失敗の原因 */}
                <div className="bg-red-900/20 rounded-lg p-6">
                  <h5 className="text-lg font-semibold mb-4 text-red-300">ゆとり教育が失敗した原因</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-xl">✗</span>
                      <span className="text-gray-300">理念だけで実装方法が不明確</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-xl">✗</span>
                      <span className="text-gray-300">教師へのサポート不足</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-xl">✗</span>
                      <span className="text-gray-300">評価基準の欠如</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-xl">✗</span>
                      <span className="text-gray-300">現場への丸投げ</span>
                    </div>
                  </div>
                </div>

                {/* 本プロジェクトの解決策 */}
                <div className="bg-green-900/20 rounded-lg p-6">
                  <h5 className="text-lg font-semibold mb-4 text-green-300">本プロジェクトの解決策</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">AI技術による具体的な実装方法</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">自動化による教師の負担軽減</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">データに基づく明確な評価基準</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-gray-300">統合実装プロセス</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 実装戦略：理念を現実にする10の原則 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📄 実装戦略：理念を現実にする10の原則</h2>
          
          <div className="grid gap-6">
            {/* 原則 1: 具体的な方法論の提供 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="text-xl font-bold text-blue-400">具体的な方法論の提供</h4>
              </div>
              <div className="mb-4 text-gray-300">
                <p className="mb-4">AIによる自動化と標準化で、探究学習を誰でも実践できるシステムを構築</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <h5 className="font-semibold mb-3 text-cyan-400">探究学習テンプレート例</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-2">
                        <li><span className="text-blue-400">問題設定:</span> 「なぜ〇〇は△△なのか？」</li>
                        <li><span className="text-green-400">仮説形成:</span> 「もし〇〇なら△△になるはず」</li>
                        <li><span className="text-purple-400">実験設計:</span> 「〇〇を調べるために△△をする」</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li><span className="text-orange-400">データ収集:</span> 「観察・記録・分析の方法」</li>
                        <li><span className="text-pink-400">結論導出:</span> 「結果から分かったこと」</li>
                        <li><span className="text-cyan-400">段階支援:</span> 初級80%→中級50%→上級20%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 原則 2: 明確な評価基準 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="text-xl font-bold text-green-400">明確な評価基準</h4>
              </div>
              <div className="mb-4 text-gray-300">
                <p className="mb-4">ルーブリック評価システムによる客観的・段階的評価</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/20 rounded-lg p-4">
                    <h5 className="font-semibold mb-3 text-blue-400">探究力評価</h5>
                    <div className="space-y-3">
                      <div className="bg-blue-800/20 rounded p-2">
                        <div className="font-medium text-blue-300">レベル1（初級）</div>
                        <div className="text-xs text-gray-400 mt-1">与えられた問いに答える・基本情報収集・簡単な観察記録</div>
                      </div>
                      <div className="bg-blue-700/20 rounded p-2">
                        <div className="font-medium text-blue-300">レベル2（中級）</div>
                        <div className="text-xs text-gray-400 mt-1">自分で問いを立てる・複数情報源比較・データ整理分析</div>
                      </div>
                      <div className="bg-blue-600/20 rounded p-2">
                        <div className="font-medium text-blue-300">レベル3（上級）</div>
                        <div className="text-xs text-gray-400 mt-1">独創的問い・情報批判的評価・新知見創出</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <h5 className="font-semibold mb-3 text-purple-400">協働力評価</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>他者の意見を聞く姿勢</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>自分の考えを伝える力</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>合意形成への貢献</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>リーダーシップ/フォロワーシップ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 原則 3: 教師の負担軽減 */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="text-xl font-bold text-purple-400">教師の負担軽減</h4>
              </div>
              <div className="mb-4 text-gray-300">
                <p className="mb-4">AI支援による自動化で教師の役割をより創造的・人間的な部分に集中</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left py-3 px-4 text-gray-300">従来の教師の仕事</th>
                        <th className="text-left py-3 px-4 text-blue-300">AI Creator Labでの自動化</th>
                        <th className="text-left py-3 px-4 text-green-300">教師の新しい役割</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">個別の学習計画作成</td>
                        <td className="py-3 px-4 text-blue-300">✓ AIが自動生成</td>
                        <td className="py-3 px-4 text-green-300">計画の確認・調整</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">ドリルの採点</td>
                        <td className="py-3 px-4 text-blue-300">✓ 自動採点・分析</td>
                        <td className="py-3 px-4 text-green-300">つまずきへの個別対応</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-3 px-4">学習進捗の記録</td>
                        <td className="py-3 px-4 text-blue-300">✓ 自動ログ・可視化</td>
                        <td className="py-3 px-4 text-green-300">保護者との対話</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">教材の準備</td>
                        <td className="py-3 px-4 text-blue-300">✓ AI推薦・自動生成</td>
                        <td className="py-3 px-4 text-green-300">創造的な活動の設計</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* 原則 4: 統合的初期実装プロセス */}
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h4 className="text-xl font-bold text-orange-400">統合実装プロセス</h4>
              </div>
              <div className="mb-4 text-gray-300">
                <p className="mb-6">全機能を有機的に統合したホリスティック（全人的）学習体験を提供</p>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-600 rounded-lg p-4 mb-4">
                      <div className="text-white font-bold text-lg mb-2">Phase 1</div>
                      <div className="text-blue-200 text-sm">Big Five AI診断</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-blue-900/20 rounded p-2">性格特性分析</div>
                      <div className="bg-blue-900/20 rounded p-2">学習スタイル特定</div>
                      <div className="bg-blue-900/20 rounded p-2">パーソナライズ基盤</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 rounded-lg p-4 mb-4">
                      <div className="text-white font-bold text-lg mb-2">Phase 2</div>
                      <div className="text-green-200 text-sm">AI対話目標設定</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-green-900/20 rounded p-2">SMART目標創出</div>
                      <div className="bg-green-900/20 rounded p-2">オープン質問対話</div>
                      <div className="bg-green-900/20 rounded p-2">自然な目標発見</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-600 rounded-lg p-4 mb-4">
                      <div className="text-white font-bold text-lg mb-2">Phase 3</div>
                      <div className="text-purple-200 text-sm">質的成長可視化</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-purple-900/20 rounded p-2">AIフィードバック</div>
                      <div className="bg-purple-900/20 rounded p-2">デジタルバッジ</div>
                      <div className="bg-purple-900/20 rounded p-2">ゲーミフィケーション</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-600 rounded-lg p-4 mb-4">
                      <div className="text-white font-bold text-lg mb-2">Phase 4</div>
                      <div className="text-pink-200 text-sm">AIリフレクション</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-pink-900/20 rounded p-2">対話型振り返り</div>
                      <div className="bg-pink-900/20 rounded p-2">メタ認知育成</div>
                      <div className="bg-pink-900/20 rounded p-2">継続的成長支援</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg">
                    <h5 className="text-lg font-semibold text-cyan-300 mb-3 text-center">ホリスティック学習の4領域</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400">🧠</span>
                          <div>
                            <span className="font-medium text-blue-300">認知面：</span>
                            <span className="text-gray-300">知識習得・思考スキル・問題解決</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-400">💚</span>
                          <div>
                            <span className="font-medium text-green-300">情意面：</span>
                            <span className="text-gray-300">感情理解・自己効力感・動機づけ</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400">🤝</span>
                          <div>
                            <span className="font-medium text-purple-300">社会面：</span>
                            <span className="text-gray-300">協働・コミュニケーション・共感力</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-pink-400">🎯</span>
                          <div>
                            <span className="font-medium text-pink-300">メタ認知面：</span>
                            <span className="text-gray-300">学習方略・自己調整・振り返り</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-cyan-900/20 to-pink-900/20 rounded-lg">
                    <p className="text-center text-cyan-300 font-medium">
                      ✨ 4つの学習領域が同時に相互作用しながら発達する学習環境をAIで自動化・個別最適化
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 原則 5-10 のコンパクト表示 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">5</div>
                  <h4 className="text-lg font-bold text-pink-400">保護者の理解と参画</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">リアルタイムダッシュボード・保護者教育プログラム・参画機会提供</p>
              </Card>
              
              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">6</div>
                  <h4 className="text-lg font-bold text-cyan-400">データ駆動型改善</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">PDCAサイクルの自動化・AIによる分析・継続的プログラム調整</p>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">7</div>
                  <h4 className="text-lg font-bold text-indigo-400">現場教師との協働</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">AI＝効率化、人間＝感情サポート・創造活動・倫理判断の役割分担</p>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">8</div>
                  <h4 className="text-lg font-bold text-red-400">柔軟な学習環境</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">フルオンライン・ハイブリッド・対面重視・カスタム対応の選択肢</p>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">9</div>
                  <h4 className="text-lg font-bold text-teal-400">エビデンスベース検証</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">学術的検証プロセス・第三者評価・国際比較・政策提言</p>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">10</div>
                  <h4 className="text-lg font-bold text-emerald-400">持続可能な財務</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">B2C・B2B・公的資金の多層的収益構造で長期運営を保証</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 期待される社会的インパクト */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">💡 期待される社会的インパクト</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎯</div>
                <h4 className="text-xl font-bold text-blue-400">教育格差の解消</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="bg-red-900/20 rounded-lg p-3">
                  <p className="text-red-300 font-medium mb-1">現状</p>
                  <p className="text-sm">経済格差による教育機会の不平等</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-300 font-medium mb-1">解決</p>
                  <p className="text-sm">スライディングスケール料金制度とAI個別最適化により、すべての子どもに質の高い教育を提供</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🏠</div>
                <h4 className="text-xl font-bold text-purple-400">不登校・学習困難児への支援</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="bg-red-900/20 rounded-lg p-3">
                  <p className="text-red-300 font-medium mb-1">現状</p>
                  <p className="text-sm">画一的な学校教育に適応できない子どもの増加</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-300 font-medium mb-1">解決</p>
                  <p className="text-sm">個別最適化とサードプレイス型の居場所提供</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-900/30 to-teal-900/30 border-green-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">👩‍🏫</div>
                <h4 className="text-xl font-bold text-green-400">教員の働き方改革</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="bg-red-900/20 rounded-lg p-3">
                  <p className="text-red-300 font-medium mb-1">現状</p>
                  <p className="text-sm">教員の多忙化と疲弊</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-300 font-medium mb-1">解決</p>
                  <p className="text-sm">AI自動化による負担軽減と本質的な教育活動への集中</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🇯🇵</div>
                <h4 className="text-xl font-bold text-orange-400">日本教育のモデルケース</h4>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="bg-red-900/20 rounded-lg p-3">
                  <p className="text-red-300 font-medium mb-1">現状</p>
                  <p className="text-sm">文科省方針の実装遅れ</p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-3">
                  <p className="text-green-300 font-medium mb-1">解決</p>
                  <p className="text-sm">成功事例の創出と全国展開の基盤構築</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 成功指標（KPI） */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📊 成功指標（KPI）</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 教育効果指標 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-bold mb-6 text-green-400">教育効果指標</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-blue-900/20 rounded-lg">
                  <div>
                    <div className="font-medium text-white">学習継続率</div>
                    <div className="text-xs text-gray-400">現状: 一般塾60% → 目標: 85%</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">85%</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg">
                  <div>
                    <div className="font-medium text-white">学力向上率</div>
                    <div className="text-xs text-gray-400">標準テストでの平均向上</div>
                  </div>
                  <div className="text-2xl font-bold text-green-400">30%</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-900/20 rounded-lg">
                  <div>
                    <div className="font-medium text-white">メタ認知能力向上</div>
                    <div className="text-xs text-gray-400">ルーブリック評価による測定</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">有意差</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-900/20 rounded-lg">
                  <div>
                    <div className="font-medium text-white">協働スキル</div>
                    <div className="text-xs text-gray-400">アンケート調査での実感</div>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">80%</div>
                </div>
              </div>
            </Card>

            {/* 社会的インパクト指標 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-bold mb-6 text-cyan-400">社会的インパクト指標（3年後目標）</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-cyan-900/20 rounded-lg">
                  <div className="font-medium text-white">受講者数</div>
                  <div className="text-2xl font-bold text-cyan-400">3,000名</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-900/20 rounded-lg">
                  <div className="font-medium text-white">不登校児童支援率</div>
                  <div className="text-2xl font-bold text-blue-400">30%</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg">
                  <div className="font-medium text-white">教員負担軽減</div>
                  <div className="text-2xl font-bold text-green-400">40%</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-900/20 rounded-lg">
                  <div className="font-medium text-white">他地域展開</div>
                  <div className="text-2xl font-bold text-purple-400">10拠点</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-900/20 rounded-lg">
                  <div className="font-medium text-white">プラットフォーム満足度</div>
                  <div className="text-2xl font-bold text-pink-400">4.5/5</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ビジョン */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🌟 ビジョン</h2>
          
          <Card className="p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-purple-600 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">ミッション</h3>
              <p className="text-lg text-gray-300 italic">
                「誰でも使える教育プラットフォームを通じて、AIと人間の教師が協働し、<br />
                一人ひとりの可能性を最大限に引き出す包括的な教育エコシステムを創造する」
              </p>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3年後の姿 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-bold mb-6 text-blue-400">3年後の姿</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">包括的教育プラットフォーム</p>
                    <p className="text-sm text-gray-400">あらゆる教育者が直感的に使えるシステム</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">全国展開</p>
                    <p className="text-sm text-gray-400">10拠点で3,000名の学習者、50校の教育機関が利用</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">教育格差解消</p>
                    <p className="text-sm text-gray-400">経済状況や地域に関係なく質の高い教育を提供</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">教育者支援</p>
                    <p className="text-sm text-gray-400">1,000名以上の教育者がプラットフォームを活用</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">政策提言</p>
                    <p className="text-sm text-gray-400">文科省方針の実装モデルとして認知</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* 10年後の展望 */}
            <Card className="p-8 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-bold mb-6 text-cyan-400">10年後の展望</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">グローバルプラットフォーム</p>
                    <p className="text-sm text-gray-400">アジア圏への国際展開、多言語対応</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">大規模運用</p>
                    <p className="text-sm text-gray-400">100万人の学習者と1万校の教育機関をサポート</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">世界標準</p>
                    <p className="text-sm text-gray-400">日本発の包括的教育プラットフォームとして認知</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">教育DX</p>
                    <p className="text-sm text-gray-400">あらゆる教育者がAI技術を活用できる環境を実現</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white">社会基盤</p>
                    <p className="text-sm text-gray-400">Society 5.0時代の人材育成インフラとして機能</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 結論 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">📝 結論</h2>
          
          <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                <strong className="text-white">AI Creator Lab</strong>は、日本の教育が70年かけて試行錯誤してきた
                <strong className="text-red-400">「行動主義」</strong>
                <strong className="text-blue-400">「認知主義」</strong>
                <strong className="text-green-400">「構成主義」</strong>の統合を、
                誰でも使える包括的な教育プラットフォームとして実現します。
              </p>
              
              <div className="bg-blue-900/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-blue-400 mb-4">包括的アクセシビリティ</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>教育者は技術知識不要で直感的に利用可能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>学習者は年齢・能力・特性に関係なくアクセス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>あらゆる教育機関で導入・カスタマイズが可能</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-400 mb-4">実装重視の設計</h4>
                <p>
                  文科省が掲げる<strong className="text-blue-400">「個別最適な学び」</strong>と<strong className="text-purple-400">「協働的な学び」</strong>を、
                  理念ではなく具体的に使えるシステムとして提供し、ゆとり教育の失敗から学んだ
                  <strong className="text-orange-400">「実装方法の明確化」</strong>を重視しています。
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg">
                <p className="text-lg font-semibold text-purple-300">
                  これは単なる学習塾ではなく、すべての教育者が活用できるプラットフォームを通じて、<br />
                  <strong className="text-pink-400">日本の教育改革を民間から推進する社会変革プロジェクト</strong>です。
                </p>
              </div>
            </div>
          </Card>
        </section>

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