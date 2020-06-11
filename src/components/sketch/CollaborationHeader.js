import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 150px;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0 30px;
`;

const CollaborationHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Lorem ipsum is placeholder text commonly used in the graphic and print industries.
            </HeaderTitle>
        </HeaderContainer>
    );
};

export default CollaborationHeader;