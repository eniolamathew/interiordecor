import React from 'react';

interface CardHeaderProps {
  title: string;
  dateRange: string;
  options: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, dateRange, options }) => {
  return (
    <div className="d-flex justify-content-between overflow-hidden">
      <div className="d-flex flex-column flex-shrink-1">
        <h4 className="card-title mb-0 text-truncate">{title}</h4>
        <div className="small text-body-secondary text-truncate">{dateRange}</div>
      </div>
      <div 
        className="btn-toolbar d-none d-md-block flex-shrink-0" 
        role="toolbar" 
        aria-label="Toolbar with buttons"
      >
        {options}
      </div>
    </div>
  );
};

export default CardHeader;