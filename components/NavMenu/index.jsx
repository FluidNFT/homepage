import React from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="nav-menu oxanium-medium-celeste-18px">
      <div className="nav-docs valign-text-middle">Docs</div>
      <div className="nav-twitter valign-text-middle">Twitter</div>
      <div className="nav-discord valign-text-middle">Discord</div>
      <div className="nav-contact valign-text-middle">Contact</div>
      <img className="nav-light-mode" src="/img/experimental---sun-2@2x.png" />
    </div>
  );
}

export default NavMenu;
