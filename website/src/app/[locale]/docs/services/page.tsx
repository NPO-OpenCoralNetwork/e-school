import { promises as fs } from 'fs';
import path from 'path';
import { DocLayout } from '@/components/docs/DocLayout';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';

export default async function ServicesPage() {
  const servicesPath = path.join(process.cwd(), 'docs', 'SERVICES.md');
  const content = await fs.readFile(servicesPath, 'utf8');

  return (
    <DocLayout title="サービス詳細">
      <div className="space-y-6">
        {/* ドキュメントヘッダー */}
        <div className="border-b border-gray-700 pb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎓</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">サービス詳細</h1>
              <p className="text-gray-400">各事業の詳細なサービス内容と料金体系</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-blue-300 mb-1">大人向けAIスクール</h3>
              <p className="text-sm text-gray-400">3日間集中講座でビジネススキル向上</p>
            </div>
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-300 mb-1">子ども向けスクール</h3>
              <p className="text-sm text-gray-400">創造性とテクノロジーの融合教育</p>
            </div>
            <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-purple-300 mb-1">法人向けサービス</h3>
              <p className="text-sm text-gray-400">企業のDX推進・AI導入支援</p>
            </div>
          </div>
        </div>

        {/* マークダウンコンテンツ */}
        <MarkdownRenderer content={content} />
        
        {/* 関連リンク */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">関連情報</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/docs/setup"
              className="flex items-center space-x-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <span className="text-2xl">⚙️</span>
              <div>
                <div className="font-medium text-white">セットアップガイド</div>
                <div className="text-sm text-gray-400">開発環境の構築方法</div>
              </div>
            </a>
            <a
              href="/docs/api"
              className="flex items-center space-x-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <span className="text-2xl">🔌</span>
              <div>
                <div className="font-medium text-white">API仕様</div>
                <div className="text-sm text-gray-400">API設計とエンドポイント</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}