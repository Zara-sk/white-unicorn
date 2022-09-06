import React from "react";

import IPage from "../../types/page";
import { IconSizes } from "../../types/icon";

import { Pages } from "@components/Pages";

import * as S from "./styled.small";
import { useTheme } from "styled-components";

const NavbarSmall = () => {
  const theme = useTheme();

  return (
    <S.SmallNavbar>
      {Pages.map((page: IPage) => (
        <S.SmallNavLink to={page.path}>
          <page.icon size={IconSizes.MEDIUM} theme={theme} />
        </S.SmallNavLink>
      ))}
    </S.SmallNavbar>
  );
};

export default NavbarSmall;
