import React from 'react';
import styled from 'styled-components';
import Placeholder from '../../assets/frame/hero-image.svg';
import AfterBackground from '../../assets/frame/illustration-element-01.svg';
import BeforeBackground from '../../assets/frame/illustration-element-01-top.svg';
import withFade from '../../utils/withFade';

const BannerContainer = styled.div`
    background-color: inherit;
    padding: 60px 0;
    min-height: 60vh;
    display: flex;
    justify-content: space-between;

    @media(max-width: 960px) {
        display: block;
    }
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    padding-top: 30px;
`;
const ImageContainer = styled.div`
    position: relative;

    &:before {
        content: '';
        position: absolute;
        max-width: 200%;
        width: 200%;
        height: 200%;
        background-image: url(${BeforeBackground});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: 50%;
        background-position: center top;
        transform: translate(-50%, -50%);
        z-index: -1;
    }

    &:after {
        content: '';
        position: absolute;
        max-width: 300%;
        width: 300%;
        height: 200%;
        background-image: url(${AfterBackground});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: -175px;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;
const InfoHeader = styled.h1`
    color: ${props => props.theme.headerColor};
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    font-size: 2.8rem;
    overflow-wrap: break-word;
    font-weight: 600;
    line-height: 52px;
    margin: 0;
`;
const InfoText = styled.p`
    color: ${props => props.theme.sectionTextColor};
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
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
    font-size: 0.9rem;
    font-weight: 700;
    padding: 15px 25px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    text-transform: uppercase;

    &:hover {
        background-color: #2f7deb;
    }
`;
const Image = styled.img`
    height: 396px;
    width: 500;
    box-shadow: 12px 32px 88px rgba(35,46,59,0.24);
    transform: perspective(1000px) rotateY(-14deg) scaleY(0.94) scaleX(1.04) translateX(-3.5%);
    transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);
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
                    <PricingButton>Pricing plans</PricingButton>
                </ButtonsContainer>
            </InfoContainer>
            <ImageContainer>
                <Image src={Placeholder} alt="placeholder" />
            </ImageContainer>
        </BannerContainer>
    );
};

export default withFade(Banner);
