import styled from "styled-components";

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

export { SidebarSmall };
