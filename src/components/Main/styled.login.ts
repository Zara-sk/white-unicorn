import styled from "styled-components";

export const MainLogin = styled.div`
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  -webkit-app-region: drag;
`;

export const Input = styled.input`
  width: 220px;
  height: 45px;
  background-color: inherit;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  text-align: center;
  border: solid 2px ${({ theme }) => theme.palette.text.main};
  transition: all ${({ theme }) => theme.durations.medium};

  &:focus {
    border: solid 2px ${({ theme }) => theme.palette.colors.cyan};
  }
  &:disabled {
    cursor: default;
    border: solid 2px ${({ theme }) => theme.palette.text.third};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const PasswordInput = styled(Input)`
  letter-spacing: 3px;
`;

export const SubmitInput = styled(Input)`
  background-color: ${({ theme }) => theme.palette.text.main};
  color: ${({ theme }) => theme.palette.background.third};
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:focus {
    border: solid 2px ${({ theme }) => theme.palette.text.main};
  }
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.text.third};
    border: solid 2px ${({ theme }) => theme.palette.text.third};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const VersionInfoText = styled.p`
  color: ${({ theme }) => theme.palette.text.phonetic};
  margin-bottom: 10px;
  -webkit-app-region: drag;
`;
