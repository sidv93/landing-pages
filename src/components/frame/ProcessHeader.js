import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/frame/features-split-icon.svg';
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
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    margin:0;
    
`;

const HeaderText = styled.p`
    font-size: 1.2rem;
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
    letter-spacing: 0.3px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: 0 80px;
`;
const Image = styled.img`
    box-shadow: 0 8px 24px rgba(35,46,59,0.16);
    border-radius: 50%;
    margin: 20px 0;
`;

const ProcessHeader = () => {
    return (
        <HeaderContainer>
            <Image src={Icon} alt="split-icon" />
            <HeaderTitle>
                Simplify your design process
            </HeaderTitle>
            <HeaderText>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
            </HeaderText>
        </HeaderContainer>
    );
};

export default ProcessHeader;