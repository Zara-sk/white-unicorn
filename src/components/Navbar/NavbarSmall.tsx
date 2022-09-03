import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to={page.path}>
          {<page.icon size={IconSizes.MEDIUM} theme={theme} />}
        </NavLink>
      ))}
    </S.SmallNavbar>
  );
};

export default NavbarSmall;
