import { DefaultTheme } from "styled-components";

enum IconSizes {
  SMALL = "",
  MEDIUM = "",
  NONE = "set-by-itself",
}

type IconProps = {
  size: IconSizes;
  theme: DefaultTheme;
};

export { IconSizes, type IconProps };
