import React from 'react';
import Header from '../shared/Header';
import styled from 'styled-components';
import BannerText from './Banner';
import Background from '../../assets/twist/illustration-section-01.svg';
import Logo from '../../assets/twist/logo.svg';

const Banner = styled.section`
    position: relative;
    min-height: 110vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1334px;
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
                <Header logo={Logo} />
                <BannerText />
            </BannerContainer>
        </Banner>
    );
};

export default BannerSection;