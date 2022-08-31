import React from "react";
import { Route, Routes } from "react-router-dom";

import LibraryPage from "./Library";
import DebugPage from "./Debug";

import * as S from "./styled";

const PagesRouter = () => {
  return (
    <S.PagesRouter>
      <Routes>
        <Route
          key={LibraryPage.path}
          path={LibraryPage.path}
          element={<LibraryPage.component />}
        />
        <Route
          key={DebugPage.path}
          path={DebugPage.path}
          element={<DebugPage.component />}
        />
      </Routes>
    </S.PagesRouter>
  );
};

export default PagesRouter;
