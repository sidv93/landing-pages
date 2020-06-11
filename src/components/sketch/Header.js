import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/sketch/logo.svg';

const HeaderContainer = styled.header`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
`;

const NavlinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    font-family: ${props => props.theme.sectionFontFamily};
    font-size: 1rem;
    font-weight: 700;
    padding: 10px 25px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    &:hover {
        background-color: #2f7deb;
    }
`;

const SecLink = styled.a`
    font-size: 1rem;
    color: ${props => props.theme.linkColor};
    font-family: ${props => props.theme.sectionFontFamily};
    text-decoration: none;
    font-weight: 600;
    margin: 0 60px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
        color: #2174EA
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} style={{ height: '30px', width: '30px' }} alt="logo" />
            <NavlinksContainer>
                <SecLink href="">Secondary page</SecLink>
                <Button>Sign up</Button>
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;