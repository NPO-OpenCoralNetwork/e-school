import { promises as fs } from 'fs';
import path from 'path';
import { DocLayout } from '@/components/docs/DocLayout';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';

export default async function ApiPage() {
  const apiPath = path.join(process.cwd(), 'docs', 'API_SPECIFICATION.md');
  const content = await fs.readFile(apiPath, 'utf8');

  return (
    <DocLayout title="API仕様">
      <div className="space-y-6">
        {/* ドキュメントヘッダー */}
        <div className="border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🔌</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">API仕様書</h1>
              <p className="text-gray-400">将来実装予定のAPI設計とエンドポイント仕様</p>
            </div>
          </div>
          
          {/* API概要 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <span className="mr-2">🌐</span>
                ベースURL
              </h3>
              <div className="bg-gray-900 rounded p-2 font-mono text-sm">
                <div className="text-blue-400">開発: http://localhost:3000/api</div>
                <div className="text-green-400">本番: https://ai-creator-lab.com/api</div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <span className="mr-2">🔐</span>
                認証方式
              </h3>
              <div className="space-y-1 text-sm">
                <div className="text-gray-300">JWT (JSON Web Token)</div>
                <div className="text-gray-400">Authorization: Bearer &lt;token&gt;</div>
              </div>
            </div>
          </div>
        </div>

        {/* 実装状況 */}
        <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-yellow-300 mb-3 flex items-center">
            <span className="mr-2">🚧</span>
            実装状況
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            このAPI仕様書は将来の実装予定です。現在はスタティックサイトとして動作しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Phase 1: 基本機能</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Phase 2: 拡張機能</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-300">Phase 3: 高度な機能</span>
            </div>
          </div>
        </div>

        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />
        
        {/* API実装例 */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">参考実装</h3>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-gray-400">{`// Next.js API Route例`}</div>
            <div className="text-blue-400">export async function</div>
            <div className="text-yellow-400"> POST</div>
            <div className="text-white">(request: Request) {`{`}</div>
            <div className="text-gray-300 ml-2">const body = await request.json()</div>
            <div className="text-gray-300 ml-2">{`// 認証・バリデーション・処理`}</div>
            <div className="text-blue-400 ml-2">return</div>
            <div className="text-white ml-2"> NextResponse.json(result)</div>
            <div className="text-white">{`}`}</div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}