import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    background-color: transparent;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 40px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        background-color: #D3DDEC;
        display: block;
        width: 100%;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #D3DDEC;
        display: block;
        width: 100%;
    }
`;

const Title = styled.p`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-size: 2rem;
    font-weight: 600;
`;

const Button = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
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
        <ContactContainer>
            <Title>Nisi porta lorem mollis aliquam ut.</Title>
            <Button>Get started</Button>
        </ContactContainer>
    );
};

export default GetStarted;