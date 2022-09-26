import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@hooks/redux";

import Chrome from "@components/Chrome";
import Main from "@components/Main";

function App() {
  const theme = useAppSelector((state) => state.window.theme);

  return (
    <ThemeProvider theme={theme}>
      <Chrome />
      <HashRouter>
        <Main />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
