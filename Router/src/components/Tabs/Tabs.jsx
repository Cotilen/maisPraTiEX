import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './tabs.module.css';

const Tabs = () => {
  return (
    <div>
      <nav className="tabs">
        <NavLink to="tab1" className={({ isActive }) => (isActive ? 'active' : '')}>Tab 1</NavLink>
        <NavLink to="tab2" className={({ isActive }) => (isActive ? 'active' : '')}>Tab 2</NavLink>
        <NavLink to="tab3" className={({ isActive }) => (isActive ? 'active' : '')}>Tab 3</NavLink>
      </nav>
      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Tabs;
