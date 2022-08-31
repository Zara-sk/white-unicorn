import React from "react";

import { useAppSelector } from "@hooks/redux";
import { WindowSizes } from "../../types/window";

import SidebarSmall from "./SidebarSmall";
import SidebarMedium from "./SidebarMedium";

const Sidebar = () => {
  const sizing = useAppSelector((state) => state.window.sizing);

  return sizing & WindowSizes.SMALL ? <SidebarSmall /> : <SidebarMedium />;
};

export default Sidebar;
