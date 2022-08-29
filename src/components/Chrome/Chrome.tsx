import React, { useState } from "react";

import * as S from "./styled";

import MinimizeIcon from "@components/assets/MinimizeIcon";
import MaximizeIcon from "@components/assets/MaximizeIcon";
import UnmaximizeIcon from "@components/assets/UnmaximizeIcon";
import CloseIcon from "@components/assets/CloseIcon";

const Chrome = () => {
  const [closeHover, setCloseHover] = useState(false);

  const toggleCloseHover = () => setCloseHover(!closeHover);
  return (
    <S.Chrome>
      <S.Logo />
      <S.Title>Unicorn Client</S.Title>
      <S.ButtonArea>
        <S.MinimizeButton children={<MinimizeIcon />} />
        <S.MaximizeButton children={<MaximizeIcon />} />
        <S.CloseButton
          onMouseEnter={toggleCloseHover}
          onMouseLeave={toggleCloseHover}
          children={
            <CloseIcon fillColor={closeHover ? "#a1a1a1" : "#f8f8f8"} />
          }
        />
      </S.ButtonArea>
    </S.Chrome>
  );
};

export default Chrome;
