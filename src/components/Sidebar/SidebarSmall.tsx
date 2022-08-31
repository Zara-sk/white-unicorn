import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styled.small";

const SidebarSmall = () => {
  return (
    <S.SidebarSmall>
      <NavLink to="/library">lib</NavLink>
      <NavLink to="/debug">debug</NavLink>
    </S.SidebarSmall>
  );
};

export default SidebarSmall;
