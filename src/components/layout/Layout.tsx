import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header/Header';
import { useEffect } from 'react';
import type React from 'react';
import { HeaderProvider } from '@/components/layout/Header/HeaderContext';
import siteConfig from '@/site-config';

interface LayoutProps {
  children: React.ReactNode;
  emptyPage?: boolean;
  pageTitle?: string;
  disableTransparentHeader?: boolean;
}

const Layout = ({ pageTitle, children, disableTransparentHeader }: LayoutProps) => {
  useEffect(() => {
    if (import.meta.env.REACT_APP_PROJECT_NAME) {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_PROJECT_NAME}`;
    } else {
      document.title = `${pageTitle} | ${import.meta.env.REACT_APP_SLUG}`;
    }
  }, [pageTitle]);

  useEffect(() => {
    if (!siteConfig.layout.header.transparent || disableTransparentHeader) {
      setTimeout(() => {
        const header = document.getElementById('main-header');
        const siteMain = document.getElementById('site-main');
        if (header && siteMain) {
          siteMain.style.marginTop = `${header.offsetHeight}px`;
        }
      }, 50);
    }
  }, [disableTransparentHeader]);

  return (
    <div id="site-wrapper">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
