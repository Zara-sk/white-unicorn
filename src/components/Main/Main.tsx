import React from "react";

import Sidebar from "@components/Sidebar";
import PagesEntry from "@components/Pages";

import * as S from "./styled";

const Main = () => {
  return (
    <S.Main>
      <Sidebar />
      <PagesEntry />
    </S.Main>
  );
};

export default Main;
