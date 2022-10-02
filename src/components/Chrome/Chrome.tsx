import React, { useState } from "react";

import { WinService } from "@services";
import { useActions, useAppSelector } from "@hooks/redux";

import MinimizeIcon from "@components/assets/MinimizeIcon";
import MaximizeIcon from "@components/assets/MaximizeIcon";
import UnmaximizeIcon from "@components/assets/UnmaximizeIcon";
import CloseIcon from "@components/assets/CloseIcon";

import * as S from "./styled";

interface IProps {
  logo?: boolean;
  title?: boolean;
  min?: boolean;
  max?: boolean;
  close?: boolean;
  color?: boolean;
}

const defaultProps: IProps = {
  logo: true,
  title: true,
  min: true,
  max: true,
  close: true,
  color: true,
};

const Chrome: React.FC<IProps> = (props) => {
  const [closeHover, setCloseHover] = useState(false);
  const isMaximized = useAppSelector((state) => state.window.isMaximized);

  const StyledChrome = props.color ? S.Chrome : S.UncolorizeChrome;

  return (
    <StyledChrome>
      {props.logo && <S.Logo />}
      {props.title && <S.Title>Unicorn Launcher</S.Title>}
      <S.ButtonArea>
        {props.min && (
          <S.MinimizeButton
            onClick={WinService.minimizeWindow}
            children={<MinimizeIcon />}
          />
        )}
        {props.max && (
          <S.MaximizeButton
            onClick={WinService.toggleMaximizeWindow}
            children={isMaximized ? <UnmaximizeIcon /> : <MaximizeIcon />}
          />
        )}
        {props.close && (
          <S.CloseButton
            onClick={WinService.closeWindow}
            onMouseEnter={() => setCloseHover(true)}
            onMouseLeave={() => setCloseHover(false)}
            children={<CloseIcon isHovered={closeHover} />}
          />
        )}
      </S.ButtonArea>
    </StyledChrome>
  );
};
Chrome.defaultProps = defaultProps;

export default Chrome;
