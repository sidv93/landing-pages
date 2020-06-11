import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const Header = styled.h1`
    margin: 0;
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerFontColor};
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
`;
const Text = styled.p`
    font-family: ${props => props.theme.sectionFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
    font-size: 1.2rem;
    padding: 10px 130px;
    text-align: center;
    line-height: 35px;
`;
const Button = styled.button`
    font-family: ${props => props.theme.sectionFontFamily}, sans-serif;
    color: ${props => props.theme.buttonTextColor};
    background-color: ${props => props.theme.buttonBgColor};
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    padding: 20px 30px;
    border: none;
    outline: none;
`;
const BannerText = () => {
    return (
        <TextContainer>
            <Header>
                Landing template for startups
            </Header>
            <Text>
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </Text>
            <Button>Pricing and plans</Button>
        </TextContainer>
    );
};

export default BannerText;