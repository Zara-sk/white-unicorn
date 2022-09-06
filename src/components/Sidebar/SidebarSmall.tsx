import React from "react";

import { IconSizes } from "../../types/icon";

import GloveStatus from "@components/GloveStatus";
import Navbar from "@components/Navbar";
import DownloadsPage from "@components/Pages/Downloads";

import * as S from "./styled.small";
import { useTheme } from "styled-components";

const SidebarSmall = () => {
  const theme = useTheme();

  return (
    <S.SidebarSmall>
      <GloveStatus.Small />
      <Navbar.Small />
      <S.SmallNavLink to={DownloadsPage.path}>
        <DownloadsPage.icon size={IconSizes.MEDIUM} theme={theme} />
      </S.SmallNavLink>
    </S.SidebarSmall>
  );
};

export default SidebarSmall;
