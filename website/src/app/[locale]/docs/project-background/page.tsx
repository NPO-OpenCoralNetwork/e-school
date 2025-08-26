import fs from 'fs';
import path from 'path';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';

export default async function ProjectBackgroundPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations('docs.projectBackground');
  
  // ロケールに基づいてファイルパスを決定
  const fileName = locale === 'en' ? 'PROJECT_BACKGROUND_EN.md' : 'PROJECT_BACKGROUND.md';
  const filePath = path.join(process.cwd(), 'docs', fileName);
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = locale === 'en' 
      ? '# Project Background\n\nCurrently under preparation.' 
      : '# プロジェクト背景書\n\n現在準備中です。';
  }
  
  return (
    <DocLayout
      title={t('title')}
      description={t('description')}
    >
      <div className="max-w-5xl mx-auto">
        {/* Markdownコンテンツ */}
        <div className="prose prose-invert prose-lg max-w-none">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </DocLayout>
  );
}