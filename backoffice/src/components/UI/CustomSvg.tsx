import React from 'react';

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  label: string;
}

const CustomSVG: React.FC<CustomSVGProps> = ({ label, children, className, width, height, ...rest }) => (
  <svg
    className={className}
    width={width}
    height={height}
    aria-label={label} 
    role="img" 
    {...rest}
  >
    {children}
  </svg>
);

export default CustomSVG;