"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="font-bold text-xl text-primary">
          AI Creator Lab
        </Link>

        {/* デスクトップナビゲーション */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* 大人向けスクール */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>大人向けスクール</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">コース</h3>
                    <p className="text-sm text-muted-foreground">
                      実践的なAIスキル習得
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/adult-school/courses"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          3日間集中講座
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          ChatGPT/Claude活用術
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/adult-school/pricing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          料金プラン
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          お得な価格設定
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 子ども向けスクール */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>子ども向けスクール</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">AI Kids Lab</h3>
                    <p className="text-sm text-muted-foreground">
                      創造性とテクノロジーの融合
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kids-lab/programs"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          年齢別プログラム
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          小1〜高校生まで対応
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kids-lab/locations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          拠点・アクセス
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          公民館＋オンライン
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* NPO向けサービス */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>NPO向けサービス</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">支援サービス</h3>
                    <p className="text-sm text-muted-foreground">
                      NPO法人の活動を技術でサポート
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/npo-services/google-grants"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          Google Ad Grants
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          月150万円の広告無料
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/npo-services/azure-guide"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          Azure活用法
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          年52万円のクレジット
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* ドキュメント */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/docs"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  ドキュメント
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* 右側のボタン（デスクトップ） */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <Button variant="ghost">お問い合わせ</Button>
          </Link>
          <Link href="/login">
            <Button>ログイン</Button>
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">大人向けスクール</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/adult-school/courses"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  3日間集中講座
                </Link>
                <Link
                  href="/adult-school/pricing"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  料金プラン
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">子ども向けスクール</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/kids-lab/programs"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  年齢別プログラム
                </Link>
                <Link
                  href="/kids-lab/locations"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  拠点・アクセス
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">NPO向けサービス</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/npo-services/google-grants"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Google Ad Grants
                </Link>
                <Link
                  href="/npo-services/azure-guide"
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Azure活用法
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <Link href="/docs" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  ドキュメント
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">
                  ログイン
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}