import "./App.css";
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "./components/Desktop";
import MobileOrTablet from "./components/MobileOrTablet";

function App() {

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1225px)' })
  const [mode, setMode] = useState("dark");

  if (isMobileOrTablet) {
    mobileOrTabletData['mode'] = mode;
    mobileOrTabletData['setMode'] = setMode;
    return <MobileOrTablet {...mobileOrTabletData} />
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
    sectionOneText: "FluidNFT Protocol enables instant, permissionless NFT-collateralized loans on Ethereum. We partner with NFT Creators and Community DAOs to provide this utility for their members while generating yield from their treasury to help support their mission.",
    sectionOneTitle: "Decentralized finance for the NFT Community, by the NFT Community",
    actionText: "Learn more",
    sectionTwoTitle: "/img/section-two-title.png",
    sectionTwoText: <>Provide instant NFT-collateralized loans to your community while members maintain full ownership and custody of their NFTs.<br /><br />Earn interest by depositing assets to provide liquidity.<br /><br />Protect assets and NFTs from market and default risks through our mechanism design.</>,
    sectionThreeTitle: "/img/section-three-title.png",
    spanText: <>Borrowers<br /></>,
    spanText2: "Use your NFTs to get instant liquidity",
    sectionFourText: <>Borrowers must hold an NFT from a whitelisted collection. <br /><br />Collateralize an NFT within our smart contracts to open a loan. The maximum borrow amount is set by the project price floor and minimum collateralization ratio (CR). <br /><br />For example, if BAYC has a floor price of 60 ETH and a minimum CR of 150% then the maximum borrow amount will be 40 ETH.<br /><br />While maintaining the CR above this threshold is important to avoid liquidation, there are protocol measures to protect user NFTs against market risks such as flash crashes and price manipulation.</>,
    spanText3: <>Lenders<br /></>,
    spanText4: "Earn yield protected from loan defaults",
    sectionFiveText: <>Lenders can be NFT Creators, DAOs or anyone looking to earn yield. <br /><br />Deposit assets to a lending pool and immediately start earning interest. The amount of interest is set by the NFT project borrow rate and lending pool utilization ratio.<br /><br />For example, if BAYC has a borrow rate of 20% APR and 80% of the BAYC-WETH pool is being utilized for lending then the interest rate on deposits will be 16% APY.<br /><br />Positions are tokenized. Interest earning tokens are minted on deposit and these can be stored, transferred and traded at will.</>,
    spanText5: <>Liquidators<br /></>,
    spanText6: "Buy NFTs below market price",
    sectionSixText: <>Liquidators can be anyone, for instance, NFT collectors or speculators. <br /><br />They buyout expired or under-collateralized loan positions to retrieve the underlying NFT at a discounted price.<br /><br />For example, if the collateralization ratio of a loan falls below the minimum threshold then a liquidator will be able to trigger a timed auction with an initial bid to cover the outstanding debt.<br /><br />As a protection from market risk, borrowers are still able to retrieve their NFT for the same amount plus a fee to the liquidator. If the auction completes and the liquidator is outbid they still earn a fee.</>,
    sectionSevenTitle: "/img/section-seven-title.png",
    spanText7: "We partner with NFT Creators and Community DAOs to onboard collections. Contact us to ",
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

const mobileOrTabletData = {
    logoDarkMode: "/img/fluidlogonegativesmall@2x.png",
    sectionOneTitle: "Decentralized finance for the NFT Community, by the NFT Community",
    sectionOneText: "FluidNFT Protocol enables instant, permissionless NFT-collateralized loans on Ethereum. We partner with NFT Creators and Community DAOs to provide this utility for their members while generating yield from their treasury to help support their mission.",
    overlapGroup4: "/img/background-image-1@1x.png",
    actionText: "Learn more",
    sectionTwoTitle: "/img/section-two-title.png",
    sectionTwoText: <>Provide instant NFT-collateralized loans to your community while members maintain full ownership and custody of their NFTs.<br /><br />Earn interest by depositing assets to provide liquidity.<br /><br />Protect assets and NFTs from market and default risks through our mechanism design.</>,
    sectionThreeTitle: "/img/section-three-title.png",
    spanText: <>Borrowers<br /></>,
    spanText2: "Use your NFTs to get instant liquidity",
    sectionFourText: <>Borrowers must hold an NFT from a whitelisted collection. <br /><br />Collateralize an NFT within our smart contracts to open a loan. The maximum borrow amount is set by the project price floor and minimum collateralization ratio (CR). <br /><br />For example, if BAYC has a floor price of 60 ETH and a minimum CR of 150% then the maximum borrow amount will be 40 ETH.<br /><br />While maintaining the CR above this threshold is important to avoid liquidation, there are protocol measures to protect user NFTs against market risks such as flash crashes and price manipulation.</>,
    spanText3: <>Lenders<br /></>,
    spanText4: "Earn yield protected from loan defaults",
    sectionFiveText: <>Lenders can be NFT Creators, DAOs or anyone looking to earn yield. <br /><br />Deposit assets to a lending pool and immediately start earning interest. The amount of interest is set by the NFT project borrow rate and lending pool utilization ratio.<br /><br />For example, if BAYC has a borrow rate of 20% APR and 80% of the BAYC-WETH pool is being utilized for lending then the interest rate on deposits will be 16% APY.<br /><br />Positions are tokenized. Interest earning tokens are minted on deposit and these can be stored, transferred and traded at will.</>,
    spanText5: <>Liquidators<br /></>,
    spanText6: "Buy NFTs below market price",
    sectionSixText: <>Liquidators can be anyone, for instance, NFT collectors or speculators. <br /><br />They buyout expired or under-collateralized loan positions to retrieve the underlying NFT at a discounted price.<br /><br />For example, if the collateralization ratio of a loan falls below the minimum threshold then a liquidator will be able to trigger a timed auction with an initial bid to cover the outstanding debt.<br /><br />As a protection from market risk, borrowers are still able to retrieve their NFT for the same amount plus a fee to the liquidator. If the auction completes and the liquidator is outbid they still earn a fee.</>,
    sectionSevenTitle: "/img/section-seven-title.png",
    spanText7: "We partner with NFT Creators and Community DAOs to onboard collections. Contact us to ",
    spanText8: "partner@fluidnft.org",
    spanText9: ".",
    footerNav: <>Docs<br />Twitter<br />Discord</>,
    copyrightNotice: "Copyright © 2022 Fluid NFT Labs",
    subscribeButtonText: "/img/join-the-waitlist-3@2x.png",
    overlapGroup1: "/img/item-container-select-2@2x.png",
    subscribeInputText: "Email",
    logoDarkMode2: "/img/fluidlogonegativesmall@2x.png",
    logoLightMode: "/img/fluidlogopositivesmall@2x.png",
    logoLightMode2: "/img/fluidlogopositivesmall@2x.png",
    overlayClose: "/img/frame@2x.png",
    navLightMode: "/img/experimental---sun-3@2x.png",
    navDarkMode: "/img/experimental---moon@2x.png",
    navMenu: "/img/nav-dark-mode.png",
    navMenuLight: "/img/nav-light-mode.png",
    navLightMode: "/img/experimental---sun-3@2x.png",
    navDarkMode: "/img/experimental---moon@2x.png",
};
