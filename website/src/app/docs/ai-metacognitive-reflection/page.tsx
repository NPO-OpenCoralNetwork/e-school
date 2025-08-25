import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function AiMetacognitiveReflectionPage() {
  const filePath = path.join(process.cwd(), '..', 'docs', 'ai-metacognitive-reflection.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# AI型メタ認知リフレクションとは？\n\n現在準備中です。';
  }
  
  return (
    <DocLayout
      title="AI型メタ認知リフレクションとは？"
      description="AIチャットボットによる革新的な学習支援手法"
    >
      <div className="max-w-5xl mx-auto">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">AI型メタ認知リフレクション</h1>
          <p className="text-xl mb-6">AIチャットボットによる革新的な学習支援手法</p>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-purple-500 hover:bg-purple-600">セルフリフレクション</Badge>
            <Badge className="bg-indigo-500 hover:bg-indigo-600">ソーシャルリフレクション</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">24時間サポート</Badge>
          </div>
        </div>

        {/* 概要セクション */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">🤖 革新的アプローチ</h2>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-white">2つのリフレクションを同時実現</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <h4 className="font-semibold text-blue-300">セルフ・メタ認知リフレクション</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  自分で日記やメモを書くように、自分の考え・感覚をAIに言語化して整理
                </p>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>• 思考の構造化支援</li>
                  <li>• 継続的な振り返り習慣</li>
                  <li>• 学習パターンの発見</li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <h4 className="font-semibold text-purple-300">ソーシャル・リフレクション</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  本来は他者からのフィードバックで得られるもの。AIなら中立的に「学びの鏡」として返答
                </p>
                <ul className="text-xs space-y-1 text-gray-400">
                  <li>• 偏見・バイアスなし</li>
                  <li>• 24時間365日利用可能</li>
                  <li>• 心理的安全性の確保</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* AI活用の優位性 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">✨ AIの独自優位性</h2>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-xl font-semibold mb-4 text-white">従来の課題をAIで解決</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-gray-300">項目</th>
                      <th className="text-left py-3 px-4 text-red-300">従来の一人での内省</th>
                      <th className="text-left py-3 px-4 text-yellow-300">他者からのフィードバック</th>
                      <th className="text-left py-3 px-4 text-green-300">AI型メタ認知リフレクション</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 font-medium">客観性</td>
                      <td className="py-3 px-4 text-red-300">主観的になりがち</td>
                      <td className="py-3 px-4 text-yellow-300">偏見・バイアス混入</td>
                      <td className="py-3 px-4 text-green-300">✓ 中立的・客観的</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 font-medium">継続性</td>
                      <td className="py-3 px-4 text-red-300">続けるのが困難</td>
                      <td className="py-3 px-4 text-yellow-300">相手の都合に依存</td>
                      <td className="py-3 px-4 text-green-300">✓ 24時間365日利用可</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4 font-medium">心理的安全</td>
                      <td className="py-3 px-4 text-red-300">内向的になりがち</td>
                      <td className="py-3 px-4 text-yellow-300">人間関係リスクあり</td>
                      <td className="py-3 px-4 text-green-300">✓ 完全に安全な環境</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">深度</td>
                      <td className="py-3 px-4 text-red-300">表面的になりがち</td>
                      <td className="py-3 px-4 text-yellow-300">時間制限あり</td>
                      <td className="py-3 px-4 text-green-300">✓ 無限に深掘り可能</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* 具体的な対話例 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">💬 対話例</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">セルフ・リフレクション例</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-400 mb-2">学習者:</div>
                  <div className="text-gray-200">「今日のプログラミングの課題、すごく難しくて全然進まなかった...」</div>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-400 mb-2">AI:</div>
                  <div className="text-gray-200">「難しい課題に取り組んでいたんですね。『全然進まなかった』とおっしゃいましたが、具体的にはどの部分で躓いてしまったのでしょうか？」</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-400 mb-2">学習者:</div>
                  <div className="text-gray-200">「ループの部分がどうしても理解できなくて...」</div>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-400 mb-2">AI:</div>
                  <div className="text-gray-200">「ループの概念で困っていたんですね。これまでのプログラミング学習で、同じように最初は難しく感じたけれど、最終的に理解できたものはありませんか？」</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">ソーシャル・リフレクション例</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-400 mb-2">学習者:</div>
                  <div className="text-gray-200">「みんなの前で発表するのが本当に苦手で、いつも緊張してしまう...人に相談するのも恥ずかしくて」</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <div className="text-purple-400 mb-2">AI:</div>
                  <div className="text-gray-200">「発表への不安を抱えているんですね。他の人には相談しづらいお気持ち、よくわかります。まず、発表の時に一番気になるのはどんなことでしょうか？」</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-400 mb-2">学習者:</div>
                  <div className="text-gray-200">「間違えたら恥ずかしいし、みんなから変に思われそうで...」</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <div className="text-purple-400 mb-2">AI:</div>
                  <div className="text-gray-200">「あなたが他の人の発表を聞いている時、その人が少し間違えたら『変な人だ』と思いますか？」</div>
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
              <h3 className="font-semibold mb-2 text-white">認知主義的アプローチ</h3>
              <p className="text-sm text-gray-300 mb-4">情報処理と記憶システムの詳細理論</p>
              <a href="/docs/cognitivism" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">プロジェクト背景書</h3>
              <p className="text-sm text-gray-300 mb-4">教育理論統合の背景と革新性</p>
              <a href="/docs/project-background" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
            <Card className="p-6 bg-gray-800 border-gray-600">
              <h3 className="font-semibold mb-2 text-white">教育理論詳細</h3>
              <p className="text-sm text-gray-300 mb-4">3つの教育理論の統合アプローチ</p>
              <a href="/docs/educational-theory" className="text-blue-400 hover:underline text-sm">詳細を見る →</a>
            </Card>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}