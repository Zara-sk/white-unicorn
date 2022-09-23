import React from "react";

import { useTheme } from "styled-components";

import IPage from "../../../types/page";
import { IconSizes } from "../../../types/icon";

import * as S from "./styled.small";

interface NavLinkProps {
  page: IPage;
}

const SmallNavLink: React.FC<NavLinkProps> = ({ page }): JSX.Element => {
  const theme = useTheme();

  return (
    <S.SmallNavLink to={page.path}>
      <page.icon size={IconSizes.MEDIUM} theme={theme} />
    </S.SmallNavLink>
  );
};

export default SmallNavLink;
