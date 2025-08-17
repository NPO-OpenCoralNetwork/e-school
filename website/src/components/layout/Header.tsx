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
    <header className="border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="font-bold text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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

            {/* 法人向けサービス */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>法人向けサービス</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">企業研修・コンサル</h3>
                    <p className="text-sm text-muted-foreground">
                      企業のDX推進を包括的にサポート
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/corporate/training"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          AI研修プログラム
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          カスタム企業研修
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/corporate/consultation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          導入コンサルティング
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          AI導入戦略策定
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
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">お問い合わせ</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">ログイン</Button>
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
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-white">大人向けスクール</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/adult-school/courses"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  3日間集中講座
                </Link>
                <Link
                  href="/adult-school/pricing"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  料金プラン
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white">子ども向けスクール</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/kids-lab/programs"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  年齢別プログラム
                </Link>
                <Link
                  href="/kids-lab/locations"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  拠点・アクセス
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white">法人向けサービス</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/corporate/training"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI研修プログラム
                </Link>
                <Link
                  href="/corporate/consultation"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  導入コンサルティング
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <Link href="/docs" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  ドキュメント
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
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