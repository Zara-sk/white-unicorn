import "styled-components";

interface IPalette {
  main: string;
  secondary: string;
  third: string;
  phonetic: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      background: IPalette;
      text: IPalette;
      colors: {
        red: string;
        darkRed: string;
        green: string;
        lightGreen: string;
        blue: string;
        lightBlue: string;
        orange: string;
        yellow: string;
        purple: string;
        cyan: string;
      };
    };
    durations: {
      default: string;
      small: string;
      medium: string;
      large: string;
    };
  }
}
