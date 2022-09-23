import React from "react";

import GloveStatus from "@components/GloveStatus";
import Navbar from "@components/Navbar";
import DownloadsPage from "@components/Pages/Downloads";

import NavLink from "@generic/NavLink";

import * as S from "./styled.small";

const SidebarSmall = () => {
  return (
    <S.SidebarSmall>
      <GloveStatus.Small />
      <Navbar.Small />
      <NavLink.Small page={DownloadsPage}></NavLink.Small>
    </S.SidebarSmall>
  );
};

export default SidebarSmall;
