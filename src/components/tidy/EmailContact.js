import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const ContactContainer = styled.div`
    background-color: ${props => props.theme.buttonBgColor};
    padding: 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;
`;

const Title = styled.p`
    font-family: ${props => props.theme.headerFontFamily}, serif;
    color: ${props => props.theme.buttonTextColor};
    font-size: 2rem;
    font-weight: 900;
`;

const InputContainer = styled.div`
    background-color: ${props => props.theme.sectionsBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
`;

const Input = styled.input`
    outline: none;
    border: none;
    font-size: 1.2rem;
    flex: 5;
`;

const EmailContact = () => {
    return (
        <ContactContainer>
            <Title>For previewing layouts and visual?</Title>
            <InputContainer>
                <Input type="text" placeholder="Your email" />
                <svg width="16" height="12" style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg"><path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#2174EA"></path></svg>
            </InputContainer>
        </ContactContainer>
    );
};

export default withFade(EmailContact);
