import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 150px;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
`;

const HeaderText = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.bannerTextColor};
    letter-spacing: 0.3px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 0 60px;
`;

const ToolkitHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Bold startup toolkit
        </HeaderTitle>
            <HeaderText>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
        </HeaderText>
        </HeaderContainer>
    );
};

export default withFade(ToolkitHeader);