import React, { useState } from 'react';
import Icon from '../../components/UI/Icon';

interface SidebarNavGroupProps {
  label: string;
  icon: string;
  children: React.ReactNode;
}

const SidebarNavGroup: React.FC<SidebarNavGroupProps> = ({ label, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGroup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`nav-group${isOpen ? ' show' : ''}`}>
      <a className="nav-link nav-group-toggle" href="#" onClick={toggleGroup}>
        <div className='mr-2'><Icon id={`${icon}`} width={24} height={24} /></div>
        {label}
      </a>
      <ul className={`nav-group-items ${isOpen ? '' : 'compact'}`}>
        {children}
      </ul>
    </li>
  );
};

export default SidebarNavGroup;