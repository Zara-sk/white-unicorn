import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  palette: {
    background: {
      main: "#444444",
      secondary: "#2d2d2d",
      third: "#0c0c0c",
      phonetic: "#1a1a1a",
    },
    text: {
      main: "#f8f8f8",
      secondary: "#a1a1a1",
      third: "#3D3D3D",
      phonetic: "#818181AA",
    },
    colors: {
      red: "",
      darkRed: "#d32424",
      green: "",
      lightGreen: "",
      blue: "",
      lightBlue: "",
      orange: "",
      yellow: "",
      purple: "",
      cyan: "#7dc4ae",
    },
  },
  durations: {
    default: "150ms",
    small: "150ms",
    medium: "250ms",
    large: "350ms",
  },
};
