import React, { useEffect } from "react";
import "./MobileOrTabletOverlay.css";

function MobileOrTabletOverlay(props) {
  const { overlayClose, navLightMode, navDarkMode, overlayNav, mode, setMode } = props;

  console.log('navDarkMode', navDarkMode);
  console.log('navLightMode', navLightMode);

  if (mode=="dark") {
    return (
      <div className="mobile-overlay screen">
        {/* <img className="overlay-close" src={overlayClose} /> */}
        <img onClick={() => setMode("light")} className="nav-light-mode-2 nav-dark" src={navLightMode} />
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-48px nav-dark">
          <a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="nav-dark">Docs</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-48px nav-dark">
          <a href="https://twitter.com/FluidNFT_" target="_blank" className="nav-dark">Twitter</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-celeste-48px nav-dark">
          <a href="https://discord.gg/2N5wVwsRAe" target="_blank" className="nav-dark">Discord</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mobile-overlay-light screen">
        {/* <img className="overlay-close" src={overlayClose} /> */}
        <img onClick={() => setMode("dark")} className="nav-light-mode-2 nav-light" src={navDarkMode} />
        <div className="overlay-nav valign-text-middle oxanium-medium-black-48px nav-light">
          <a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="nav-light">Docs</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-48px nav-light">
          <a href="https://twitter.com/FluidNFT_" target="_blank" className="nav-light">Twitter</a>
        </div>
        <div className="overlay-nav valign-text-middle oxanium-medium-black-48px nav-light">
          <a href="https://discord.gg/2N5wVwsRAe" target="_blank" className="nav-light">Discord</a>
        </div>
      </div>
    );    
  }


}

export default MobileOrTabletOverlay;
