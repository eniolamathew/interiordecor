// src/components/SidebarSection.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarSectionProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, isOpen, toggle, children }) => {
  return (
    <li className='parent'>
      <div onClick={toggle} className="cursor-pointer flex justify-between items-center">
        <span>{title}</span>
        <FontAwesomeIcon 
            icon={isOpen ? faChevronDown : faChevronRight} 
            className={`ml-2`}
        />
      </div>
      {isOpen && <ul className="pl-4 mt-2">{children}</ul>}
    </li>
  );
};

export default SidebarSection;