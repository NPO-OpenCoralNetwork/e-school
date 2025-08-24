import { promises as fs } from 'fs';
import path from 'path';
import { DocLayout } from '@/components/docs/DocLayout';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';

export default async function ReadmePage() {
  const readmePath = path.join(process.cwd(), '..', 'README.md');
  const content = await fs.readFile(readmePath, 'utf8');

  return (
    <DocLayout title="README">
      <div className="space-y-6">
        {/* ドキュメントヘッダー */}
        <div className="border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📖</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">プロジェクト概要</h1>
              <p className="text-gray-400">AI Creator Lab E-Schoolの全体像</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Next.js 15
            </span>
            <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
              React 19
            </span>
            <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
              Tailwind CSS 4
            </span>
            <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
              TypeScript
            </span>
          </div>
        </div>

        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />
        
        {/* フッター情報 */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">このドキュメントについて</h3>
              <p className="text-gray-400 text-sm">
                AI Creator Lab E-Schoolプロジェクトの基本情報とセットアップ手順
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">最終更新</div>
              <div className="text-white font-medium">2024年1月1日</div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}