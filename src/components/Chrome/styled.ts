import styled from "styled-components";

const Chrome = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.background.third};
  color: ${({ theme }) => theme.palette.text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.third};
  -webkit-app-region: drag;
`;

const Logo = styled.div`
  -webkit-app-region: drag;
`;

const Title = styled.p`
  -webkit-app-region: drag;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  -webkit-app-region: no-drag;
`;

const _button = styled.button`
  width: 45px;
  height: 30px;
  background-color: ${({ theme }) => theme.palette.background.third};
  border: none;
  display: flex;
  align-items: center;
  width: center;
  transition: ${({ theme }) => theme.durations.small};
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.secondary};
  }
`;

const MinimizeButton = styled(_button)``;

const MaximizeButton = styled(_button)``;

const CloseButton = styled(_button)`
  &:hover {
    background-color: ${({ theme }) => theme.palette.colors.darkRed};
  }
`;

export {
  Chrome,
  Logo,
  Title,
  ButtonArea,
  MinimizeButton,
  MaximizeButton,
  CloseButton,
};
