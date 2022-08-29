import styled from "styled-components";

const Chrome = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0c0c0c;
  color: #a1a1a1;
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
  background-color: #0c0c0c;
  color: #a1a1a1;
  border: none;
  display: flex;
  align-items: center;
  width: center;
  transition: background-color 150ms, color 150ms;
  &:hover {
    background-color: #2d2d2d;
  }
`;

const MinimizeButton = styled(_button)``;

const MaximizeButton = styled(_button)``;

const CloseButton = styled(_button)`
  &:hover {
    background-color: #d32424;
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
