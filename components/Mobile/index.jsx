import React from "react";
import "./Mobile.css";

function Mobile(props) {
  const {
    sectionTwoTitle,
    sectionTwoText,
    logoDarkMode,
    navMenu,
    sectionOneTitle,
    background,
    sectionOneText,
    actionText,
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
    overlapGroup,
    subscribeInputText,
    subscribeButtonText,
    logoDarkMode2,
    footerNav,
    copyrightNotice,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile screen">
        <div className="section-container">
          <div className="section-one-2">
            <div className="overlap-group2-2">
              <img className="logo-dark-mode-4" src={logoDarkMode} />
              <div className="navigation-2">
                <img className="nav-menu-2" src={navMenu} />
              </div>
            </div>
            <div className="section-one-title-2 valign-text-middle">{sectionOneTitle}</div>
            <div className="section-one-text-2 valign-text-middle">{sectionOneText}</div>
            <div className="overlap-group3-2">
              <div className="background-1" style={{ backgroundImage: `url(${background})` }}></div>
              <div className="overlap-group-4">
                <div className="action-text-2 valign-text-middle">{actionText}</div>
              </div>
            </div>
          </div>
          <div className="section-two">
            <img className="section-two-title-2" src={sectionTwoTitle} />
            <div className="section-two-text-2 valign-text-middle oxanium-medium-white-24px">{sectionTwoText}</div>
          </div>
        </div>
        <div className="section-three-2">
          <img className="section-three-title-2" src={sectionThreeTitle} />
        </div>
        <div className="section-6">
          <div className="section-7 valign-text-middle oxanium-normal-electric-violet-32px">
            <span>
              <span className="oxanium-normal-electric-violet-32px">{spanText}</span>
              <span className="span1-2">{spanText2}</span>
            </span>
          </div>
          <div className="section-8 valign-text-middle oxanium-medium-white-24px">{sectionFourText}</div>
        </div>
        <div className="section-6">
          <div className="section-five-title-2 valign-text-middle oxanium-normal-electric-violet-32px">
            <span>
              <span className="span0">{spanText3}</span>
              <span className="span1-3">{spanText4}</span>
            </span>
          </div>
          <div className="section-five-text-2 valign-text-middle oxanium-medium-white-24px">{sectionFiveText}</div>
        </div>
        <div className="section-6">
          <div className="section-7 valign-text-middle oxanium-normal-electric-violet-32px">
            <span>
              <span className="span0-1">{spanText5}</span>
              <span className="span1-4">{spanText6}</span>
            </span>
          </div>
          <div className="section-8 valign-text-middle oxanium-medium-white-24px">{sectionSixText}</div>
        </div>
        <div className="section-seven">
          <img className="section-seven-title-2" src={sectionSevenTitle} />
          <div className="section-seven-text-2 valign-text-middle">
            <span>
              <span className="oxanium-medium-white-24px">{spanText7}</span>
              <span className="span1-5">{spanText8}</span>
              <span className="oxanium-medium-white-24px">{spanText9}</span>
            </span>
          </div>
          <div className="footer-2">
            <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="subscribe-input-text-2 valign-text-middle oxanium-medium-silver-30px">
                {subscribeInputText}
              </div>
            </div>
            <div className="overlap-group1-2">
              <img className="subscribe-button-text-2" src={subscribeButtonText} />
            </div>
            <div className="flex-row">
              <img className="logo-dark-mode-5" src={logoDarkMode2} />
              <div className="footer-nav-2 valign-text-middle oxanium-medium-white-24px">{footerNav}</div>
            </div>
            <p className="copyright-notice-2 valign-text-middle">{copyrightNotice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
