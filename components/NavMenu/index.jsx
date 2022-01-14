import React from "react";
import "./NavMenu.css";

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

function NavMenu(props) {

  const {mode, setMode} = props

  console.log('nav mode', mode);

  if (mode=="dark") {
    return (
      <div className="nav-menu oxanium-medium-celeste-18px">
        <div className="nav-menu-dark nav-docs valign-text-middle">
        <a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="nav-menu-dark">Docs</a>
        </div>
        <div className="nav-menu-dark nav-twitter valign-text-middle">
        <a href="https://twitter.com/FluidNFT_" target="_blank" className="nav-menu-dark">Twitter</a>
        </div>
        <div className="nav-menu-dark nav-discord valign-text-middle">
          <a href="https://discord.gg/2N5wVwsRAe" target="_blank" className="nav-menu-dark">Discord</a>
        </div>
        <div className="nav-menu-dark nav-contact valign-text-middle">
          <a onClick={() => scroll.scrollToBottom()} className="nav-menu-dark">Contact</a>
        </div>
        <img onClick={()=>setMode("light")} className="nav-menu-dark nav-light-mode" src="/img/experimental---sun-2@2x.png" />
      </div>
    );
  } else {
    return (
      <div className="nav-menu oxanium-medium-eerie-18px">
        <div className="nav-menu-light nav-docs valign-text-middle">
        <a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="nav-menu-light">Docs</a>
        </div>
        <div className="nav-menu-light nav-twitter valign-text-middle">
        <a href="https://twitter.com/FluidNFT_" target="_blank" className="nav-menu-light">Twitter</a>
        </div>
        <div className="nav-menu-light nav-discord valign-text-middle">
          <a href="https://discord.gg/2N5wVwsRAe" target="_blank" className="nav-menu-light">Discord</a>
        </div>
        <div className="nav-menu-light nav-contact valign-text-middle">
          <a onClick={() => scroll.scrollToBottom()} className="nav-menu-light">Contact</a>
        </div>
        <img onClick={()=>setMode("dark")} className="nav-menu-light nav-light-mode" src="/img/experimental---moon@2x.png" />
      </div>
    );
  }
}

export default NavMenu;
