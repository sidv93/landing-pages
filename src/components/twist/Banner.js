import React from 'react';
import styled from 'styled-components';
import Placeholder from '../../assets/twist/hero-image.svg';
import Background from '../../assets/twist/illustration-element-01.svg';
import withFade from '../../utils/withFade';

const BannerContainer = styled.div`
    background-color: inherit;
    padding: 60px 0;
    min-height: 60vh;
    display: flex;
    justify-content: space-between;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    padding-top: 30px;
`;
const ImageContainer = styled.div`
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        max-width: 300%;
        width: 300%;
        height: 200%;
        background-image: url(${Background});
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
    color: ${props => props.theme.headerTextColor};
    font-size: 2.8rem;
    overflow-wrap: break-word;
    font-weight: 600;
    line-height: 52px;
    margin: 0;
`;
const InfoText = styled.p`
    color: ${props => props.theme.bannerTextColor};
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
    box-shadow: 24px 48px 88px rgba(24,35,52,0.32);
    transform: perspective(1000px) rotateY(-13deg) rotateX(5deg) rotateZ(7deg) scaleY(0.9) scaleX(0.95) translateX(-3%) translateY(-3%);
    transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
        box-shadow: 0 48px 88px rgba(24,35,52,0.32);
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1) translateX(0) translateY(0);
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
                    <PricingButton>Get started</PricingButton>
                </ButtonsContainer>
            </InfoContainer>
            <ImageContainer>
                <Image src={Placeholder} alt="placeholder" />
            </ImageContainer>
        </BannerContainer>
    );
};

export default withFade(Banner);
