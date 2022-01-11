import React from "react";
import "./MobileOverlay.css";

function MobileOverlay(props) {
  const { overlayClose, navLightMode, overlayNav } = props;

  return (
    <div className="mobile-overlay screen">
      <img className="overlay-close" src={overlayClose} />
      <img className="nav-light-mode-2" src={navLightMode} />
      <div className="overlay-nav valign-text-middle oxanium-medium-white-18px">{overlayNav}</div>
    </div>
  );
}

export default MobileOverlay;
