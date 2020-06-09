import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';
import PrimaryImage from '../../assets/frame/features-split-image.svg';

const ToolkitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 80px 0;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`;
const Title = styled.p`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin: 0;
`;
const Text = styled.p`
    font-size: 1.2rem;
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 35px;
`;
const BannerContainer = styled.div`
    position: relative;
    /* width: 100%; */
    /* min-width: 520px; */

    &:after {
        content: '';
        position: absolute;
        max-width: 200%;
        width: 200%;
        height: 200%;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: contain;
        left: 50%;
        top: 50%;
        background-position: center;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`;
const BackgroundImage = styled.img`
    /* width: 100%;
    height: auto;
    max-width: 100%;
    overflow: visible; */
`;
const ImageContainer = styled.div`
    position: absolute;
    width: 140%;
    max-width: 140%;
    top: -13%;
    left: -26%;
`;
const Image = styled.img`
    height: 500px;
    width: 739px;
    overflow: visible;
    /* overflow: visible; */
    /* box-shadow: 24px 48px 88px rgba(24,35,52,0.32); */
`;

const ProcessRight = ({background, secondaryImg}) => {
    return (
        <ToolkitContainer>
            <BannerContainer background={background}>
                <BackgroundImage src={PrimaryImage} alt="bg-img" />
                <ImageContainer >
                    <Image src={secondaryImg} alt="placeholder" />
                </ImageContainer>
            </BannerContainer>
            <TextContainer>
                <Title>Data-driven insights</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </TextContainer>
        </ToolkitContainer>
    );
};

export default withFade(ProcessRight);