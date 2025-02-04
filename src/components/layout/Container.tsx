import React from 'react';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container = ({ children, style }: Props) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export default Container;
