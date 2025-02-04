import React from 'react';

interface HeadingProps {
  title: string;
}

const HeadingH4 = ({ title }: HeadingProps) => {
  return <h4>{title}</h4>;
};

export default HeadingH4;
