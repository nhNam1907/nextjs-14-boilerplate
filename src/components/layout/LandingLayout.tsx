'use client';
import { RootState } from '@/lib/store';
import { configTranslation } from '@/utils/funtions';
import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppLoading from '../AppLoading';
import TranslationsProvider from '../TranslationsProvider';

const i18Namespaces = ['home', 'common'];

interface LandingLayoutProps {
  children: ReactNode;
  locale: string;
}

function LandingLayout({ children, locale }: LandingLayoutProps) {
  const [resources, setResources] = useState<any>(null);
  const { isLoading } = useSelector((state: RootState) => state.system);

  useEffect(() => {
    configTranslation(locale, i18Namespaces, setResources);
  }, []);

  return (
    <div className='landing-layout'>
      <TranslationsProvider locale={locale} namespaces={i18Namespaces} resources={resources}>
        <div>
          {isLoading && <AppLoading />}
          {children}
        </div>
      </TranslationsProvider>
    </div>
  );
}

export default LandingLayout;
