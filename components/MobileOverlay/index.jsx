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
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">Docs</div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">Twitter</div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-18px nav-dark">Discord</div>
      </div>
    );
  } else {
    return (
      <div className="mobile-overlay-light screen">
        {/* <img className="overlay-close" src={overlayClose} /> */}
        <img onClick={() => setMode("dark")} className="nav-light-mode-2 nav-light" src={navDarkMode} />
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">Docs</div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">Twitter</div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-18px nav-light">Discord</div>
      </div>
    );    
  }


}

export default MobileOverlay;
