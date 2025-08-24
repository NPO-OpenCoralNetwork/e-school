import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';

export default function ProjectBackgroundPage() {
  const filePath = path.join(process.cwd(), '..', 'docs', 'PROJECT_BACKGROUND.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# プロジェクト背景書\n\n現在準備中です。';
  }
  
  return (
    <DocLayout title="プロジェクト背景書">
      <MarkdownRenderer content={content} />
    </DocLayout>
  );
}