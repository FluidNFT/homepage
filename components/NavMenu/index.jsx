import React from "react";
import "./NavMenu.css";

function NavMenu(props) {

  const {mode, setMode} = props

  console.log('nav mode', mode);

  if (mode=="dark") {
    return (
      <div className="nav-menu oxanium-medium-celeste-18px">
        <div className="nav-menu-dark nav-docs valign-text-middle">Docs</div>
        <div className="nav-menu-dark nav-twitter valign-text-middle">Twitter</div>
        <div className="nav-menu-dark nav-discord valign-text-middle">Discord</div>
        <div className="nav-menu-dark nav-contact valign-text-middle">Contact</div>
        <img onClick={()=>setMode("light")} className="nav-menu-dark nav-light-mode" src="/img/experimental---sun-2@2x.png" />
      </div>
    );
  } else {
    return (
      <div className="nav-menu oxanium-medium-eerie-18px">
        <div className="nav-menu-light nav-docs valign-text-middle">Docs</div>
        <div className="nav-menu-light nav-twitter valign-text-middle">Twitter</div>
        <div className="nav-menu-light nav-discord valign-text-middle">Discord</div>
        <div className="nav-menu-light nav-contact valign-text-middle">Contact</div>
        <img onClick={()=>setMode("dark")} className="nav-menu-dark nav-light-mode" src="/img/experimental---sun-2@2x.png" />
      </div>
    );
  }
}

export default NavMenu;
