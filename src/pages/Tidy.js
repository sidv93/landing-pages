import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeadingSection from '../components/tidy/HeadingSection';
import FeatureSection from '../components/tidy/FeatureSection';
import FeedbackSection from '../components/tidy/FeedbackSection';
import ProductSection from '../components/tidy/ProductSection';
import PricingSection from '../components/tidy/PricingSection';
import FooterSection from '../components/tidy/FooterSection';
import RoadmapSection from '../components/tidy/RoadmapSection';

const themeTidy = {
    bgColorPrimary: '#101D2D',
    headerTextColor: '#fff',
    textColor: '#95A4B4',
    buttonBgColor: '#2174EA',
    buttonTextColor: '#fff',
    sectionsBgColor: '#fff',
    sectionHeaderTextColor: '#101D2D',
    sectionsTextColor: '#627183',
    cardBgColor: '#fff',
    headerFontFamily: 'Playfair Display',
    productSectionBgColor: '#F3F5F8'
};

const Tidy = () => {
    return (
        <ThemeProvider theme={themeTidy}>
            <HeadingSection />
            <FeatureSection />
            <FeedbackSection />
            <ProductSection />
            <RoadmapSection />
            <PricingSection />
            <FooterSection />
        </ThemeProvider>
    );
};

export default Tidy;
