import React  from 'react';
import { Notify } from '../Notify';
import { Logo } from '../Logo';

export const Layout = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <Notify />
    </>
  );
};
