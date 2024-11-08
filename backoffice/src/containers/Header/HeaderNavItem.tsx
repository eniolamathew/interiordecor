import React from 'react';
import Icon from '../../components/UI/Icon';

interface HeaderNavItemProps {
  label?: string;
  icon?: string;
  href: string;
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ label, icon, href }) => {
  return (
    <li className="nav-item">
      {icon ? (
        <a className="nav-link" href={href}>
          <Icon id={`${icon}`} width={24} height={24} />
        </a>
      ) : (
        <a className="nav-link" href={href}>{label}</a>
      )}
    </li>
  );
};

export default HeaderNavItem;