import React from "react";
import NavMenu from "../NavMenu";
import "./Tablet.css";

function Tablet(props) {
  const {
    logoDarkMode,
    sectionOneTitle,
    sectionOneText,
    overlapGroup4,
    actionText,
    sectionTwoTitle,
    sectionTwoText,
    sectionThreeTitle,
    spanText,
    spanText2,
    sectionFourText,
    spanText3,
    spanText4,
    sectionFiveText,
    spanText5,
    spanText6,
    sectionSixText,
    sectionSevenTitle,
    spanText7,
    spanText8,
    spanText9,
    footerNav,
    copyrightNotice,
    subscribeButtonText,
    overlapGroup1,
    subscribeInputText,
    logoDarkMode2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet screen">
        <div className="section-one-1">
          <div className="overlap-group3-1">
            <img className="logo-dark-mode-2" src={logoDarkMode} />
            <div className="navigation-1">
              <NavMenu />
            </div>
          </div>
          <div className="section-one-title-1 valign-text-middle oxanium-bold-white-56px">{sectionOneTitle}</div>
          <div className="section-one-text-1 valign-text-middle oxanium-medium-celeste-32px">{sectionOneText}</div>
          <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="overlap-group-2">
              <div className="action-text-1 valign-text-middle oxanium-medium-white-32px">{actionText}</div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <img className="section-two-title-1" src={sectionTwoTitle} />
          <div className="section-two-text-1 valign-text-middle oxanium-medium-white-36px">{sectionTwoText}</div>
        </div>
        <div className="section-three-1">
          <img className="section-three-title-1" src={sectionThreeTitle} />
        </div>
        <div className="section-3">
          <div className="section-4 valign-text-middle oxanium-normal-electric-violet-36px">
            <span>
              <span className="oxanium-normal-electric-violet-36px">{spanText}</span>
              <span className="oxanium-bold-electric-violet-48px">{spanText2}</span>
            </span>
          </div>
          <div className="section-5 valign-text-middle oxanium-medium-white-32px">{sectionFourText}</div>
        </div>
        <div className="section-3">
          <div className="section-five-title-1 valign-text-middle oxanium-normal-heat-wave-36px">
            <span>
              <span className="oxanium-normal-heat-wave-36px">{spanText3}</span>
              <span className="oxanium-bold-heat-wave-48px">{spanText4}</span>
            </span>
          </div>
          <div className="section-five-text-1 valign-text-middle oxanium-medium-white-32px">{sectionFiveText}</div>
        </div>
        <div className="section-3">
          <div className="section-4 valign-text-middle oxanium-normal-royal-heath-36px">
            <span>
              <span className="oxanium-normal-royal-heath-36px">{spanText5}</span>
              <span className="oxanium-bold-royal-heath-48px">{spanText6}</span>
            </span>
          </div>
          <div className="section-5 valign-text-middle oxanium-medium-white-32px">{sectionSixText}</div>
        </div>
        <div className="section-3">
          <img className="section-seven-title-1" src={sectionSevenTitle} />
          <div className="section-seven-text-1 valign-text-middle oxanium-medium-white-36px-2">
            <span>
              <span className="oxanium-medium-white-36px">{spanText7}</span>
              <span className="span1-1 oxanium-medium-heat-wave-36px">{spanText8}</span>
              <span className="oxanium-medium-white-36px">{spanText9}</span>
            </span>
          </div>
          <div className="footer-1">
            <div className="overlap-group2-1">
              <div className="footer-nav-1 valign-text-middle oxanium-medium-white-32px">{footerNav}</div>
              <div className="copyright-notice-1 valign-text-middle oxanium-medium-white-18px">{copyrightNotice}</div>
            </div>
            <div className="overlap-group-3">
              <img className="subscribe-button-text-1" src={subscribeButtonText} />
            </div>
            <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="subscribe-input-text-1 valign-text-middle">{subscribeInputText}</div>
            </div>
            <img className="logo-dark-mode-3" src={logoDarkMode2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablet;
