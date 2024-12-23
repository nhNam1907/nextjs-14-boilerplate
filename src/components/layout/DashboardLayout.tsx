'use client';
import { RootState } from '@/lib/store';
import { configTranslation } from '@/utils/funtions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppLoading from '../AppLoading';
import TranslationsProvider from '../TranslationsProvider';

function DashboardLayout({ children, locale }) {
  const { isLoading } = useSelector((state: RootState) => state.system);
  const [resources, setResources] = useState<any>(null);
  const i18Namespaces = ['home', 'common'];

  useEffect(() => {
    configTranslation(locale, i18Namespaces, setResources);
  }, []);

  return (
    <div className='dashboard-layout'>
      <TranslationsProvider locale={locale} namespaces={i18Namespaces} resources={resources}>
        <div>
          {isLoading && <AppLoading />}
          {children}
        </div>
      </TranslationsProvider>
    </div>
  );
}

export default DashboardLayout;
