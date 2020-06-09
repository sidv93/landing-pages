import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/frame/illustration-section-01.svg';
import Header from './Header';
import BannerDiv from './Banner';

const Banner = styled.section`
    position: relative;
    max-height: 80vh;
    /* overflow-x: hidden; */

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
    }
`;
const BannerContainer = styled.div`
    padding: 0 180px;
`;

const BannerSection = () => {
    return (
        <Banner>
            <BannerContainer>
                <Header />
                <BannerDiv />
            </BannerContainer>
        </Banner>
    );
};

export default BannerSection;