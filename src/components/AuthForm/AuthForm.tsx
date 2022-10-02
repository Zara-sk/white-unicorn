import React, { useRef, useState } from "react";

import { AuthService } from "@src/services";

import * as S from "./styled";

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

type Props = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const AuthForm: React.FC<Props> = ({ setMessage }) => {
  const [scenario, setScenario] = useState<IScenario>(IScenario.TYPING);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setScenario(IScenario.AWAITING);

    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    AuthService.authenticateUser({ email, password })
      .then((res) => {
        setScenario(IScenario.SUCCESS);
        window.api.auth.setAuthPreferences({
          email,
          password,
          token: res.token,
        });
        window.api.auth.launchClient();
      })
      .catch((statusCode: number) => {
        switch (statusCode) {
          case 400:
            setScenario(IScenario.ERROR);
            setMessage("Пользователь не найден");
            break;
          case 401:
            setScenario(IScenario.ERROR);
            setMessage("Неверный пароль");
            break;
          case 500:
            setScenario(IScenario.ERROR);
            setMessage("Отсутствует подключение");
            break;
        }
      });
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage("");

    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (email.length > 5 && password.length > 5) {
      setScenario(IScenario.READY);
    } else {
      setScenario(IScenario.TYPING);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        id="email"
        type="text"
        onChange={handleInput}
        ref={emailRef}
        disabled={scenario == IScenario.AWAITING}
      />
      <S.Label className="email" htmlFor="email">
        Логин
      </S.Label>
      <S.PasswordInput
        id="password"
        type="password"
        onChange={handleInput}
        ref={passwordRef}
        disabled={scenario == IScenario.AWAITING}
      />
      <S.Label className="password" htmlFor="password">
        Пароль
      </S.Label>
      <S.SubmitInput
        type="submit"
        value={SubmitValues[scenario]}
        disabled={scenario != IScenario.READY}
      />
    </S.Form>
  );
};

export default AuthForm;
