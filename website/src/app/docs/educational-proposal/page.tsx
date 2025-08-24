import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '@/components/docs/MarkdownRenderer';
import { DocLayout } from '@/components/docs/DocLayout';

export default function EducationalProposalPage() {
  const filePath = path.join(process.cwd(), '..', 'docs', 'EDUCATIONAL_PROPOSAL.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# 教育事業企画書\n\n現在準備中です。';
  }
  
  return (
    <DocLayout title="教育事業企画書">
      <MarkdownRenderer content={content} />
    </DocLayout>
  );
}