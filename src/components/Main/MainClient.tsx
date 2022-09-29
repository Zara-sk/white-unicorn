import React from "react";

import Sidebar from "@components/Sidebar";
import PagesEntry from "@components/Pages";

import * as S from "./styled.client";

const MainClient = () => {
  return (
    <S.MainClient>
      <Sidebar />
      <PagesEntry />
    </S.MainClient>
  );
};

export default MainClient;
