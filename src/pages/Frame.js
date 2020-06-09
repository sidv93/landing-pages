import React from 'react';
import { ThemeProvider } from 'styled-components';
import BannerSection from '../components/frame/BannerSection';
import PartnerSection from '../components/frame/PartnerSection';
import FeatureSection from '../components/frame/FeatureSection';
import GetStarted from '../components/frame/GetStarted';
import FooterSection from '../components/frame/FooterSection';
import PricingSection from '../components/frame/PricingSection';
import ProcessSection from '../components/frame/ProcessSection';

const themeFrame = {
    headerFontFamily: 'Fira Sans',
    headerColor: '#232E3B',
    textFontFamily: 'Heebo',
    sectionTextColor: '#626F7F',
    buttonBgColor: '#2F75FF',
    buttonTextColor: '#fff',
    linkTextColor: '#95A1AE',
    getStartedBgColor: '#6BCFFF'
}

const Frame = () => {
    return (
        <ThemeProvider theme={themeFrame}>
            <BannerSection />
            <PartnerSection />
            <ProcessSection />
            <FeatureSection />
            <PricingSection />
            <GetStarted />
            <FooterSection />
        </ThemeProvider>
    )
};

export default Frame;
