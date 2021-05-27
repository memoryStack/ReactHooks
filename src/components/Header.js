import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <div className="header">
      <a href="/"><Logo /></a>
      <div className="nav">
        <NavLink activeClassName="nav__link--active" to="/dashboard">
          See dashboard
        </NavLink>
      </div>
    </div>
  );
};
