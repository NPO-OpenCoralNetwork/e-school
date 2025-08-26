import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('navigation');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            {locale === 'ja' ? 'AIで未来を創る学びの場' : 'AI Creator Lab - Learning Platform for the AI Future'}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {locale === 'ja' ? 'すべての人にAI時代を生き抜く力を' : 'Empowering everyone with AI-age skills'}
          </p>
        </div>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link 
            href="/docs/project-background"
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-400">{t('projectBackground')}</h3>
            <p className="text-gray-300 text-sm">
              {locale === 'ja' 
                ? 'プロジェクトの背景と教育理念について詳しく説明します' 
                : 'Detailed explanation of project background and educational philosophy'}
            </p>
          </Link>

          <Link 
            href="/kids-lab"
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3 text-green-400">
              {locale === 'ja' ? '子ども向けスクール' : 'Kids School'}
            </h3>
            <p className="text-gray-300 text-sm">
              {locale === 'ja' 
                ? '年齢別プログラムとAI学習システム' 
                : 'Age-based programs and AI learning systems'}
            </p>
          </Link>

          <Link 
            href="/docs"
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">{t('docs')}</h3>
            <p className="text-gray-300 text-sm">
              {locale === 'ja' 
                ? 'ドキュメント・リソース' 
                : 'Documentation and Resources'}
            </p>
          </Link>
        </div>

        {/* Language Test Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'ja' ? '多言語テスト' : 'Multi-language Test'}
          </h2>
          <p className="text-gray-300 mb-4">
            {locale === 'ja' 
              ? '現在の言語設定: 日本語' 
              : 'Current language setting: English'}
          </p>
          <div className="flex gap-4">
            <Link 
              href="/docs/project-background" 
              className="text-blue-400 hover:underline"
            >
              {locale === 'ja' ? 'プロジェクト背景（日本語）' : 'Project Background (English)'}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}