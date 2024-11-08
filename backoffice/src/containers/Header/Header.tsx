// Header.tsx
import React from 'react';
import Breadcrumb from './Breadcrumb';
import NavItem from './HeaderNavItem';
import Dropdown from './HeaderDropdown';
import Icon from '../../components/UI/Icon';

const Header: React.FC = () => {
  return (
    <header className="header header-sticky p-0 mb-4">
      <div className="container-fluid border-bottom px-4">
        <button 
          className="header-toggler" 
          type="button" 
          onClick={() => console.log('Toggle Sidebar')} 
          style={{ marginInlineStart: '-14px' }}
        >
          <Icon id="cil-menu" width={24} height={24} />
        </button>

        <ul className="header-nav d-none d-lg-flex">
          <NavItem label="Dashboard" href="#" />
          <NavItem label="Users" href="#" />
          <NavItem label="Settings" href="#" />
        </ul>

        <ul className="header-nav ms-auto">
          <NavItem icon="cil-bell" href="#" />
          <NavItem icon="cil-list-rich" href="#" />
          <NavItem icon="cil-envelope-open" href="#" />
        </ul>

        <ul className="header-nav">
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <Dropdown />
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
        </ul>
      </div>
      
      <div className="container-fluid px-4">
        <Breadcrumb />
      </div>
    </header>
  );
};

export default Header;