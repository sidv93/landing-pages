import React from 'react';
import { ThemeProvider } from 'styled-components';
import BannerSection from '../components/twist/BannerSection';
import FlexibilitySection from '../components/twist/FlexibilitySection';
import ToolkitSection from '../components/twist/ToolkitSection';
import PricingSection from '../components/twist/PricingSection';
import FooterSection from '../components/twist/FooterSection';

const themeTwist = {
    bannerTextColor: '#455C80',
    buttonBgColor: '#4346DE',
    linkColor: '#182334',
    buttonTextColor: '#fff',
    fontFamily: 'IBM Plex Sans',
    dollarTextColor: '#768DB2',
    trialLightBlue: '#55C3F5',
    footerTextColor: '#768DB2'
};

const Twist = () => {
    return (
        <ThemeProvider theme={themeTwist}>
            <BannerSection />
            <FlexibilitySection />
            <ToolkitSection />
            <PricingSection />
            <FooterSection />
        </ThemeProvider>
    );
};

export default Twist;
