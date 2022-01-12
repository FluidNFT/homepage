import "./App.css";
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import MobileOverlay from "./components/MobileOverlay";
import Mobile from "./components/Mobile";

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 775px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
  const [mode, setMode] = useState("dark");

  if (isMobile) {
    mobileData['mode'] = mode;
    mobileData['setMode'] = setMode;
    return <Mobile {...mobileData} />
  } else if (isTablet) {
    tabletData['mode'] = mode;
    tabletData['setMode'] = setMode;
    return <Tablet {...tabletData} />
  } else {
    desktopData['mode'] = mode;
    desktopData['setMode'] = setMode;
    return <Desktop {...desktopData} />
  };
}

export default App;
const desktopData = {
    logoDarkMode: "/img/fluidlogonegativesmall@2x.png",
    background: "/img/background-image@1x.png",
    sectionOneText: "FluidNFT Protocol enables anyone to immediately access liquidity by depositing an NFT from a whitelisted collection. Unlock the value of your NFT when you need it.",
    sectionOneTitle: "Decentralized finance for the NFT Community, by the NFT Community",
    actionText: "Learn more",
    sectionTwoTitle: "/img/bringing-defi-utility-to-nfts-1@2x.png",
    sectionTwoText: <>Access instant NFT-collateralized loans while maintaining full ownership and custody of your NFTs.<br /><br />Earn interst by depositing assets to provide liquidity.<br /><br />Protect your NFTs and assets from market and default risks through our mechanism design.</>,
    sectionThreeTitle: "/img/automated-market-maker-for-nft-collateralized-loans-1@2x.png",
    spanText: <>Borrowers<br /></>,
    spanText2: "Use your NFTs to get instant liquidity",
    sectionFourText: <>Deposit an NFT from any whitelisted collection to open a loan. The maximum borrow amount is set by the project price floor and minimum collateralization ratio (CR). <br /><br />For example, if BAYC has a floor price of 60 ETH and a mimimum CR of 150% then the maximum borrow amount will be 40 ETH.<br /><br />While maining the CR above this theshold is important to avoid liquidation, there are protocl measures to procect user NFTs against market risks such as flash crashes and price manipulation.</>,
    spanText3: <>Lenders<br /></>,
    spanText4: "Earn yield protected from loan defaults",
    sectionFiveText: <>Deposit assets to a lending pool and immediately start earning interest. The amount of interest is set by the NFT project borrow rate and lending pool utilization ratio.<br /><br />For example, if BAYC has a borrow rate of 20% APR and 80% of the BAYC-WETH pool is being utilized for lending then the interest rate on deposits will be 16% APY.<br /><br />Positions are tokenized. Interest bearning tokens are minted on deposit and these can be stored, transfered and traded at will.</>,
    spanText5: <>Liquidators<br /></>,
    spanText6: "Buy NFTs below market price",
    sectionSixText: <>Liquidators buyout expired or under-collaterlized loan positions to reteive the underlying NFT at a discounted price.<br /><br />For example, if the collateralization ratio of a loan falls below the minimum threshold then a liquidator will be able to trigger a timed auction with an intial bid to cover the outstanding debt.<br /><br />As a protection from market risk, borrowers are still able to retrieve their NFT for the same amount plus a fee to the liquidator. If the auction completes and the liquidator is outbid they still earn a fee.</>,
    sectionSevenTitle: "/img/working-with-the-community-1@2x.png",
    spanText7: "We partner with NFT Creators to onboard collections. Contact us to ",
    spanText8: "partner@fluidnft.org",
    spanText9: ".",
    copyrightNotice: "Copyright © 2022 Fluid NFT Labs",
    footerNav: <>Docs<br />Twitter<br />Discord</>,
    subscribeButtonText: "/img/join-the-waitlist-4@2x.png",
    overlapGroup1: "/img/item-container-select-4@2x.png",
    subscribeInputText: "Email",
    logoDarkMode2: "/img/fluidlogonegativesmall@2x.png",
    logoLightMode: "/img/fluidlogopositivesmall@2x.png",
    logoLightMode2: "/img/fluidlogopositivesmall@2x.png",
    overlayClose: "/img/frame@2x.png",
    navLightMode: "/img/experimental---sun-3@2x.png",
    navDarkMode: "/img/experimental---moon@2x.png",
};

const tabletData = {
    logoDarkMode: "/img/fluidlogonegativesmall@2x.png",
    sectionOneTitle: "Decentralized finance for the NFT Community, by the NFT Community",
    sectionOneText: "FluidNFT Protocol enables anyone to immediately access liquidity by depositing an NFT from a whitelisted collection. Unlock the value of your NFT when you need it.",
    overlapGroup4: "/img/background-image-1@1x.png",
    actionText: "Learn more",
    sectionTwoTitle: "/img/bringing-defi-utility-to-nfts@2x.png",
    sectionTwoText: <>Access instant NFT-collateralized loans while maintaining full ownership and custody of your NFTs.<br /><br />Earn interst by depositing assets to provide liquidity.<br /><br />Protect your NFTs and assets from market and default risks through our mechanism design.</>,
    sectionThreeTitle: "/img/automated-market-maker-for-nft-collateralized-loans@2x.png",
    spanText: <>Borrowers<br /></>,
    spanText2: "Use your NFTs to get instant liquidity",
    sectionFourText: <>Deposit an NFT from any whitelisted collection to open a loan. The maximum borrow amount is set by the project price floor and minimum collateralization ratio (CR). <br /><br />For example, if BAYC has a floor price of 60 ETH and a mimimum CR of 150% then the maximum borrow amount will be 40 ETH.<br /><br />While maining the CR above this theshold is important to avoid liquidation, there are protocl measures to procect user NFTs against market risks such as flash crashes and price manipulation.</>,
    spanText3: <>Lenders<br /></>,
    spanText4: "Earn yield protected from loan defaults",
    sectionFiveText: <>Deposit assets to a lending pool and immediately start earning interest. The amount of interest is set by the NFT project borrow rate and lending pool utilization ratio.<br /><br />For example, if BAYC has a borrow rate of 20% APR and 80% of the BAYC-WETH pool is being utilized for lending then the interest rate on deposits will be 16% APY.<br /><br />Positions are tokenized. Interest bearning tokens are minted on deposit and these can be stored, transfered and traded at will.</>,
    spanText5: <>Liquidators<br /></>,
    spanText6: "Buy NFTs below market price",
    sectionSixText: <>Liquidators buyout expired or under-collaterlized loan positions to reteive the underlying NFT at a discounted price.<br /><br />For example, if the collateralization ratio of a loan falls below the minimum threshold then a liquidator will be able to trigger a timed auction with an intial bid to cover the outstanding debt.<br /><br />As a protection from market risk, borrowers are still able to retrieve their NFT for the same amount plus a fee to the liquidator. If the auction completes and the liquidator is outbid they still earn a fee.</>,
    sectionSevenTitle: "/img/working-with-the-community@2x.png",
    spanText7: "We partner with NFT Creators to onboard collections. Contact us to ",
    spanText8: "partner@fluidnft.org",
    spanText9: ".",
    footerNav: <>Docs<br />Twitter<br />Discord</>,
    copyrightNotice: "Copyright © 2022 Fluid NFT Labs",
    subscribeButtonText: "/img/join-the-waitlist-3@2x.png",
    overlapGroup1: "/img/item-container-select-3@2x.png",
    subscribeInputText: "Email",
    logoDarkMode2: "/img/fluidlogonegativesmall@2x.png",
    logoLightMode: "/img/fluidlogopositivesmall@2x.png",
    logoLightMode2: "/img/fluidlogopositivesmall@2x.png",
    overlayClose: "/img/frame@2x.png",
    navLightMode: "/img/experimental---sun-3@2x.png",
    navDarkMode: "/img/experimental---moon@2x.png",
};

const mobileData = {
    sectionTwoTitle: "/img/bringing-defi-utility-to-nfts-2@2x.png",
    sectionTwoText: <>Access instant NFT-collateralized loans while maintaining full ownership and custody of your NFTs.<br /><br />Earn interst by depositing assets to provide liquidity.<br /><br />Protect your NFTs and assets from market and default risks through our mechanism design.</>,
    logoDarkMode: "/img/fluidlogonegativesmall@2x.png",
    navMenu: "/img/menu-nav@2x.png",
    sectionOneTitle: "Decentralized finance for the NFT Community, by the NFT Community",
    background: "/img/background-image-2@2x.png",
    sectionOneText: "FluidNFT Protocol enables anyone to immediately access liquidity by depositing an NFT from a whitelisted collection. Unlock the value of your NFT when you need it.",
    actionText: "Learn more",
    sectionThreeTitle: "/img/automated-market-maker-for-nft-collateralized-loans-2@2x.png",
    spanText: <>Borrowers<br /></>,
    spanText2: "Use your NFTs to get instant liquidity",
    sectionFourText: <>Deposit an NFT from any whitelisted collection to open a loan. The maximum borrow amount is set by the project price floor and minimum collateralization ratio (CR). <br /><br />For example, if BAYC has a floor price of 60 ETH and a mimimum CR of 150% then the maximum borrow amount will be 40 ETH.<br /><br />While maining the CR above this theshold is important to avoid liquidation, there are protocl measures to procect user NFTs against market risks such as flash crashes and price manipulation.</>,
    spanText3: <>Lenders<br /></>,
    spanText4: "Earn yield protected from loan defaults",
    sectionFiveText: <>Deposit assets to a lending pool and immediately start earning interest. The amount of interest is set by the NFT project borrow rate and lending pool utilization ratio.<br /><br />For example, if BAYC has a borrow rate of 20% APR and 80% of the BAYC-WETH pool is being utilized for lending then the interest rate on deposits will be 16% APY.<br /><br />Positions are tokenized. Interest bearning tokens are minted on deposit and these can be stored, transfered and traded at will.</>,
    spanText5: <>Liquidators<br /></>,
    spanText6: "Buy NFTs below market price",
    sectionSixText: <>Liquidators buyout expired or under-collaterlized loan positions to reteive the underlying NFT at a discounted price.<br /><br />For example, if the collateralization ratio of a loan falls below the minimum threshold then a liquidator will be able to trigger a timed auction with an intial bid to cover the outstanding debt.<br /><br />As a protection from market risk, borrowers are still able to retrieve their NFT for the same amount plus a fee to the liquidator. If the auction completes and the liquidator is outbid they still earn a fee.</>,
    sectionSevenTitle: "/img/working-with-the-community-3@2x.png",
    spanText7: "We partner with NFT Creators to onboard collections. Contact us to ",
    spanText8: "partner@fluidnft.org",
    spanText9: ".",
    overlapGroup: "/img/item-container-select-2@2x.png",
    subscribeInputText: "Email",
    subscribeButtonText: "/img/join-the-waitlist-2@2x.png",
    logoDarkMode2: "/img/fluidlogonegativesmall@2x.png",
    footerNav: <>Docs<br />Twitter<br />Discord</>,
    copyrightNotice: "Copyright © 2022 Fluid NFT Labs",
    logoLightMode: "/img/fluidlogopositivesmall@2x.png",
    logoLightMode2: "/img/fluidlogopositivesmall@2x.png",
    overlayClose: "/img/frame@2x.png",
    navLightMode: "/img/experimental---sun-3@2x.png",
    navDarkMode: "/img/experimental---moon@2x.png",
    navMenuLight: "/img/menu-nav-light@2x.png",
};

