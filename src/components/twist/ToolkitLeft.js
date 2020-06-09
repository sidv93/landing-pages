import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const ToolkitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.p`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin: 0;
`;
const Text = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.bannerTextColor};
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 35px;
`;
const ImageContainer = styled.div`
    cursor: pointer;
    position: relative;
    margin-left: 20px;

    &:after {
        content: '';
        position: absolute;
        max-width: 300%;
        width: 300%;
        height: 200%;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: -175px;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
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

const ToolkitLeft = ({background, image}) => {
    return (
        <ToolkitContainer>
            <TextContainer>
                <Title>Lorem ipsum dolor sit</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </TextContainer>
            <ImageContainer background={background}>
                <Image src={image} alt="placeholder" />
            </ImageContainer>
        </ToolkitContainer>
    );
};

export default withFade(ToolkitLeft);