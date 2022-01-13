import React from "react";
import NavMenu from "../NavMenu";
import Popup from 'reactjs-popup';
import MobileOrTabletOverlay from '../MobileOrTabletOverlay';
import "./MobileOrTablet.css";

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

function MobileOrTablet(props) {
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
    mode,
    setMode,
    logoLightMode,
    navMenu,
    navMenuLight,
    navLightMode,
    navDarkMode,
  } = props;

  if (mode=="dark") {
    return (
      <div className="container-center-horizontal container-dark">
        <div className="tablet screen">
          <div className="section-one-1">
            <div className="overlap-group3-1">
              <img className="logo-dark-mode-2" src={logoDarkMode} />
              <div className="navigation-1">
                <Popup modal trigger={
                  <img className="nav-menu-22" src={navMenu} />
                } modal nested>
                <MobileOrTabletOverlay 
                  navLightMode={navLightMode}
                  navDarkMode={navDarkMode}
                  mode={mode}
                  setMode={setMode}
                />
                </Popup>
              </div>
            </div>
            <div className="section-one-title-1 valign-text-middle oxanium-bold-white-72px">{sectionOneTitle}</div>
            <div className="section-one-text-1 valign-text-middle oxanium-medium-celeste-48px">{sectionOneText}</div>
            <div className="overlap-group-2">
              <a onClick={() => scroll.scrollToBottom()}>
                <div className="action-text-1 valign-text-middle oxanium-medium-white-48px">{actionText}</div>
              </a>
            </div>
            <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}></div>
          </div>
          <div className="section-3">
            <img className="section-two-title-1" src={sectionTwoTitle} />
            <div className="section-two-text-1 valign-text-middle oxanium-medium-white-48px">{sectionTwoText}</div>
          </div>
          <div className="section-three-1">
            <img className="section-three-title-1" src={sectionThreeTitle} />
          </div>
          <div className="section-3a">
            <div className="section-4 valign-text-middle oxanium-normal-electric-violet-48px">
              <span>
                <span className="oxanium-normal-electric-violet-48px">{spanText}</span>
                <span className="oxanium-bold-electric-violet-56px">{spanText2}</span>
              </span>
            </div>
            <div className="section-5 valign-text-middle oxanium-medium-white-48px">{sectionFourText}</div>
          </div>
          <div className="section-3a">
            <div className="section-five-title-1 valign-text-middle oxanium-normal-heat-wave-48px">
              <span>
                <span className="oxanium-normal-heat-wave-48px">{spanText3}</span>
                <span className="oxanium-bold-heat-wave-56px">{spanText4}</span>
              </span>
            </div>
            <div className="section-five-text-1 valign-text-middle oxanium-medium-white-48px">{sectionFiveText}</div>
          </div>
          <div className="section-3a">
            <div className="section-4 valign-text-middle oxanium-normal-royal-heath-48px">
              <span>
                <span className="oxanium-normal-royal-heath-48px">{spanText5}</span>
                <span className="oxanium-bold-royal-heath-56px">{spanText6}</span>
              </span>
            </div>
            <div className="section-5 valign-text-middle oxanium-medium-white-48px">{sectionSixText}</div>
          </div>
          <div className="section-seven-3">
            <img className="section-seven-title-1" src={sectionSevenTitle} />
            <div className="section-seven-text-1 valign-text-middle oxanium-medium-white-56px">
              <span>
                <span className="oxanium-medium-white-56px">{spanText7}</span>
                <span className="span1-1 oxanium-medium-heat-wave-56px">
                  <a href="mailto:partner@fluidnft.org" className="oxanium-medium-heat-wave-56px">{spanText8}</a>
                </span>
                <span className="oxanium-medium-white-56px">{spanText9}</span>
              </span>
            </div>
            <div className="footer-2">
              <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
                <input type="hidden" name="id" value="24d009fd28" />
                <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text-2 valign-text-middle oxanium-medium-eerie-48px" placeholder={subscribeInputText} aria-required="true" required="required" />
                </div>
                <div className="overlap-group1-2">
                  <button type="submit" className="submit user-signup__submit submit-button">
                    <img className="subscribe-button-text-2" src={subscribeButtonText} />
                  </button>
                </div>
              </form>
              <div className="flex-row">
                <img className="logo-dark-mode-5" src={logoDarkMode2} />
                <div className="footer-nav-2 valign-text-middle oxanium-medium-celeste-48px">
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
      <div className="container-center-horizontal container-light">
        <div className="tablet-light screen">
          <div className="section-one-1-light">
            <div className="overlap-group3-1">
              <img className="logo-dark-mode-2" src={logoLightMode} />
              <div className="navigation-1">
              <Popup modal trigger={
                  <img className="nav-menu-22" src={navMenuLight} />
                } modal nested>
                <MobileOrTabletOverlay 
                  navLightMode={navLightMode}
                  navDarkMode={navDarkMode}
                  mode={mode}
                  setMode={setMode}
                />
                </Popup>
              </div>
            </div>
            <div className="section-one-title-1 valign-text-middle oxanium-bold-black-72px">{sectionOneTitle}</div>
            <div className="section-one-text-1 valign-text-middle oxanium-medium-eerie-48px">{sectionOneText}</div>
            <div className="overlap-group-2-light">
              <a onClick={() => scroll.scrollToBottom()}>
                <div className="action-text-1 valign-text-middle oxanium-medium-white-48px">{actionText}</div>
              </a>
            </div>
            <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}></div>
          </div>
          <div className="section-3-light">
            <img className="section-two-title-1" src={sectionTwoTitle} />
            <div className="section-two-text-1 valign-text-middle oxanium-medium-black-48px">{sectionTwoText}</div>
          </div>
          <div className="section-three-1-light">
            <img className="section-three-title-1" src={sectionThreeTitle} />
          </div>
          <div className="section-3a-light">
            <div className="section-4 valign-text-middle oxanium-normal-electric-violet-48px">
              <span>
                <span className="oxanium-normal-electric-violet-48px">{spanText}</span>
                <span className="oxanium-bold-electric-violet-56px">{spanText2}</span>
              </span>
            </div>
            <div className="section-5 valign-text-middle oxanium-medium-black-48px">{sectionFourText}</div>
          </div>
          <div className="section-3a-light">
            <div className="section-five-title-1 valign-text-middle oxanium-normal-heat-wave-48px">
              <span>
                <span className="oxanium-normal-heat-wave-48px">{spanText3}</span>
                <span className="oxanium-bold-heat-wave-56px">{spanText4}</span>
              </span>
            </div>
            <div className="section-five-text-1 valign-text-middle oxanium-medium-black-48px">{sectionFiveText}</div>
          </div>
          <div className="section-3a-light">
            <div className="section-4 valign-text-middle oxanium-normal-royal-heath-48px">
              <span>
                <span className="oxanium-normal-royal-heath-48px">{spanText5}</span>
                <span className="oxanium-bold-royal-heath-56px">{spanText6}</span>
              </span>
            </div>
            <div className="section-5 valign-text-middle oxanium-medium-black-48px">{sectionSixText}</div>
          </div>
          <div className="section-seven-3-light">
            <img className="section-seven-title-1" src={sectionSevenTitle} />
            <div className="section-seven-text-1 valign-text-middle oxanium-medium-black-56px">
              <span>
                <span className="oxanium-medium-black-56px">{spanText7}</span>
                <span className="span1-1 oxanium-medium-royal-health-56px">
                <a href="mailto:partner@fluidnft.org" className="oxanium-medium-royal-health-56px">{spanText8}</a>
                </span>
                <span className="oxanium-medium-black-56px">{spanText9}</span>
              </span>
            </div>
            <div className="footer-2-light">
              <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
                <input type="hidden" name="id" value="24d009fd28" />
                <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text-2 valign-text-middle oxanium-medium-eerie-48px" placeholder={subscribeInputText} aria-required="true" required="required" />
                </div>
                <div className="overlap-group1-2">
                  <button type="submit" className="submit user-signup__submit submit-button">
                    <img className="subscribe-button-text-2" src={subscribeButtonText} />
                  </button>
                </div>
              </form>
              <div className="flex-row">
                <img className="logo-dark-mode-5" src={logoLightMode} />
                <div className="footer-nav-2 valign-text-middle oxanium-medium-black-48px">
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

export default MobileOrTablet;
