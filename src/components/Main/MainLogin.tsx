import React from "react";

import * as S from "./styled.login";

const MainLogin = () => {
  return (
    <S.MainLogin>
      <p>Logo</p>
      <S.Form>
        <input />
        <input />
        <input type="submit" value={"Войти"} />
      </S.Form>
      <p>message</p>
    </S.MainLogin>
  );
};

export default MainLogin;
