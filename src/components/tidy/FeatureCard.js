import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: ${props => props.theme.buttonBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FeatureTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, serif;
    font-weight: 800;
    font-size: 1.5rem;
`;

const FeatureText = styled.p`
    color: ${props => props.theme.sectionsTextColor};
    font-size: 1.2rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

const FeatureCard = ({feature}) => {
    return (
        <CardContainer>
            <IconContainer>
                <img src={feature.icon} alt="feature-icon" />
            </IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureText>{feature.text}</FeatureText>
        </CardContainer>
    );
};

export default FeatureCard;
