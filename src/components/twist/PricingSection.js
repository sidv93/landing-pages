import React from 'react';
import styled from 'styled-components';
import PricingHeader from './PricingHeader';
import PricingCards from './PricingCards';

const PricingContainer = styled.section`
    min-height: 100vh;
    background-color: ${props => props.theme.bgColorPrimary};
    padding: 60px 180px;
`;

const PricingSection = () => {
    return (
        <PricingContainer>
            <PricingHeader />
            <PricingCards />
        </PricingContainer>
    );
};

export default PricingSection;