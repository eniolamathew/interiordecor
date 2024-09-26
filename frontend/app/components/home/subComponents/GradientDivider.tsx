"use client"
import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  position: relative;
  height: 5px;
  box-shadow: 1px 1px 30px 1px rgba(129, 218, 66, 0.9);
`;

const Gradient = styled.div`
  height: 5px;
  background: linear-gradient(
    90deg,
    #fe3600 0%,
    #ff7b02 16%,
    #fad220 34%,
    #81da42 58%,
    #318eff 81%,
    #8b68e8 100%
  );
  filter: blur(4px);
  position: absolute;
  z-index: 5;
`;

const GradientDivider: React.FC = () => {
  return (
    <Divider>
      <Gradient />
    </Divider>
  );
};

export default GradientDivider;
