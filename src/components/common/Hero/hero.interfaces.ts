import React, { type ReactNode } from "react";
import { TypographyProps } from "@mui/material";

interface HeroContextType {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  heroBannerRef: React.RefObject<HTMLDivElement | null>;
}

interface HeroComposition {
  Content: React.FC<ContentProps>;
  Title: React.FC<TypographyProps>;
  SubTitle: React.FC<TypographyProps>;
  Background: React.FC<BackgroundProps>;
  ScrollIcon: React.FC<ScrollIconProps>;
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

interface BackgroundProps {
  type: "img";
  src: string;
  srcMobile?: string;
  imageAlt?: string;
  hideTransparentLayer?: boolean;
  hideSkeleton?: boolean;
  subPageHero?: boolean;
}

interface ScrollIconProps {
  align?: "left" | "center" | "right";
  children?: ReactNode;
  className?: string;
}

export type {
  HeroContextType,
  ScrollIconProps,
  HeroComposition,
  ContentProps,
  BackgroundProps,
};
