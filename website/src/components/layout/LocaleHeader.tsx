"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from 'next-intl';
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
import SimpleLanguageSwitcher from "@/components/SimpleLanguageSwitcher";

export default function LocaleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');

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
              <NavigationMenuTrigger>{t('adultSchool')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">{t('courses')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('practicalAISkills')}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/adult-school/courses"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('intensiveCourse')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('chatgptClaude')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/adult-school/pricing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('pricingPlans')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('affordablePricing')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 子ども向けスクール */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('kidsLab')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">AI Kids Lab</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('creativityAndTech')}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kids-lab/programs"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('ageBasedPrograms')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('elementary1to6')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kids-lab/locations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('locationsAccess')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('publicCenterOnline')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 法人向けサービス */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('corporateServices')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <div className="grid gap-1">
                    <h3 className="font-medium leading-none">{t('corporateTraining')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('comprehensiveDXSupport')}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/corporate/training"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('aiTrainingPrograms')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('customCorporateTraining')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/corporate/consultation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t('implementationConsulting')}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t('aiImplementationStrategy')}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* 教育理念 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/philosophy"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  {t('philosophy')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* ドキュメント */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/docs"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  {t('docs')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* 右側のボタン（デスクトップ） */}
        <div className="hidden md:flex items-center space-x-4">
          <SimpleLanguageSwitcher />
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">{t('login')}</Button>
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
              <h3 className="font-medium text-white">{t('adultSchool')}</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/adult-school/courses"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('intensiveCourse')}
                </Link>
                <Link
                  href="/adult-school/pricing"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('pricingPlans')}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white">{t('kidsLab')}</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/kids-lab/programs"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('ageBasedPrograms')}
                </Link>
                <Link
                  href="/kids-lab/locations"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('locationsAccess')}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white">{t('corporateServices')}</h3>
              <div className="pl-4 space-y-1">
                <Link
                  href="/corporate/training"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('aiTrainingPrograms')}
                </Link>
                <Link
                  href="/corporate/consultation"
                  className="block py-2 text-sm text-gray-400 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('implementationConsulting')}
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t space-y-2">
              <Link href="/philosophy" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  {t('philosophy')}
                </Button>
              </Link>
              <Link href="/docs" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
                  {t('docs')}
                </Button>
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">
                  {t('login')}
                </Button>
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t">
                <SimpleLanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}