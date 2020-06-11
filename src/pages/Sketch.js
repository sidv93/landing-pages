import React from 'react';
import { ThemeProvider } from 'styled-components';
import BannerSection from '../components/sketch/BannerSection';
import CommentSection from '../components/sketch/CommentSection';
import CollaborationSection from '../components/sketch/CollaborationSection';
import TestimonialSection from '../components/sketch/TestimonialSection';
import PricingSection from '../components/sketch/PricingSection';
import CarouselSection from '../components/sketch/CarouselSection';
import GetStartedSection from '../components/sketch/GetStartedSection';
import FooterSection from '../components/sketch/FooterSection';

const themeSketch = {
    headerFontFamily: 'Frank Ruhl Libre',
    headerFontColor: '#1E2238',
    sectionTextColor: '#525A75',
    sectionFontFamily: 'Roboto',
    buttonBgColor: '#3F52FF',
    buttonTextColor: '#fff',
    getStartedButtonColor: '#02C6F1',
    linkColor: '#525A75'
}

const Sketch = () => {
    return (
        <ThemeProvider theme={themeSketch}>
            <BannerSection />
            <CommentSection />
            <CollaborationSection />
            <TestimonialSection />
            <PricingSection />
            <CarouselSection />
            <GetStartedSection />
            <FooterSection />
        </ThemeProvider>
    );
};

export default Sketch;