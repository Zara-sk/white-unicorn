import React, { useRef, useState } from "react";

import * as S from "./styled.login";

import logoPath from "@src/assets/image/white-unicorn.png";

enum IScenario {
  TYPING = "TYPING",
  READY = "READY",
  AWAITING = "AWAITING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

const SubmitValues = {
  TYPING: "Войти",
  READY: "Войти",
  AWAITING: "Авторизация...",
  ERROR: "Ошибка!",
  SUCCESS: "Успешно!",
};

const MainLogin = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [scenario, setScenario] = useState<IScenario>(IScenario.TYPING);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScenario(IScenario.AWAITING);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (email.length > 5 && password.length > 5) {
      setScenario(IScenario.READY);
    } else {
      setScenario(IScenario.TYPING);
    }
  };

  return (
    <S.MainLogin>
      <S.LogoWrapper>
        <S.Image src={logoPath}></S.Image>
      </S.LogoWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          onChange={handleInput}
          ref={emailRef}
          disabled={scenario == IScenario.AWAITING}
        />
        <S.PasswordInput
          type="password"
          onChange={handleInput}
          ref={passwordRef}
          disabled={scenario == IScenario.AWAITING}
        />
        <S.SubmitInput
          type="submit"
          value={SubmitValues[scenario]}
          disabled={scenario != IScenario.READY}
        />
      </S.Form>
      <p></p>
      <S.VersionInfoText>white unicorn v 0.1.0</S.VersionInfoText>
    </S.MainLogin>
  );
};

export default MainLogin;
