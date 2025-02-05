import HeaderNav from '@/components/navigation/HeaderNav';
import ModeToggle from '@/components/layout/Header/ModeToggle';
import { Container, AppBar, Box } from '@mui/material';
import { useHeader } from '@/components/layout/Header/HeaderContext';
import { useDarkMode } from '@/hooks/useDarkMode';
import Logo from '@/components/common/Logo/Logo';
import SideBarNav from '@/components/layout/Header/SideBarNav';
import siteConfig from '@/site-config';

export default function Header() {
  const { isNavTransparent, isNavVisible, mainNavRef } = useHeader();
  const { isDarkMode } = useDarkMode();
  const { sidebarNav } = siteConfig.layout.header;

  return (
    <AppBar
      sx={[
        {
          position: 'relative',
          display: 'inherit',
          p: 0,
          top: !isNavVisible ? -(mainNavRef.current?.offsetHeight || '80px') : 0,
          backgroundColor: 'primary.main',
          boxShadow: 'none',
          backgroundImage: 'inherit',
        },
        theme =>
          theme.applyStyles('dark', {
            backgroundColor: 'primary.main',
          }),
      ]}
    >
      <Box
        component="nav"
        sx={{
          py: 2,
          background: isNavTransparent ? 'transparent' : isDarkMode ? 'black' : 'white',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              '& img': {
                height: '2rem',
              },
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
              }}
            >
              <HeaderNav />
            </Box>
            <ModeToggle />
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sidebarNav && <SideBarNav />}
            </Box>
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
}
