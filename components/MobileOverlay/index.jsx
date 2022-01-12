import React, { useEffect } from "react";
import "./MobileOverlay.css";

function MobileOverlay(props) {
  const { overlayClose, navLightMode, navDarkMode, overlayNav, mode, setMode } = props;

  console.log('navDarkMode', navDarkMode);
  console.log('navLightMode', navLightMode);

  if (mode=="dark") {
    return (
      <div className="mobile-overlay screen">
        {/* <img className="overlay-close" src={overlayClose} /> */}
        <img onClick={() => setMode("light")} className="nav-light-mode-2 nav-dark" src={navLightMode} />
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">
          <a href="#contact" className="nav-dark">Docs</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">
          <a href="#contact" className="nav-dark">Twitter</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">
          <a href="#contact" className="nav-dark">Discord</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mobile-overlay-light screen">
        {/* <img className="overlay-close" src={overlayClose} /> */}
        <img onClick={() => setMode("dark")} className="nav-light-mode-2 nav-light" src={navDarkMode} />
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">
          <a href="#contact_" className="nav-light">Docs</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">
          <a href="#contact_" className="nav-light">Twitter</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">
          <a href="#contact_" className="nav-light">Discord</a>
        </div>
      </div>
    );    
  }


}

export default MobileOverlay;
