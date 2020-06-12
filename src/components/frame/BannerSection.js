import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/frame/illustration-section-01.svg';
import Header from '../shared/Header';
import BannerDiv from './Banner';
import Logo from '../../assets/frame/logo.svg';

const Banner = styled.section`
    position: relative;
    max-height: 80vh;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 100%;
        height: 100%;
        left: 50%;
        transform: translate(-50%);
        top: 0;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center top;
        z-index: -2;

        @media(max-width: 960px) {
            background-position: 56% 0;
            top: -92px;
        }
    }
`;
const BannerContainer = styled.div`
    padding: 0 180px;
    
    @media(max-width: 960px) {
        padding: 0;
    }
`;

const BannerSection = () => {
    return (
        <Banner>
            <BannerContainer>
                <Header logo={Logo} />
                <BannerDiv />
            </BannerContainer>
        </Banner>
    );
};

export default BannerSection;