import React from "react";

import { useAppSelector } from "@hooks/redux";
import { WindowSizes } from "../../types/window";

const Sidebar = () => {
  const sizing = useAppSelector((state) => state.window.sizing);

  console.log(sizing);
  return sizing & WindowSizes.SMALL ? (
    <div>small</div>
  ) : (
    <div>medium or large</div>
  );
};

export default Sidebar;
