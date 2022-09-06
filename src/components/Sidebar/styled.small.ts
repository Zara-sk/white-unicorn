import styled from "styled-components";

import { NavLink } from "react-router-dom";

const SidebarSmall = styled.div`
  height: 100%;
  width: 70px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.palette.text.third};
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
export { SidebarSmall, SmallNavLink };
