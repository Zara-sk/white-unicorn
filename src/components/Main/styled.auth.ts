import styled from "styled-components";

export const MainAuth = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: drag;
`;

export const LogoWrapper = styled.div`
  height: 110px;
  padding-top: 10px;
  padding-left: 30px;
`;
export const Image = styled.img`
  width: 110px;
  -webkit-app-region: drag;
`;

export const ErrorText = styled.p`
  width: 200px;
  height: 30px;
  text-align: center;
  color: ${({ theme }) => theme.palette.colors.darkRed};
`;

export const VersionInfoText = styled.p`
  color: ${({ theme }) => theme.palette.text.phonetic};
  margin-bottom: 10px;
  -webkit-app-region: drag;
`;
