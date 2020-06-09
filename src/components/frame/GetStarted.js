import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/frame/illustration-element-08.svg';
import Bg from '../../assets/frame/cta-illustration.svg'

const Section = styled.section`
    padding: 0 180px;
    position: relative;
    background-color: #232E3B;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 100%;
        height: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        left: 50%;
        top: 70%;
        transform: translate(-50%, -50%);
        z-index: -2;
    }
`;
const ContactContainer = styled.div`
    background-color: #2F75FF;
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${Bg});
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding-bottom: 40px;
`;
const Title = styled.p`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.buttonTextColor};
    font-size: 2rem;
    font-weight: 600;
`;
const Button = styled.button`
    background-color: ${props => props.theme.getStartedBgColor};
    color: ${props => props.theme.buttonTextColor};
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-weight: 700;
    border: none;
    outline: none;
    cursor: pointer;
`;

const GetStarted = () => {
    return (
        <Section>
            <ContactContainer>
                <Title>For previewing layouts and visual?</Title>
                <Button>Get started now</Button>
            </ContactContainer>
        </Section>

    );
};

export default GetStarted;
