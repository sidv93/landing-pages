import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/frame/logo.svg';

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
    padding: 10px 25px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    text-align: center;
    letter-spacing: 0.7px;
    text-transform: uppercase;

    &:hover {
        background-color: #2f7deb;
    }
`;

const SecLink = styled.a`
    color: ${props => props.theme.linkTextColor};
    text-decoration: none;
    margin: 0 60px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
        color: #2174EA;
    }
`;
const Image = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Image src={Logo} alt="logo" />
            <NavlinksContainer>
                <SecLink href="">Secondary page</SecLink>
                <Button>Sign up</Button>
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;
