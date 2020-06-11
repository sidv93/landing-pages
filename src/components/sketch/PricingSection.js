import React from 'react';
import styled from 'styled-components';
import PricingHeader from './PricingHeader';
import PricingCards from './PricingCards';

const Section = styled.section`
    min-height: 100vh;
    background-color: transparent;
    position: relative;
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