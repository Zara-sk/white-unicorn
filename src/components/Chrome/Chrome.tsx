import React, { useState } from "react";

import { WinApi } from "@api";
import { useActions, useAppSelector } from "@hooks/redux";
import MinimizeIcon from "@components/assets/MinimizeIcon";
import MaximizeIcon from "@components/assets/MaximizeIcon";
import UnmaximizeIcon from "@components/assets/UnmaximizeIcon";
import CloseIcon from "@components/assets/CloseIcon";

import * as S from "./styled";

const Chrome = () => {
  const [closeHover, setCloseHover] = useState(false);
  const isMaximized = useAppSelector((state) => state.window.isMaximized);

  const minimizeWindow = () => {
    WinApi.minimizeWindow();
  };

  const toggleMaximizeWindow = () => {
    WinApi.toggleMaximizeWindow();
  };
  return (
    <S.Chrome>
      <S.Logo />
      <S.Title>Unicorn Client</S.Title>
      <S.ButtonArea>
        <S.MinimizeButton
          onClick={minimizeWindow}
          children={<MinimizeIcon />}
        />
        <S.MaximizeButton
          onClick={toggleMaximizeWindow}
          children={isMaximized ? <UnmaximizeIcon /> : <MaximizeIcon />}
        />
        <S.CloseButton
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          children={<CloseIcon isHovered={closeHover} />}
        />
      </S.ButtonArea>
    </S.Chrome>
  );
};

export default Chrome;
