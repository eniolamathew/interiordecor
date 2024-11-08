import React from 'react';

interface DLabelProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;  // Correct type for children
}

const DLabel: React.FC<DLabelProps> = ({ id, className, style, children }) => {
  return (
    children ? (
      <span id={id} className={`${className ? className : ''}`} style={style}>
        {children}  
      </span>
    ) : null
  );
};

export default DLabel;