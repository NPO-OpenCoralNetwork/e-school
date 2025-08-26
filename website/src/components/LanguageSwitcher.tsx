'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const handleLanguageChange = (newLocale: 'ja' | 'en') => {
    // Remove current locale from pathname if present
    let newPathname = pathname;
    if (pathname.startsWith('/ja/')) {
      newPathname = pathname.replace('/ja/', '/');
    } else if (pathname.startsWith('/en/')) {
      newPathname = pathname.replace('/en/', '/');
    } else if (pathname === '/ja') {
      newPathname = '/';
    } else if (pathname === '/en') {
      newPathname = '/';
    }
    
    // Add new locale prefix, except for Japanese which is default
    if (newLocale === 'en') {
      router.push('/en' + newPathname);
    } else {
      router.push(newPathname);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm text-gray-400">{t('switchLanguage')}</span>
      <div className="flex rounded-md border border-gray-600">
        <Button
          variant={locale === 'ja' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleLanguageChange('ja')}
          className={`rounded-r-none border-r border-gray-600 ${
            locale === 'ja' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          {t('japanese')}
        </Button>
        <Button
          variant={locale === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleLanguageChange('en')}
          className={`rounded-l-none ${
            locale === 'en' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          {t('english')}
        </Button>
      </div>
    </div>
  );
}