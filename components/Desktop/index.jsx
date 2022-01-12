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
              <a href="#contact">
                <div className="action-text valign-text-middle oxanium-medium-white-32px">{actionText}</div>
              </a>
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
        <div className="section-seven" id="contact">
          <img className="section-seven-title" src={sectionSevenTitle} />
          <div className="section-seven-text valign-text-middle oxanium-medium-white-36px-2">
            <span>
              <span className="oxanium-medium-white-36px">{spanText7}</span>
              <span className="span1 oxanium-medium-heat-wave-36px">
              <a href="mailto:partner@fluidnft.org" className="oxanium-medium-heat-wave-36px">{spanText8}</a>
              </span>
              <span className="oxanium-medium-white-36px">{spanText9}</span>
            </span>
          </div>
          <div className="footer">
            <div className="overlap-group2">
              <div className="copyright-notice valign-text-middle oxanium-medium-celeste-18px">{copyrightNotice}</div>
              <div className="footer-nav valign-text-middle oxanium-medium-celeste-28px">
                <p className="footer-nav-dark"><a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="footer-nav-dark">Docs</a></p>
                <p className="footer-nav-dark"><a href="https://twitter.com/FluidNFT_" target="_blank" className="footer-nav-dark">Twitter</a></p>
                <p className="footer-nav-dark"><a href="https://discord.gg/sBk2E7m5" target="_blank" className="footer-nav-dark">Discord</a></p>
              </div>
            </div>
            <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
              <input type="hidden" name="id" value="24d009fd28" />
              <div className="overlap-group-1">
                <button type="submit" className="submit user-signup__submit submit-button"><img className="subscribe-button-text" src={subscribeButtonText} /></button>
              </div>
              <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text valign-text-middle oxanium-medium-eerie-30px" placeholder={subscribeInputText} aria-required="true" required="required" />
              </div>
            </form>
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
              <a href="#contact_">
                <div className="action-text valign-text-middle oxanium-medium-white-32px">{actionText}</div>
              </a>
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
        <div className="section-seven-light" id="contact_">
          <img className="section-seven-title" src={sectionSevenTitle} />
          <div className="section-seven-text valign-text-middle oxanium-medium-black-36px-2">
            <span>
              <span className="oxanium-medium-black-36px">{spanText7}</span>
              <span className="span1 oxanium-medium-pink-36px">
                <a href="mailto:partner@fluidnft.org" className="oxanium-medium-pink-36px">{spanText8}</a>
              </span>
              <span className="oxanium-medium-black-36px">{spanText9}</span>
            </span>
          </div>
          <div className="footer">
            <div className="overlap-group2">
              <div className="copyright-notice-light valign-text-middle oxanium-medium-eerie-18px">{copyrightNotice}</div>
              <div className="footer-nav valign-text-middle oxanium-medium-black-28px">
                <p className="footer-nav-light"><a href="https://niftrr.gitbook.io/fluidnft/" target="_blank" className="footer-nav-light">Docs</a></p>
                <p className="footer-nav-light"><a href="https://twitter.com/FluidNFT_" target="_blank" className="footer-nav-light">Twitter</a></p>
                <p className="footer-nav-light"><a href="https://discord.gg/sBk2E7m5" target="_blank" className="footer-nav-light">Discord</a></p>
              </div>
            </div>
            <form className="form user-signup__form" action="https://xyz.us20.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="3597a5e9af0d6962274f0242d" />
              <input type="hidden" name="id" value="24d009fd28" />
              <div className="overlap-group-1">
                <button type="submit" className="submit user-signup__submit submit-button"><img className="subscribe-button-text" src={subscribeButtonText} /></button>
              </div>
              <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" className="form-control form-control__input user-signup__email subscribe-input-text valign-text-middle oxanium-medium-eerie-30px" placeholder={subscribeInputText} aria-required="true" required="required" />
              </div>
            </form>
            <img className="logo-dark-mode-1" src={logoLightMode} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default Desktop;
