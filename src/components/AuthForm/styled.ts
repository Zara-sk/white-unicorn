import styled from "styled-components";

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
    & + label {
      color: ${({ theme }) => theme.palette.colors.cyan};
    }
  }
  &:disabled {
    cursor: default;
    border: solid 2px ${({ theme }) => theme.palette.text.third};
    color: ${({ theme }) => theme.palette.text.secondary};
    & + label {
      color: ${({ theme }) => theme.palette.text.secondary};
    }
  }
  &::selection {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

export const PasswordInput = styled(Input)`
  letter-spacing: 3px;
`;

export const SubmitInput = styled(Input)`
  background-color: ${({ theme }) => theme.palette.text.main};
  color: ${({ theme }) => theme.palette.background.third};
  height: 45px;
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

export const Label = styled.label`
  position: absolute;
  background-color: ${({ theme }) => theme.palette.background.phonetic};
  padding: 0 6px;
  transition: all ${({ theme }) => theme.durations.medium};

  &.email {
    top: 192px;
  }
  &.password {
    top: 254px;
  }
`;
