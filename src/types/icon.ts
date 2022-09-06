import { DefaultTheme } from "styled-components";

enum IconSizes {
  SMALL = "35px",
  MEDIUM = "40px",
  NONE = "set-by-itself",
}

type IconProps = {
  size: IconSizes;
  theme: DefaultTheme;
};

export { IconSizes, type IconProps };
