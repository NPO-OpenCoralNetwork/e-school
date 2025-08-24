import 'highlight.js/styles/github-dark.css';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* メインコンテンツ */}
      <main>
        {children}
      </main>
    </div>
  );
}