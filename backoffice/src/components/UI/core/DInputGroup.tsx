import React from 'react';
import styled from 'styled-components';

interface DInputGroupProps {
  children: React.ReactNode;
  className?: string; 
  groupStyle?: React.CSSProperties; 
  wrapperStyle?: React.CSSProperties; 
}

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroupWrapper = styled.div`
  position: relative;
`;
  
const DInputGroup: React.FC<DInputGroupProps> = ({ children, className, groupStyle, wrapperStyle }) => {
  return (
    <InputGroup className={`d-input-group ${className ? className : ''}`} style={groupStyle}>      
      <InputGroupWrapper className="d-input-group__input-wrapper" style={wrapperStyle}>
        {children} 
      </InputGroupWrapper>
    </InputGroup>
  );
};

export default DInputGroup;