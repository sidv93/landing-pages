import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 150px;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, serif;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
`;

const HeaderText = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.sectionsTextColor};
    letter-spacing: 0.3px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
`;

const ProductHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
            Product news and updates
        </HeaderTitle>
            <HeaderText>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.
        </HeaderText>
        </HeaderContainer>
    );
};

export default withFade(ProductHeader);