import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    color: ${props => props.theme.headerTextColor};
    font-size: 3rem;
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

export default PricingHeader;