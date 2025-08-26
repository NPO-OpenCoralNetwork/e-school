import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Creator Lab - AIで未来を創る学びの場",
  description: "大人向けAIスクール、子ども向けデジタル創造スクール、NPO向けサービスを提供。すべての人にAI時代を生き抜く力を。",
  keywords: "AI,機械学習,プログラミング,教育,スクール,ChatGPT,Claude,子ども,NPO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
