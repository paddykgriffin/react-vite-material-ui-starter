import React from 'react';
import { FooterMenuLinks } from '../navigation/FooterMenuLinks';

const FooterNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
      }}
    >
      {FooterMenuLinks.map(item => (
        <a
          href={item.path}
          key={item.title}
          style={{
            fontSize: '0.875rem',
            textDecoration: 'none',
          }}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default FooterNav;
