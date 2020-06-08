import React from 'react';
import styled from 'styled-components';
import PricingHeader from './PricingHeader';
import PricingCards from './PricingCards';
import Background from '../../assets/twist/illustration-section-03.svg';

const PricingContainer = styled.section`
    min-height: 100vh;
    background-color: transparent;
    padding: 60px 180px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
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