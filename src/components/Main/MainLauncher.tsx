import React from "react";

import Sidebar from "@components/Sidebar";
import PagesEntry from "@components/Pages";

import * as S from "./styled.launcher";

const MainLauncher = () => {
  return (
    <S.MainLauncher>
      <Sidebar />
      <PagesEntry />
    </S.MainLauncher>
  );
};

export default MainLauncher;
