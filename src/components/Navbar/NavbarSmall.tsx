import React from "react";

import IPage from "../../types/page";

import { Pages } from "@components/Pages";

import NavLink from "@generic/NavLink";

import * as S from "./styled.small";

const NavbarSmall = () => {
  return (
    <S.SmallNavbar>
      {Pages.map((page: IPage) => (
        <NavLink.Small page={page}></NavLink.Small>
      ))}
    </S.SmallNavbar>
  );
};

export default NavbarSmall;
