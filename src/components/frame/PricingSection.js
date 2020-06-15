import React from 'react';
import styled from 'styled-components';
import PricingHeader from './PricingHeader';
import PricingCards from './PricingCards';

const Section = styled.section`
    min-height: 100vh;
    background-color: transparent;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 4320px;
        height: calc(100% + 750px - 480px);
        background: #232E3B;
        clip-path: polygon(0% 1500px, 100% 0%, 100% 100%, 0% 100%);
        z-index: -3;
    }

    @media(max-width: 960px) {
        max-width: 960px;
    }
`;

const PricingContainer = styled.div`
    margin: 0 180px;
    padding: 60px 0;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #DFE5EB;
        top: 0;
        left: 0;
    }

    @media(max-width: 960px) {
        padding: 20px;
        margin: 0;
    }
`;

const PricingSection = () => {
    return (
        <Section>
            <PricingContainer>
                <PricingHeader />
                <PricingCards />
            </PricingContainer>

        </Section>
    );
};

export default PricingSection;