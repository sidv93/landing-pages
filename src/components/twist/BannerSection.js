import React from 'react';
import Header from '../twist/Header';
import styled from 'styled-components';
import BannerText from './Banner';

const Banner = styled.section`

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