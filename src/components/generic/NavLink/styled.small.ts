import styled from "styled-components";

import { NavLink } from "react-router-dom";

const SmallNavLink = styled(NavLink)`
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  border-radius: 8px;
  transition: ${({ theme }) => theme.durations.default};
  &.active {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;
export { SmallNavLink };
