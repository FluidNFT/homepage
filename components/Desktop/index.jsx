import React from "react";
import NavMenu from "../NavMenu";
import "./Desktop.css";

function Desktop(props) {
  const {
    logoDarkMode,
    background,
    sectionOneText,
    sectionOneTitle,
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
    copyrightNotice,
    footerNav,
    subscribeButtonText,
    overlapGroup1,
    subscribeInputText,
    logoDarkMode2,
    mode,
    setMode,
    logoLightMode
  } = props;


  if (mode=="dark") {
    return (
      <div className="desktop screen">
        <div className="section-one">
          <div className="overlap-group3">
            <img className="logo-dark-mode" src={logoDarkMode} />
            <div className="navigation">
              <NavMenu 
                mode={mode}
                setMode={setMode}
              />
            </div>
          </div>
          <div className="overlap-group4">
            <h1 className="section-one-title valign-text-middle oxanium-bold-white-56px">{sectionOneTitle}</h1>
            <div className="section-one-text valign-text-middle oxanium-medium-celeste-32px">{sectionOneText}</div>
            <div className="overlap-group">
              <div className="action-text valign-text-middle oxanium-medium-white-32px">{actionText}</div>
            </div>
          </div>
          <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
        </div>
        <div className="section">
          <img className="section-two-title" src={sectionTwoTitle} />
          <div className="section-two-text valign-text-middle oxanium-medium-white-36px">{sectionTwoText}</div>
        </div>
        <div className="section-three">
          <img className="section-three-title" src={sectionThreeTitle} />
        </div>
        <div className="section">
          <div className="section-1 valign-text-middle oxanium-normal-electric-violet-36px">
            <span>
              <span className="oxanium-normal-electric-violet-36px">{spanText}</span>
              <span className="oxanium-bold-electric-violet-48px">{spanText2}</span>
            </span>
          </div>
          <div className="section-2 valign-text-middle oxanium-medium-white-32px">{sectionFourText}</div>
        </div>
        <div className="section">
          <div className="section-five-title valign-text-middle oxanium-normal-heat-wave-36px">
            <span>
              <span className="oxanium-normal-heat-wave-36px">{spanText3}</span>
              <span className="oxanium-bold-heat-wave-48px">{spanText4}</span>
            </span>
          </div>
          <div className="section-five-text valign-text-middle oxanium-medium-white-32px">{sectionFiveText}</div>
        </div>
        <div className="section">
          <div className="section-1 valign-text-middle oxanium-normal-royal-heath-36px">
            <span>
              <span className="oxanium-normal-royal-heath-36px">{spanText5}</span>
              <span className="oxanium-bold-royal-heath-48px">{spanText6}</span>
            </span>
          </div>
          <div className="section-2 valign-text-middle oxanium-medium-white-32px">{sectionSixText}</div>
        </div>
        <div className="section-seven">
          <img className="section-seven-title" src={sectionSevenTitle} />
          <div className="section-seven-text valign-text-middle oxanium-medium-white-36px-2">
            <span>
              <span className="oxanium-medium-white-36px">{spanText7}</span>
              <span className="span1 oxanium-medium-heat-wave-36px">{spanText8}</span>
              <span className="oxanium-medium-white-36px">{spanText9}</span>
            </span>
          </div>
          <div className="footer">
            <div className="overlap-group2">
              <div className="copyright-notice valign-text-middle oxanium-medium-celeste-18px">{copyrightNotice}</div>
              <div className="footer-nav valign-text-middle oxanium-medium-celeste-32px">
                <a className="footer-nav-dark">Docs</a>
                <br/>
                <a className="footer-nav-dark">Twitter</a>
                <br/>
                <a className="footer-nav-dark">Discord</a>
              </div>
            </div>
            <div className="overlap-group-1">
              <img className="subscribe-button-text" src={subscribeButtonText} />
            </div>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="subscribe-input-text valign-text-middle oxanium-medium-silver-30px">
                {subscribeInputText}
              </div>
            </div>
            <img className="logo-dark-mode-1" src={logoDarkMode2} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="desktop screen">
        <div className="section-one-light">
          <div className="overlap-group3">
            <img className="logo-dark-mode" src={logoLightMode} />
            <div className="navigation">
              <NavMenu 
               mode={mode}
               setMode={setMode}
              />
            </div>
          </div>
          <div className="overlap-group4">
            <h1 className="section-one-title valign-text-middle oxanium-bold-black-56px">{sectionOneTitle}</h1>
            <div className="section-one-text valign-text-middle oxanium-medium-eerie-32px">{sectionOneText}</div>
            <div className="overlap-group-light">
              <div className="action-text valign-text-middle oxanium-medium-white-32px">{actionText}</div>
            </div>
          </div>
          <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
        </div>
        <div className="section-light">
          <img className="section-two-title" src={sectionTwoTitle} />
          <div className="section-two-text valign-text-middle oxanium-medium-black-36px">{sectionTwoText}</div>
        </div>
        <div className="section-three-light">
          <img className="section-three-title" src={sectionThreeTitle} />
        </div>
        <div className="section-light">
          <div className="section-1 valign-text-middle oxanium-normal-electric-violet-36px">
            <span>
              <span className="oxanium-normal-electric-violet-36px">{spanText}</span>
              <span className="oxanium-bold-electric-violet-48px">{spanText2}</span>
            </span>
          </div>
          <div className="section-2 valign-text-middle oxanium-medium-black-32px">{sectionFourText}</div>
        </div>
        <div className="section-light">
          <div className="section-five-title valign-text-middle oxanium-normal-heat-wave-36px">
            <span>
              <span className="oxanium-normal-heat-wave-36px">{spanText3}</span>
              <span className="oxanium-bold-heat-wave-48px">{spanText4}</span>
            </span>
          </div>
          <div className="section-five-text valign-text-middle oxanium-medium-black-32px">{sectionFiveText}</div>
        </div>
        <div className="section-light">
          <div className="section-1 valign-text-middle oxanium-normal-royal-heath-36px">
            <span>
              <span className="oxanium-normal-royal-heath-36px">{spanText5}</span>
              <span className="oxanium-bold-royal-heath-48px">{spanText6}</span>
            </span>
          </div>
          <div className="section-2 valign-text-middle oxanium-medium-black-32px">{sectionSixText}</div>
        </div>
        <div className="section-seven-light">
          <img className="section-seven-title" src={sectionSevenTitle} />
          <div className="section-seven-text valign-text-middle oxanium-medium-black-36px-2">
            <span>
              <span className="oxanium-medium-black-36px">{spanText7}</span>
              <span className="span1 oxanium-medium-pink-36px">{spanText8}</span>
              <span className="oxanium-medium-black-36px">{spanText9}</span>
            </span>
          </div>
          <div className="footer">
            <div className="overlap-group2">
              <div className="copyright-notice-light valign-text-middle oxanium-medium-eerie-18px">{copyrightNotice}</div>
              <div className="footer-nav valign-text-middle oxanium-medium-white-32px">
                <a className="footer-nav-light">Docs</a>
                <br/>
                <a className="footer-nav-light">Twitter</a>
                <br/>
                <a className="footer-nav-light">Discord</a>
              </div>
            </div>
            <div className="overlap-group-1">
              <img className="subscribe-button-text" src={subscribeButtonText} />
            </div>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="subscribe-input-text valign-text-middle oxanium-medium-silver-30px">
                {subscribeInputText}
              </div>
            </div>
            <img className="logo-dark-mode-1" src={logoLightMode} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default Desktop;
