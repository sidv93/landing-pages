import React from 'react';
import styled from 'styled-components';
import ContainerBg from '../../assets/sketch/cta-illustration.svg';
import Background from '../../assets/sketch/illustration-section-04.svg';

const StartedSection = styled.section`
    position: relative;
    padding: 60px 180px;
    background-color: #1E2238;
    z-index: 0;

    &:after {
        position: absolute;
        content: '';
        width: 100%;
        max-width: 100%;
        height: 150px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        bottom: -10px;
        background-position: center bottom;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const GetStartedContainer = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #3F52FF;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${ContainerBg});
`;

const Title = styled.h1`
    margin: 0;
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.buttonTextColor};
    font-size: 2.4rem;
    font-weight: 700;
`;

const Text = styled.p`
    font-family: ${props => props.theme.sectionFontFamily}, sans-serif;
    text-align: center;
    font-size: 1.2rem;
    padding: 0 180px;
    /* line-height: 35px; */
    color: #D8DCFF;
`;

const Button = styled.button`
    cursor: pointer;
    margin: 20px 0;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${props => props.theme.getStartedButtonColor};
    color: ${props => props.theme.buttonTextColor};
    text-transform: uppercase;
    border: none;
    outline: none;
`;

const GetStartedSection = () => {
    return (
        <StartedSection>
            <GetStartedContainer>
                <Title>Nisi porta lorem mollis aliquam ut.</Title>
                <Text>
                    A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts.
                </Text>
                <Button>Get started</Button>
            </GetStartedContainer>
        </StartedSection>
    );
};

export default GetStartedSection;