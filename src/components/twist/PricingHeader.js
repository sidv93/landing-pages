import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    color: ${props => props.theme.buttonTextColor};
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

const PricingHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Simple pricing
            </HeaderTitle>
        </HeaderContainer>
    );
};

export default withFade(PricingHeader);