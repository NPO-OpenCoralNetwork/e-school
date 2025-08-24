import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-gray-700 border-gray-600">
              <h4 className="font-semibold mb-4 text-blue-400">主要な政策転換点</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 1947年：教育基本法制定</li>
                <li>• 1960年代：高度成長期の教育拡大</li>
                <li>• 1980年代：臨時教育審議会</li>
                <li>• 2002年：ゆとり教育の本格導入</li>
                <li>• 2020年：新学習指導要領</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-700 border-gray-600">
              <h4 className="font-semibold mb-4 text-orange-400">現在の課題</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 教育格差の拡大</li>
                <li>• 不登校児童の増加</li>
                <li>• 教員の働き方改革</li>
                <li>• デジタル化の遅れ</li>
                <li>• 個別最適化の必要性</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* ゆとり教育の教訓 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">⚠️ ゆとり教育の失敗から学ぶ</h2>
          
          <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-2 text-yellow-300">📊 失敗要因の分析</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-red-300 mb-2">構造的問題</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 現場との理念共有不足</li>
                  <li>• 評価システムの未整備</li>
                  <li>• 教員研修の不十分さ</li>
                  <li>• 保護者理解の欠如</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-300 mb-2">本プロジェクトの対策</h5>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 段階的導入と検証</li>
                  <li>• 定量的効果測定</li>
                  <li>• 継続的な研修体制</li>
                  <li>• 全ステークホルダー参加</li>
                </ul>
              </div>
            </div>
          </div>
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
          </div>
        </section>

        {/* 実装戦略 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🚀 10の実装原則</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">理念を現実にする実証的アプローチ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-600 min-w-fit">原則1</Badge>
                <div>
                  <h4 className="font-semibold text-white">段階的導入</h4>
                  <p className="text-sm text-gray-300">小規模実証から段階的に拡大</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-600 min-w-fit">原則2</Badge>
                <div>
                  <h4 className="font-semibold text-white">定量的評価</h4>
                  <p className="text-sm text-gray-300">KPIによる客観的効果測定</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-purple-600 min-w-fit">原則3</Badge>
                <div>
                  <h4 className="font-semibold text-white">持続可能性</h4>
                  <p className="text-sm text-gray-300">長期的運営を見据えた設計</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-orange-600 min-w-fit">原則4</Badge>
                <div>
                  <h4 className="font-semibold text-white">包括的支援</h4>
                  <p className="text-sm text-gray-300">学習困難児への配慮</p>
                </div>
              </div>
            </div>
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