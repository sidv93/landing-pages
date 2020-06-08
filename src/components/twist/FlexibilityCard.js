import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const CardContainer = styled.div`
    min-width: 250px;
    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMTYuNzU2JSIgeTE9IjIzLjgxNiUiIHgyPSItMjAuNDE1JSIgeTI9IjkwLjQ4OSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTBFMUZGIiBzdG9wLW9wYWNpdHk9Ii4yNCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFMEUxRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTcyIDMwLjk0MUwwIDU3LjE0N1YwaDcyeiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+),linear-gradient(45deg, #4346DE 15%, #6E71E6 85%);
`;

const FlexTitle = styled.h1`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
`;

const FlexText = styled.p`
    color: ${props => props.theme.bannerTextColor};
    font-size: 1.1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 30px;
`;

const FlexibilityCard = ({flex}) => {
    return (
        <CardContainer>
            <IconContainer>
                <img src={flex.icon} alt="flexibility-icon" />
            </IconContainer>
            <FlexTitle>{flex.title}</FlexTitle>
            <FlexText>{flex.text}</FlexText>
        </CardContainer>
    );
};

export default withFade(FlexibilityCard);