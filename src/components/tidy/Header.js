import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/tidy/logo.svg';

const HeaderContainer = styled.div`
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 180px;
`;

const NavlinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    font-size: 1rem;
    padding: 10px 25px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    letter-spacing: 0.7px;

    &:hover {
        background-color: #2f7deb;
    }
`;

const SecLink = styled.a`
    font-size: 1.1rem;
    color: ${props => props.theme.textColor};
    text-decoration: none;
    margin: 0 60px;
    letter-spacing: 0.7px;
    font-weight: 500;

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
