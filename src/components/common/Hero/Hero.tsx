import React, { type ReactNode, useEffect, useRef, useState } from 'react';
import { Typography, TypographyProps, Container, Skeleton, Box, Button } from '@mui/material';
import type { HTMLProps } from '@/types/common.types';
import {
  HeroContextType,
  ContentProps,
  BackgroundProps,
  HeroComposition,
  ScrollIconProps,
} from '@/components/common/Hero/hero.interfaces';
import useWindowSize from '@/hooks/useWindowSize';
import { Mouse } from '@mui/icons-material';

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (context === undefined) {
    throw new Error('useHeroContext must be used within a Hero Component');
  }
  return context;
};

export interface HeroProps extends HTMLProps<'section'> {
  children: ReactNode;
}
const Background = ({
  type,
  src,
  srcMobile,
  imageAlt = 'Hero Banner',
  hideSkeleton = false,
  hideTransparentLayer = false,
}: BackgroundProps) => {
  const { isLoaded, setIsLoaded } = useHeroContext();
  const mediaRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (mediaRef.current) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };

    const currentMediaRef = mediaRef.current;

    if (currentMediaRef) {
      if (type === 'img') {
        if ((currentMediaRef as HTMLImageElement).complete) {
          handleLoad();
        } else {
          (currentMediaRef as HTMLImageElement).onload = handleLoad;
        }
      }
    }
  }, [type, setIsLoaded]);

  const mediaClass = {
    gridRowStart: 1,
    gridColumnStart: 1,
    height: { xs: 'auto', lg: '80vh', xl: '90vh' },
    transitionProperty: 'opacity',
    transitionDuration: '.5s',
    opacity: isLoaded ? 100 : 0,
  };

  const { width } = useWindowSize();

  return (
    <>
      {!isLoaded && !hideSkeleton && (
        <Skeleton
          //   className={cn(
          //     'inset-transition-all duration-500 ',
          //   )}
          sx={{
            gridRowStart: 1,
            gridColumnStart: 1,
            width: '100%',
            zIndex: 10,
            height: { xs: '40vh', md: '60vh', lg: '95vh' },
          }}
        />
      )}
      {type === 'img' ? (
        width && width <= 640 ? (
          <Box
            component={'img'}
            alt={imageAlt}
            src={srcMobile || src}
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            sx={mediaClass}
            width={600}
            height={100}
            style={{ width: '100%' }}
          />
        ) : (
          <Box
            component={'img'}
            alt={imageAlt}
            src={src}
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            sx={mediaClass}
            width={992}
            height={100}
            style={{ width: '100%' }}
          />
        )
      ) : null}
      {!hideTransparentLayer && (
        <Box
          component="div"
          sx={{
            inset: 0,
            gridRowStart: 1,
            gridColumnStart: 1,
            background: 'rgba(0,0,0,.5)',
            transitionProperty: 'opacity',
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,.1)',
            transitionDuration: '.5s',
            opacity: isLoaded ? 100 : 0,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

const Content = ({ children }: ContentProps) => {
  const { isLoaded } = useHeroContext();
  if (!isLoaded) return null;
  return (
    <Box
      component={'div'}
      sx={{
        gridRowStart: 1,
        gridColumnStart: 1,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container sx={{ py: 0 }} maxWidth="md">
        {children}
      </Container>
    </Box>
  );
};

const Title = ({ children, className, ...props }: TypographyProps) => (
  <Typography variant="h1" {...props} sx={{ color: theme => theme.vars.palette.grey[100] }}>
    {children}
  </Typography>
);

const SubTitle = ({ children, className, ...props }: TypographyProps) => (
  <Typography
    variant="body1"
    {...props}
    className={className}
    sx={{
      color: theme => (theme.palette.mode === 'dark' ? theme.vars.palette.grey[100] : theme.vars.palette.grey[100]),
      fontSize: { md: '1.5rem' },
      maxWidth: '50%',
      mx: 'auto',
      pt: 2,
    }}
  >
    {children}
  </Typography>
);

const ScrollIcon = ({ className, align = 'right' }: ScrollIconProps) => {
  const { isLoaded, heroBannerRef } = useHeroContext();

  const scrollToBottom = () => {
    if (heroBannerRef.current) {
      const sectionBottom = heroBannerRef.current.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.scrollY + sectionBottom,
        behavior: 'smooth',
      });
    }
  };

  if (!isLoaded) return null;

  let alignClass = '';
  switch (align) {
    case 'left':
      alignClass = 'start';
      break;
    case 'center':
      alignClass = 'center';
      break;
    case 'right':
      alignClass = 'end';
      break;
    default:
      alignClass = 'end';
  }

  return (
    <Box
      sx={{
        gridRowStart: 1,
        gridColumnStart: 1,
        display: 'flex',
        alignItems: 'end',
      }}
    >
      <Container
        sx={{
          display: { md: 'block' },
          mb: { sm: '0', md: '1rem', lg: '2rem' },
          animationDuration: '1000ms',
          animation: 'fadeDown',
        }}
      >
        <Box component={'div'} sx={{ display: 'flex', justifyContent: alignClass }}>
          <Button sx={{}} onClick={scrollToBottom} type="button" className={className}>
            <Box
              component={'div'}
              sx={{
                gap: '0.5rem',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: theme => theme.vars.palette.grey[100], fontWeight: 600 }}>
                scroll
              </Typography>
              <Mouse sx={{ color: theme => theme.vars.palette.grey[100] }} />
            </Box>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const Hero: React.FC<HeroProps> & HeroComposition = Object.assign(
  ({ children, className, ...props }: HeroProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroBannerRef = useRef<HTMLDivElement>(null);

    return (
      <HeroContext.Provider value={{ isLoaded, setIsLoaded, heroBannerRef }}>
        <Box
          id="hero-banner"
          ref={heroBannerRef}
          className={className}
          {...props}
          component={'section'}
          sx={{ position: 'relative', display: 'grid', width: '100%' }}
        >
          {children}
        </Box>
      </HeroContext.Provider>
    );
  },
  {
    Background,
    Content,
    Title,
    SubTitle,
    ScrollIcon,
  },
);

export { Hero, Background, Content, Title, SubTitle, ScrollIcon };
