import HeaderNav from '../../navigation/HeaderNav';
import siteConfig from '@/site-config';
import ModeToggle from './ModeToggle';
import { Typography, Container, AppBar, Box } from '@mui/material';
import { useHeader } from './HeaderContext';
import React from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import Logo from '@/components/common/Logo/Logo';

export default function Header() {
  const { isNavTransparent, isNavVisible, mainNavRef } = useHeader();
  const { isDarkMode } = useDarkMode();
  return (
    <AppBar
      sx={{
        display: 'inherit',
        p: 0,
        top: !isNavVisible ? -(mainNavRef.current?.offsetHeight || '80px') : 0,
        bgcolor: 'transparent',
        boxShadow: 'none',
        backgroundImage: 'inherit',
      }}
    >
      <Box
        component="nav"
        sx={{
          py: 6,
          background: isNavTransparent ? 'transparent' : isDarkMode ? 'black' : 'white',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: { xxl: '1850px' },
          }}
          maxWidth="xl"
        >
          <div>
            <Logo />
          </div>
          <div>
            <HeaderNav />
          </div>
          <div>
            <ModeToggle />
          </div>
        </Container>
      </Box>
    </AppBar>
  );
}
