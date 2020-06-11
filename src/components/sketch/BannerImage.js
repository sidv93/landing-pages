import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/sketch/hero-image.png';
import Bg from '../../assets/sketch/illustration-element-01b.svg';
import Bg1 from '../../assets/sketch/illustration-element-01.svg';

const Container = styled.div`
    position: relative;
    text-align: center;
    margin-top: 40px;

    &:before {
        position: absolute;
        content: '';
        width: 100vw;
        height: 120%;
        max-width: 100vw;
        background-image: url(${Bg});
        background-position: center bottom;
        background-size: cover;
        background-repeat: repeat;
        left: 50%;
        bottom: -65%;
        transform: translate(-50%);
        z-index: -3;
    }

    &:after {
        position: absolute;
        content: '';
        width: 200%;
        height: 200%;
        max-width: 200%;
        background-image: url(${Bg1});
        background-position: center;
        background-size: contain;
        background-repeat:no-repeat;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    }
`;
const Image = styled.img`
    max-width: 85%;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 24px 64px rgba(30,34,56,0.24);
`;

const BannerImage = () => {
    return (
        <Container>
            <Image src={HeroImage} placeholder="hero-image" />
        </Container>
    );
};

export default BannerImage;
