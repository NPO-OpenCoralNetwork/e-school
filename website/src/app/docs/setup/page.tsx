import { promises as fs } from 'fs';
import path from 'path';
import { DocLayout } from '@/components/docs/DocLayout';
import { MarkdownRenderer } from '@/components/docs/MarkdownRenderer';

export default async function SetupPage() {
  const setupPath = path.join(process.cwd(), '..', 'docs', 'SETUP_GUIDE.md');
  const content = await fs.readFile(setupPath, 'utf8');

  return (
    <DocLayout title="セットアップガイド">
      <div className="space-y-6">
        {/* ドキュメントヘッダー */}
        <div className="border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚙️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">セットアップガイド</h1>
              <p className="text-gray-400">開発環境のセットアップから本番デプロイまで</p>
            </div>
          </div>
          
          {/* クイックスタート */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-blue-300 mb-3">🚀 クイックスタート</h3>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-400"># プロジェクトのクローン</div>
              <div className="text-green-400">git clone https://github.com/your-username/e-school.git</div>
              <div className="text-gray-400 mt-2"># 依存関係のインストール</div>
              <div className="text-green-400">cd e-school/website && npm install</div>
              <div className="text-gray-400 mt-2"># 開発サーバー起動</div>
              <div className="text-green-400">npm run dev</div>
            </div>
          </div>
        </div>

        {/* 必要な環境情報 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-3 flex items-center">
              <span className="mr-2">💻</span>
              必要な環境
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Node.js 20.x以上
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                npm または yarn
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Git
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-3 flex items-center">
              <span className="mr-2">🛠️</span>
              推奨ツール
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                VS Code
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                React Developer Tools
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Tailwind CSS IntelliSense
              </li>
            </ul>
          </div>
        </div>

        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />
        
        {/* トラブルシューティング */}
        <div className="mt-12 p-6 bg-orange-600/10 border border-orange-500/20 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-300 mb-4 flex items-center">
            <span className="mr-2">⚠️</span>
            よくある問題
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium text-white">ポート3000が使用中の場合</div>
              <div className="text-gray-400">npm run dev -- -p 3001 で別のポートを使用</div>
            </div>
            <div>
              <div className="font-medium text-white">TypeScriptエラーが発生する場合</div>
              <div className="text-gray-400">npm run type-check で型チェックを実行</div>
            </div>
            <div>
              <div className="font-medium text-white">依存関係のエラーが発生する場合</div>
              <div className="text-gray-400">node_modules を削除して npm install を再実行</div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}