import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">AI Creator Lab</h3>
            <p className="text-gray-400 text-sm">
              AIで未来を創る学びの場。すべての人にAI時代を生き抜く力を提供します。
            </p>
            <div className="flex space-x-4">
              {/* SNSリンク */}
              <Link 
                href="https://twitter.com/AICreatorLabTokyo" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="https://instagram.com/ai.creator.lab.tokyo" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM12.017 7.046c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348c-1.297 0-2.348-1.051-2.348-2.348S10.72 7.046 12.017 7.046z"/>
                </svg>
              </Link>
              <Link 
                href="https://youtube.com/AICreatorLabTokyo" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com/company/ai-creator-lab" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* 大人向けスクール */}
          <div className="space-y-4">
            <h4 className="font-semibold">大人向けスクール</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/adult-school/courses" className="text-gray-400 hover:text-white transition-colors">
                  コース一覧
                </Link>
              </li>
              <li>
                <Link href="/adult-school/pricing" className="text-gray-400 hover:text-white transition-colors">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="/adult-school/instructors" className="text-gray-400 hover:text-white transition-colors">
                  講師紹介
                </Link>
              </li>
              <li>
                <Link href="/adult-school/trial" className="text-gray-400 hover:text-white transition-colors">
                  無料体験
                </Link>
              </li>
              <li>
                <Link href="/adult-school/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  受講生の声
                </Link>
              </li>
            </ul>
          </div>

          {/* 子ども向けスクール */}
          <div className="space-y-4">
            <h4 className="font-semibold">子ども向けスクール</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kids-lab/programs" className="text-gray-400 hover:text-white transition-colors">
                  年齢別プログラム
                </Link>
              </li>
              <li>
                <Link href="/kids-lab/locations" className="text-gray-400 hover:text-white transition-colors">
                  拠点・アクセス
                </Link>
              </li>
              <li>
                <Link href="/kids-lab/pricing" className="text-gray-400 hover:text-white transition-colors">
                  料金・支援制度
                </Link>
              </li>
              <li>
                <Link href="/kids-lab/parents" className="text-gray-400 hover:text-white transition-colors">
                  保護者向け情報
                </Link>
              </li>
              <li>
                <Link href="/kids-lab/gallery" className="text-gray-400 hover:text-white transition-colors">
                  作品ギャラリー
                </Link>
              </li>
            </ul>
          </div>

          {/* NPO向けサービス・その他 */}
          <div className="space-y-4">
            <h4 className="font-semibold">NPO向けサービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/npo-services/google-grants" className="text-gray-400 hover:text-white transition-colors">
                  Google Ad Grants
                </Link>
              </li>
              <li>
                <Link href="/npo-services/azure-guide" className="text-gray-400 hover:text-white transition-colors">
                  Azure活用法
                </Link>
              </li>
              <li>
                <Link href="/npo-services/funding-database" className="text-gray-400 hover:text-white transition-colors">
                  助成金データベース
                </Link>
              </li>
              <li>
                <Link href="/npo-services/consultation" className="text-gray-400 hover:text-white transition-colors">
                  無料相談
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">その他</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                    ドキュメント
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                    イベント
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ニュースレター登録 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div>
              <h4 className="font-semibold mb-2">最新情報をお届け</h4>
              <p className="text-gray-400 text-sm">
                新しいコースやイベント情報をメールでお知らせします
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 lg:w-64 px-4 py-2 rounded-l-md border-0 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="rounded-l-none">
                登録
              </Button>
            </div>
          </div>
        </div>

        {/* 法的情報 */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 AI Creator Lab. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
              特定商取引法表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}