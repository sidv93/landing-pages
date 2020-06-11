import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';
import PrimaryImage from '../../assets/sketch/features-split-image.svg';

const CollabContainer = styled.div`
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
`;
const ImageContainer = styled.div`
    position: absolute;
    width: 140%;
    max-width: 140%;
    top: -13%;
    left: -17%;
`;
const Image = styled.img`
    height: 100%;
    width: 90%;
    overflow: visible;
`;

const CollaborationRight = ({background, secondaryImg}) => {
    return (
        <CollabContainer>
            <BannerContainer background={background}>
                <BackgroundImage src={PrimaryImage} alt="bg-img" />
                <ImageContainer >
                    <Image src={secondaryImg} alt="placeholder" />
                </ImageContainer>
            </BannerContainer>
            <TextContainer>
                <Title>Do collaboration the right way</Title>
                <Text>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat.
                </Text>
            </TextContainer>
        </CollabContainer>
    );
};

export default CollaborationRight;