import React from 'react';
import Icon from '../../components/UI/Icon';

const HeaderDropdown: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <button 
        className="btn btn-link nav-link py-2 px-2 d-flex align-items-center" 
        type="button" 
        aria-expanded="false" 
        data-coreui-toggle="dropdown"
      >
        <Icon id={'cil-contrast'} width={24} height={24} />
      </button>

      <ul className="dropdown-menu dropdown-menu-end" style={{ '--cui-dropdown-min-width': '8rem' } as React.CSSProperties} >
        <li>
          <button className="dropdown-item d-flex align-items-center" type="button" data-coreui-theme-value="light">
            <Icon id={'cil-sun'} width={24} height={24} />
            Light
          </button>
        </li>
        <li>
          <button className="dropdown-item d-flex align-items-center" type="button" data-coreui-theme-value="dark">
            <Icon id={'cil-moon'} width={24} height={24} />
            Dark
          </button>
        </li>
        <li>
          <button className="dropdown-item d-flex align-items-center active" type="button" data-coreui-theme-value="auto">
            <Icon id={'cil-contrast'} width={24} height={24} />
            Auto
          </button>
        </li>
      </ul>
    </li>
  );
};

export default HeaderDropdown;