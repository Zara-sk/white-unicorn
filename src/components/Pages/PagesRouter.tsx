import React from "react";
import { Route, Routes } from "react-router-dom";

import LibraryPage from "./Library";
import DebugPage from "./Debug";
import ProfilePage from "./Profile";
import SettingsPage from "./Settings";
import DownloadsPage from "./Downloads";

import * as S from "./styled";

const PagesRouter = () => {
  return (
    <S.PagesRouter>
      <Routes>
        <Route
          key={ProfilePage.path}
          path={ProfilePage.path}
          element={<ProfilePage.component />}
        />
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
        <Route
          key={SettingsPage.path}
          path={SettingsPage.path}
          element={<SettingsPage.component />}
        />
        <Route
          key={DownloadsPage.path}
          path={DownloadsPage.path}
          element={<DownloadsPage.component />}
        />
      </Routes>
    </S.PagesRouter>
  );
};

export default PagesRouter;
