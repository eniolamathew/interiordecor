"use client"
import React from 'react'

const IconContainer = () => {
  return (
    <div>IconContainer</div>
  )
}

export default IconContainer

// "use client";
// import React from "react";
// import styled from "styled-components";
// import { NavIcon } from "./icon/navIcon";
// import Icon, { IconType } from "./icon";

// interface IconContainerProps {
//   icon?: boolean;
//   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// }

// const IconContainerWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
// `;

// const IconContainer: React.FC<IconContainerProps> = ({icon, onClick}) => {
//   return (
//     <IconContainerWrapper>
//       <NavIcon onClick={onClick}>
//         {icon && <Icon
//           className="user"
//           src={IconType.User}
//           alt="user-regular"
//           width={24}
//           height={24}
//           filter={"invert(100%) brightness(100%) contrast(100%)"}
//         />}
//       </NavIcon>
//     </IconContainerWrapper>
//   );
// };

// export default IconContainer;