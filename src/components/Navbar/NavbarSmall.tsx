import React from "react";
import { NavLink } from "react-router-dom";

import IPage from "../../types/page";
import { IconSizes } from "../../types/icon";

import { Pages } from "@components/Pages";

import * as S from "./styled.small";

const NavbarSmall = () => {
  return (
    <S.SmallNavbar>
      {Pages.map((page: IPage) => (
        <NavLink to={page.path}>{page.title}</NavLink>
      ))}
    </S.SmallNavbar>
  );
};

export default NavbarSmall;
