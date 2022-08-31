import React from "react";

import { IconProps } from "./icon";

interface IPage {
  path: string;
  title: string;
  component: React.FC;
  icon: React.FC<IconProps>;
}

export default IPage;
