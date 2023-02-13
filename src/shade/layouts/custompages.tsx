import React from "react";
import { Outlet } from "react-router-dom";
import Custompagesswitcher from "../../components/Pages/Switcher/custompagesswitcher/custompagesswitcher";

export default function Custompages() {

  document.querySelector("body")?.classList.add("error-page1", "bg-primary","ltr","light-theme")
  document
    .querySelector("body")
    ?.classList.remove( "main-body", "app", "sidebar-mini");
  return (
    <React.Fragment>
            <Custompagesswitcher />
            <Outlet />
    </React.Fragment>
  );
}
