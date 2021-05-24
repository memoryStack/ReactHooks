import React, { useContext } from 'react';
import { ThemeContext } from './App';

export const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
  return <div className={`App ${theme}`}>{children}</div>;
};
