import React from "react";

import GloveStatus from "@components/GloveStatus";
import Navbar from "@components/Navbar";

import * as S from "./styled.small";

const SidebarSmall = () => {
  return (
    <S.SidebarSmall>
      <GloveStatus.Small />
      <Navbar.Small />
    </S.SidebarSmall>
  );
};

export default SidebarSmall;
