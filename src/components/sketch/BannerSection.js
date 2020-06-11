import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BannerText from './BannerText';
import Background from '../../assets/sketch/illustration-section-01.svg';

const Banner = styled.section`
    position: relative;
    min-height: 150vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 100%;
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
const BannerContainer = styled.div`
    padding: 0 180px;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
`;

const BannerSection = () => {
    return (
        <Banner>
            <BannerContainer>
                <Header />
                <BannerText />
            </BannerContainer>
        </Banner>
    );
};

export default BannerSection;