import React from "react";
import "./MobileOrTablet.css";

function MobileOrTablet(props) {
  const {
    sectionSevenTitle,
    spanText1,
    spanText2,
    spanText3,
    overlapGroup,
    subscribeInputText,
    subscribeButtonText,
    logoDarkMode1,
    footerNav,
    copyrightNotice,
    spanText4,
    spanText5,
    sectionSixText,
    spanText6,
    spanText7,
    sectionFiveText,
    spanText8,
    spanText9,
    sectionFourText,
    sectionThreeTitle,
    sectionTwoTitle,
    sectionTwoText,
    logoDarkMode2,
    navMenu,
    sectionOneTitle,
    background,
    sectionOneText,
    actionText,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile screen">
        <div className="section-container">
          <div className="section-seven-1">
            <img className="section-seven-title-1" src={sectionSevenTitle} />
            <div className="section-seven-text-1 valign-text-middle">
              <span>
                <span className="oxanium-medium-white-78-1px">{spanText1}</span>
                <span className="span1-1">{spanText2}</span>
                <span className="oxanium-medium-white-78-1px">{spanText3}</span>
              </span>
            </div>
            <div className="footer-1">
              <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
                <div className="subscribe-input-text-1 valign-text-middle">{subscribeInputText}</div>
              </div>
              <div className="overlap-group1-1">
                <img className="subscribe-button-text-1" src={subscribeButtonText} />
              </div>
              <div className="flex-row">
                <img className="logo-dark-mode-2" src={logoDarkMode1} />
                <div className="footer-nav-1 valign-text-middle">{footerNav}</div>
              </div>
              <div className="copyright-notice-1 valign-text-middle">{copyrightNotice}</div>
            </div>
          </div>
          <div className="section-six">
            <div className="section-3 valign-text-middle oxanium-normal-electric-violet-82px">
              <span>
                <span className="span0">{spanText4}</span>
                <span className="span1-2">{spanText5}</span>
              </span>
            </div>
            <div className="section-six-text valign-text-middle oxanium-medium-white-82px">{sectionSixText}</div>
          </div>
          <div className="section-five">
            <div className="section-five-title-1 valign-text-middle oxanium-normal-electric-violet-82px">
              <span>
                <span className="span0-1">{spanText6}</span>
                <span className="span1-3">{spanText7}</span>
              </span>
            </div>
            <div className="section-five-text-1 valign-text-middle oxanium-medium-white-82px">{sectionFiveText}</div>
          </div>
          <div className="section-four">
            <div className="section-3 valign-text-middle oxanium-normal-electric-violet-82px">
              <span>
                <span className="oxanium-normal-electric-violet-82px">{spanText8}</span>
                <span className="span1-4">{spanText9}</span>
              </span>
            </div>
            <div className="section-four-text valign-text-middle oxanium-medium-white-82px">{sectionFourText}</div>
          </div>
          <div className="section-three-1">
            <img className="section-three-title-1" src={sectionThreeTitle} />
          </div>
          <div className="section-two">
            <img className="section-two-title-1" src={sectionTwoTitle} />
            <div className="section-two-text-1 valign-text-middle oxanium-medium-white-82px">{sectionTwoText}</div>
          </div>
          <div className="section-one-1">
            <div className="overlap-group2-1">
              <img className="logo-dark-mode-3" src={logoDarkMode2} />
              <div className="nav-container">
                <img className="nav-menu-2" src={navMenu} />
                <div className="nav-container"></div>
              </div>
            </div>
            <h1 className="section-one-title-1 valign-text-middle">{sectionOneTitle}</h1>
            <div className="overlap-group3-1">
              <div className="background-1" style={{ backgroundImage: `url(${background})` }}></div>
              <div className="section-one-text-1 valign-text-middle">{sectionOneText}</div>
              <div className="overlap-group-3">
                <div className="action-text-1 valign-text-middle oxanium-medium-white-64px">{actionText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOrTablet;
