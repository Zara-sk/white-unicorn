import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@hooks/redux";
import Chrome from "@components/Chrome";

function App() {
  const theme = useAppSelector((state) => state.window.theme);
  const state = useAppSelector((state) => state);

  console.log(state);

  return (
    <ThemeProvider theme={theme}>
      <Chrome />
    </ThemeProvider>
  );
}

export default App;
