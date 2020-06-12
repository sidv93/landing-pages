import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

    @media(max-width: 960px) {
        margin: auto;
        max-width: 960px;
    }
`;

const NavlinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 960px) {
        display: none;
    }
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
    margin: 0 30px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #2174EA
    }
`;

const Header = ({logo}) => {
    const history = useHistory();
    return (
        <HeaderContainer>
            <img src={logo} style={{ height: '30px', width: '30px' }} alt="logo" />
            <NavlinksContainer>
                <SecLink onClick={() => history.push('/frame')}>Frame</SecLink>
                <SecLink onClick={() => history.push('/twist')}>Twist</SecLink>
                <SecLink onClick={() => history.push('/tidy')}>Tidy</SecLink>
                <SecLink onClick={() => history.push('/sketch')}>Sketch</SecLink>
                <Button>Sign up</Button>
            </NavlinksContainer>
        </HeaderContainer>
    );
};

export default Header;