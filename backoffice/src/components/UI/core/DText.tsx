import React from 'react';

interface DTextProps {
    id?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const DText: React.FC<DTextProps> = ({id, children, className, style }) => {
  return (
      <div id={id} className={`${className ? className : ''}`} style={style}>
        {children}
      </div>
  );
};

export default DText;