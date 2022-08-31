import styled from "styled-components";

const SidebarMedium = styled.div`
  height: 100%;
  width: 240px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.palette.text.third};
  flex: none;
`;

export { SidebarMedium };
