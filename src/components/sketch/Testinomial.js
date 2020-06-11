import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme.buttonTextColor};
    min-width: 200px;
    box-shadow: 0 32px 64px rgba(16,22,65,0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    transform: ${props => props.transform ? props.transform : 'translateY(0)'};
`;
const Icon = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    align-self: center;
    box-shadow: 0 8px 32px rgba(16,22,65,0.24);
`;
const Text = styled.p`
    color: #606690;
    font-family: ${props => props.theme.sectionFontFamily};
    text-align: center;
    line-height: 30px;
    font-size: 1.2rem;
    position: relative;
    padding: 25px 0;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #DEE1F7;
    }
`;
const Author = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    font-family: ${props => props.theme.sectionFontFamily};
    margin: 0;
`;
const Company = styled.a`
    font-size: 1rem;
    color: #467FFF;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
        text-decoration: underline;
    }
`;
const Testinomial = ({testimonial}) => {
    return (
        <Container transform={testimonial.transform}>
            <Icon src={testimonial.icon} alt="profile-picture" />
            <Text>{testimonial.text}</Text>
            <Author>{testimonial.author}</Author>
            <Company>{testimonial.company}</Company>
        </Container>
    );
};

export default Testinomial;