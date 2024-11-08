import React from 'react';
import Icon from '../../components/UI/Icon';

interface SidebarNavItemProps {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ label, href, icon, badge }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        <div className='mr-2'>
          <Icon id={`${icon!}`} width={20} height={20} />
        </div>
        {label}
        {badge && <span className="badge badge-sm bg-info ms-auto">{badge}</span>}
      </a>
    </li>
  );
};

export default SidebarNavItem;
