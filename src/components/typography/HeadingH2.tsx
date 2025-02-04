import React from 'react';

interface HeadingProps {
  title: string;
}

const HeadingH2 = ({ title }: HeadingProps) => {
  return <h2>{title}</h2>;
};

export default HeadingH2;
