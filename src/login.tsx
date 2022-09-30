import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@hooks/redux";

import Chrome from "@components/Chrome";
import Main from "@components/Main";

const Login = () => {
  const theme = useAppSelector((state) => state.window.theme);

  return (
    <ThemeProvider theme={theme}>
      <Chrome color={false} logo={true} min={false} max={false} title={false} />
      <Main.Login />
    </ThemeProvider>
  );
};

export default Login;
