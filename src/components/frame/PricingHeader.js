import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    text-align: center;

    @media(max-width: 960px) {
        max-width: 100%;
        width: 100%;
    }
`;
const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;
const HeaderText = styled.p`
    font-size: 1.4rem;
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
    letter-spacing: 0.3px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 0 180px;

    @media(max-width: 960px) {
        padding: 0;
    }
`;
const PricingHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Simple pricing
            </HeaderTitle>
            <HeaderText>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
            </HeaderText>
        </HeaderContainer>
    );
};

export default withFade(PricingHeader);