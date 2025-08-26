'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function SimpleLanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <div className="flex gap-2 items-center">
      <div className="flex rounded-md border border-gray-600">
        <Button
          variant={currentLocale === 'ja' ? 'default' : 'ghost'}
          size="sm"
          asChild
          className={`rounded-r-none border-r border-gray-600 ${
            currentLocale === 'ja'
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <Link href={pathname} locale="ja">
            日本語
          </Link>
        </Button>
        <Button
          variant={currentLocale === 'en' ? 'default' : 'ghost'}
          size="sm"
          asChild
          className={`rounded-l-none ${
            currentLocale === 'en'
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <Link href={pathname} locale="en">
            English
          </Link>
        </Button>
      </div>
    </div>
  );
}