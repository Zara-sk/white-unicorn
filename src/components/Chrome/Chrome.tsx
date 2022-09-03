import React, { useState } from "react";

import { WinService } from "@services";
import { useActions, useAppSelector } from "@hooks/redux";
import MinimizeIcon from "@components/assets/MinimizeIcon";
import MaximizeIcon from "@components/assets/MaximizeIcon";
import UnmaximizeIcon from "@components/assets/UnmaximizeIcon";
import CloseIcon from "@components/assets/CloseIcon";

import * as S from "./styled";

const Chrome = () => {
  const [closeHover, setCloseHover] = useState(false);
  const isMaximized = useAppSelector((state) => state.window.isMaximized);

  return (
    <S.Chrome>
      <S.Logo />
      <S.Title>Unicorn Client</S.Title>
      <S.ButtonArea>
        <S.MinimizeButton
          onClick={WinService.minimizeWindow}
          children={<MinimizeIcon />}
        />
        <S.MaximizeButton
          onClick={WinService.toggleMaximizeWindow}
          children={isMaximized ? <UnmaximizeIcon /> : <MaximizeIcon />}
        />
        <S.CloseButton
          onClick={WinService.closeWindow}
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          children={<CloseIcon isHovered={closeHover} />}
        />
      </S.ButtonArea>
    </S.Chrome>
  );
};

export default Chrome;
