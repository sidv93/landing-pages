import React from 'react';
import styled from 'styled-components';
import Placeholder from '../../assets/tidy/video-placeholder.jpg';
import withFade from '../../utils/withFade';

const BannerContainer = styled.div`
    background-color: inherit;
    padding: 60px 180px;
    min-height: 60vh;
    display: flex;
    justify-content: space-between;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
`;
const ImageContainer = styled.div`
    cursor: pointer;
`;
const InfoHeader = styled.h1`
    color: ${props => props.theme.headerTextColor};
    font-family: "${props => props.theme.headerFontFamily}", serif;
    font-size: 3.2rem;
    overflow-wrap: break-word;
    font-weight: 900;
    line-height: 52px;
`;
const InfoText = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 1.3rem;
    letter-spacing: 0.4px;
    overflow-wrap: break-word;
    word-wrap: break-word;
`;
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;
`;
const PricingButton = styled.div`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    font-size: 1rem;
    padding: 15px 25px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    letter-spacing: 0.7px;

    &:hover {
        background-color: #2f7deb;
    }
`;
const LearnButton = styled.div`
    background-color: #2d3a4b;
    color: ${props => props.theme.buttonTextColor};
    font-size: 1rem;
    padding: 15px 25px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    letter-spacing: 0.7px;
    margin: 0 30px;

    &:hover {
        background-color: #334155;
    }
`;

const Banner = () => {
    return (
        <BannerContainer>
            <InfoContainer>
                <InfoHeader>
                    Landing Template for startups
                </InfoHeader>
                <InfoText>
                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </InfoText>
                <ButtonsContainer>
                    <PricingButton>Pricing and plans</PricingButton>
                    <LearnButton>Learn more</LearnButton>
                </ButtonsContainer>
            </InfoContainer>
            
                <ImageContainer>
                    <img src={Placeholder} alt="placeholder" height="396" width="500" />
                </ImageContainer>
            
        </BannerContainer>
    );
};

export default withFade(Banner);
