import React from "react";

import GloveStatus from "@components/GloveStatus";
import Navbar from "@components/Navbar";

import * as S from "./styled.medium";

const SidebarMedium = () => {
  return (
    <S.SidebarMedium>
      <GloveStatus.Medium />
      <Navbar.Medium />
    </S.SidebarMedium>
  );
};

export default SidebarMedium;
