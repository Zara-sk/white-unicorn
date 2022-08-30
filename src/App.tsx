import { ThemeProvider } from "styled-components";

import { useAppSelector } from "@hooks/redux";
import Chrome from "@components/Chrome";
import Sidebar from "@components/Sidebar";

function App() {
  const theme = useAppSelector((state) => state.window.theme);

  return (
    <ThemeProvider theme={theme}>
      <Chrome />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
