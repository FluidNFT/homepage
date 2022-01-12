import React from "react";
import "./Mobile.css";
import Popup from 'reactjs-popup';
import MobileOverlay from '../MobileOverlay';

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
    logoLightMode,
    logoLightMode2,
    footerNav,
    copyrightNotice,
    mode,
    setMode,
    overlayClose,
    navLightMode,
    navDarkMode,
    navMenuLight,
  } = props;


    //           
  //           
  //     
  console.log('mode', mode);

  if (mode=="dark") {
    return (
      <div className="container-center-horizontal">
        <div className="mobile screen">
          <div className="section-container">
            <div className="section-one-2">
              <div className="overlap-group2-2">
                <img className="logo-dark-mode-4" src={logoDarkMode} />
                <div className="navigation-2">
                  <Popup modal trigger={
                    <img className="nav-menu-2" src={navMenu} />
                  } modal nested>
                  <MobileOverlay 
                    overlayClose={overlayClose}
                    navLightMode={navLightMode}
                    navDarkMode={navDarkMode}
                    mode={mode}
                    setMode={setMode}
                  />
                  </Popup>
                </div>
              </div>
              <div className="section-one-title-2 valign-text-middle">{sectionOneTitle}</div>
              <div className="section-one-text-2 valign-text-middle">{sectionOneText}</div>
              <div className="overlap-group3-2">
                <div className="background-1" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="overlap-group-4">
                  <a href="#contact">
                    <div className="action-text-2 valign-text-middle">{actionText}</div>
                  </a>
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
          <div className="section-seven" id="contact">
            <img className="section-seven-title-2" src={sectionSevenTitle} />
            <div className="section-seven-text-2 valign-text-middle">
              <span>
                <span className="oxanium-medium-white-24px">{spanText7}</span>
                <span className="span1-5">
                  <a href="mailto:partner@fluidnft.org" className="span1-5">{spanText8}</a>
                </span>
                <span className="oxanium-medium-white-24px">{spanText9}</span>
              </span>
            </div>
            <div className="footer-2">
              <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
                <input type="hidden" name="id" value="24d009fd28" />
                <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text-2 valign-text-middle oxanium-medium-eerie-30px" placeholder={subscribeInputText} aria-required="true" required="required" />
                </div>
                <div className="overlap-group1-2">
                  <button type="submit" className="submit user-signup__submit submit-button">
                    <img className="subscribe-button-text-2" src={subscribeButtonText} />
                  </button>
                </div>
              </form>
              <div className="flex-row">
                <img className="logo-dark-mode-5" src={logoDarkMode2} />
                <div className="footer-nav-2 valign-text-middle oxanium-medium-celeste-24px">
                  <p className="footer-nav-dark"><a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="footer-nav-dark">Docs</a></p>
                  <p className="footer-nav-dark"><a href="https://twitter.com/FluidNFT_" target="_blank" className="footer-nav-dark">Twitter</a></p>
                  <p className="footer-nav-dark"><a href="https://discord.gg/sBk2E7m5" target="_blank" className="footer-nav-dark">Discord</a></p>
                </div>
              </div>
              <p className="copyright-notice-2 valign-text-middle">{copyrightNotice}</p>
            </div>
          </div>
        </div>
      </div>
      );
  } else {
    return (
      <div className="container-center-horizontal">
        <div className="mobile-light screen">
          <div className="section-container">
            <div className="section-one-2-light">
              <div className="overlap-group2-2">
                <img className="logo-dark-mode-4" src={logoLightMode} />
                <div className="navigation-2">
                  <Popup modal trigger={
                    <img className="nav-menu-2" src={navMenuLight} />
                  } modal nested>
                  <MobileOverlay 
                    overlayClose={overlayClose}
                    navLightMode={navLightMode}
                    navDarkMode={navDarkMode}
                    mode={mode}
                    setMode={setMode}
                  />
                  </Popup>
                </div>
              </div>
              <div className="section-one-title-2-light valign-text-middle">{sectionOneTitle}</div>
              <div className="section-one-text-2-light valign-text-middle">{sectionOneText}</div>
              <div className="overlap-group3-2">
                <div className="background-1" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="overlap-group-4-light">
                  <a href="#contact_">
                    <div className="action-text-2 valign-text-middle">{actionText}</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-two-light">
              <img className="section-two-title-2" src={sectionTwoTitle} />
              <div className="section-two-text-2 valign-text-middle oxanium-medium-black-24px">{sectionTwoText}</div>
            </div>
          </div>
          <div className="section-three-2-light">
            <img className="section-three-title-2" src={sectionThreeTitle} />
          </div>
          <div className="section-6-light">
            <div className="section-7 valign-text-middle oxanium-normal-electric-violet-32px">
              <span>
                <span className="oxanium-normal-electric-violet-32px">{spanText}</span>
                <span className="span1-2">{spanText2}</span>
              </span>
            </div>
            <div className="section-8 valign-text-middle oxanium-medium-black-24px">{sectionFourText}</div>
          </div>
          <div className="section-6-light">
            <div className="section-five-title-2 valign-text-middle oxanium-normal-electric-violet-32px">
              <span>
                <span className="span0">{spanText3}</span>
                <span className="span1-3">{spanText4}</span>
              </span>
            </div>
            <div className="section-five-text-2 valign-text-middle oxanium-medium-black-24px">{sectionFiveText}</div>
          </div>
          <div className="section-6-light">
            <div className="section-7 valign-text-middle oxanium-normal-electric-violet-32px">
              <span>
                <span className="span0-1">{spanText5}</span>
                <span className="span1-4">{spanText6}</span>
              </span>
            </div>
            <div className="section-8 valign-text-middle oxanium-medium-black-24px">{sectionSixText}</div>
          </div>
          <div className="section-seven-light" id="contact_">
            <img className="section-seven-title-2" src={sectionSevenTitle} />
            <div className="section-seven-text-2 valign-text-middle">
              <span>
                <span className="oxanium-medium-black-24px">{spanText7}</span>
                <span className="span1-5-light">
                <a href="mailto:partner@fluidnft.org" className="span1-5-light">{spanText8}</a>
                </span>
                <span className="oxanium-medium-black-24px">{spanText9}</span>
              </span>
            </div>
            <div className="footer-2-light">
              <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
                <input type="hidden" name="id" value="24d009fd28" />
                <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text-2 valign-text-middle oxanium-medium-eerie-30px" placeholder={subscribeInputText} aria-required="true" required="required" />
                </div>
                <div className="overlap-group1-2">
                  <button type="submit" className="submit user-signup__submit submit-button">
                    <img className="subscribe-button-text-2" src={subscribeButtonText} />
                  </button>
                </div>
              </form>
              <div className="flex-row">
                <img className="logo-dark-mode-5" src={logoLightMode2} />
                <div className="footer-nav-2 valign-text-middle oxanium-medium-black-24px">
                  <p className="footer-nav-light"><a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="footer-nav-light">Docs</a></p>
                  <p className="footer-nav-light"><a href="https://twitter.com/FluidNFT_" target="_blank" className="footer-nav-light">Twitter</a></p>
                  <p className="footer-nav-light"><a href="https://discord.gg/sBk2E7m5" target="_blank" className="footer-nav-light">Discord</a></p>
                </div>
              </div>
              <p className="copyright-notice-2-light valign-text-middle">{copyrightNotice}</p>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Mobile;
