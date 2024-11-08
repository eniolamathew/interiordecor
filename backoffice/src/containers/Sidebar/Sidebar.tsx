// Sidebar.tsx
import React from 'react';
import SidebarNavGroup from './SidebarNavGroup';
import SidebarNavItem from './SidebarNavItem';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-fixed border-end" id="sidebar">
      <div className="sidebar-header border-bottom" style={{padding:"0rem",display:"flex", justifyContent:"center"}}>
        <div className="sidebar-brand">
          <div className="sidebar-brandLogo" ></div>
        </div>
        <button
          className="btn-close d-lg-none"
          type="button"
          data-coreui-dismiss="offcanvas"
          data-coreui-theme="dark"
          aria-label="Close"
          onClick={() => console.log('Toggling Sidebar')}
        ></button>
      </div>
      <ul className="sidebar-nav" style={{overflowY : "hidden"}} data-coreui="navigation" data-simplebar>
        <SidebarNavItem label="Dashboard" href="/" icon="cil-speedometer" />
        <li className="nav-title text-start">Theme</li>
        <SidebarNavItem label="Colors" href="/" icon="cil-drop" />
        <SidebarNavItem label="Prompts" href="/" icon="cil-pencil" />
        <li className="nav-title text-start">Components</li>
        
        <SidebarNavGroup label="Users" icon="cil-puzzle">
          <SidebarNavItem label="Accordion" href="/" icon="cil-accordion" />
          <SidebarNavItem label="Breadcrumb" href="/" icon="cil-breadcrumb" />
          <SidebarNavItem label="Cards" href="/" icon="cil-cards" />
          <SidebarNavItem label="Carousel" href="/" icon="cil-carousel" />
          <SidebarNavItem label="Collapse" href="/" icon="cil-collapse" />
          <SidebarNavItem label="List group" href="/" icon="cil-list" />
          <SidebarNavItem label="Navs & Tabs" href="/" icon="cil-nav" />
          <SidebarNavItem label="Pagination" href="/" icon="cil-pagination" />
          <SidebarNavItem label="Placeholders" href="/" icon="cil-placeholder" />
          <SidebarNavItem label="Popovers" href="/" icon="cil-popover" />
          <SidebarNavItem label="Progress" href="/" icon="cil-progress" />
          <SidebarNavItem label="Spinners" href="/" icon="cil-spinner" />
          <SidebarNavItem label="Tables" href="/" icon="cil-table" />
          <SidebarNavItem label="Tooltips" href="/" icon="cil-tooltip" />
        </SidebarNavGroup>

        <SidebarNavGroup label="Profile" icon="cil-cursor">
          <SidebarNavItem label="Buttons" href="/" icon="cil-button" />
          <SidebarNavItem label="Button Group" href="/" icon="cil-button-group" />
          <SidebarNavItem label="Dropdowns" href="/" icon="cil-dropdown" />
        </SidebarNavGroup>

        <SidebarNavItem label="Settings" href="/" icon="cil-chart-pie" />
        
        <SidebarNavGroup label="Generated Image" icon="cil-notes">
          <SidebarNavItem label="Form Control" href="/" icon="cil-form-control" />
          <SidebarNavItem label="Select" href="/" icon="cil-select" />
          <SidebarNavItem label="Checks and radios" href="/" icon="cil-check" />
          <SidebarNavItem label="Range" href="/" icon="cil-range" />
        </SidebarNavGroup>
      </ul>
    </div>
  );
};

export default Sidebar;