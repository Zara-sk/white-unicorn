import React, { useState } from "react";

import logoPath from "@src/assets/image/white-unicorn.png";

import AuthForm from "@components/AuthForm";

import * as S from "./styled.auth";

const MainAuth = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <S.MainAuth>
      <S.LogoWrapper>
        <S.Image src={logoPath}></S.Image>
      </S.LogoWrapper>
      <AuthForm setMessage={setMessage} />
      <S.ErrorText>{message}</S.ErrorText>
      <S.VersionInfoText>white unicorn v 0.1.0</S.VersionInfoText>
    </S.MainAuth>
  );
};

export default MainAuth;
