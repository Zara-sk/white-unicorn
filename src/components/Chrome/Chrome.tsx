import React, { useState } from "react";

import * as S from "./styled";

import MinimizeIcon from "@components/assets/MinimizeIcon";
import MaximizeIcon from "@components/assets/MaximizeIcon";
import UnmaximizeIcon from "@components/assets/UnmaximizeIcon";
import CloseIcon from "@components/assets/CloseIcon";

const Chrome = () => {
  const [closeHover, setCloseHover] = useState(false);

  return (
    <S.Chrome>
      <S.Logo />
      <S.Title>Unicorn Client</S.Title>
      <S.ButtonArea>
        <S.MinimizeButton children={<MinimizeIcon />} />
        <S.MaximizeButton children={<MaximizeIcon />} />
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
