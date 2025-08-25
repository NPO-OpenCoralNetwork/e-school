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
          <h2 className="text-3xl font-bold mb-6 text-white">📖 教育史分析（戦後〜現在）</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">75年間の教育政策変遷</h3>
              <Badge className="bg-indigo-600">歴史的検証</Badge>
            </div>
            <p className="mb-4 text-gray-300">戦後復興から現在までの教育政策を体系的に分析し、現在の課題と解決策を導出</p>
          </div>

          {/* 縦型タイムラインコンポーネント */}
          <div className="mb-8">
            <EducationPolicyTimeline />
          </div>

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
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">個別最適な学び</h3>
                <Badge className="bg-blue-600">重点方針1</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-4">AIを活用したパーソナライズ学習の実現</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-white">文科省の方針</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 一人ひとりの学習状況把握</li>
                    <li>• ICT活用による効率化</li>
                    <li>• 多様な学習スタイル対応</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">本プロジェクトの実装</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• AI学習分析システム</li>
                    <li>• 適応的学習コンテンツ</li>
                    <li>• リアルタイム進捗管理</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">協働的な学び</h3>
                <Badge className="bg-green-600">重点方針2</Badge>
              </div>
              <p className="text-sm text-gray-300 mb-4">地域・世代を超えた学習コミュニティの構築</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-white">文科省の方針</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 多様な他者との協働</li>
                    <li>• 地域との連携強化</li>
                    <li>• 社会に開かれた教育課程</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">本プロジェクトの実装</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• 公民館×オンライン連携</li>
                    <li>• 世代間学習プログラム</li>
                    <li>• 地域企業との協働</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            {/* 参考資料・出典 */}
            <Card className="p-4 bg-gray-900 border-gray-700">
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
          </div>
        </section>


        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />

        {/* 関連リンク */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-white">🔗 関連ドキュメント</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">教育事業企画書</h3>
              <p className="text-sm text-gray-300 mb-4">文科省方針を先行実装する革新的教育プログラム</p>
              <a href="/docs/educational-proposal" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">サービス詳細</h3>
              <p className="text-sm text-gray-300 mb-4">3つの事業領域における包括的教育ソリューション</p>
              <a href="/docs/services" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">助成金活用ガイド</h3>
              <p className="text-sm text-gray-300 mb-4">NPO法人・教育事業向け助成金制度の活用戦略</p>
              <a href="/docs/grants" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}