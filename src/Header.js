import React from 'react';
import { Logo } from './Logo';

const Header_ = () => {
  return (
    <header>
      <Logo />
    </header>
  );
};

export const Header = React.memo(Header_)