import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const CardContainer = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const IconContainer = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 20px 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(35,46,59,0.16);
`;

const FeatureTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
    font-weight: 500;
    font-size: 1.3rem;
    margin: 0;
`;

const FeatureText = styled.p`
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
    font-size: 1.1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 30px;
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

export default withFade(FeatureCard);