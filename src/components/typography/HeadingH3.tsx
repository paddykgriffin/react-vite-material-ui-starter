import React from 'react';

interface HeadingProps {
  title: string;
}

const HeadingH3 = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

export default HeadingH3;
