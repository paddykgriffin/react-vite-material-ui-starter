import { SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Site Boilerplate',
  darkMode: true,
  theme: {
    color: {
      primary: {
        light: '#32a852',
        dark: '#f54251',
      },
      secondary: {
        light: '#D8D8D8',
        dark: '#000000',
      },
    },
  },
  layout: {
    header: {
      transparent: true,
      hideOnScroll: false,
      mainNav: true,
      sidebarNav: true
    }
  }
};

export default siteConfig;
