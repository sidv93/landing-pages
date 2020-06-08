import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/twist/logo.svg';
import Facebook from '../../assets/twist/facebook.svg';
import Twitter from '../../assets/twist/twitter.svg';
import Instagram from '../../assets/twist/instagram.svg';
import GetStarted from './GetStarted';
import Background from '../../assets/twist/illustration-section-08.svg';

const FooterContainer = styled.footer`
    padding: 25px 180px;;
    min-height: 15vh;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        bottom: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
`;

const Rights = styled.p`
    font-size: 0.9rem;
    color: ${props => props.theme.footerTextColor};
`;

const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
`;


const Link = styled.a`
    text-decoration: none;
    text-transform: capitalize;
    font-size: 0.9rem;
    color: ${props => props.theme.footerTextColor};
    cursor: pointer;
    text-align: right;

    &:hover {
        color: #2174EA;
    }
`;

const Image = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const FooterSection = () => {
    return (
        <FooterContainer>
            <GetStarted />
            <SocialsContainer>
                <img src={Logo} style={{ height: '30px', width: '30px' }} alt="logo" />
                <SocialContainer>
                    <Image src={Facebook} alt="facebbok" />
                    <Image src={Twitter} alt="twitter" />
                    <Image src={Instagram} alt="instagram" />
                </SocialContainer>
            </SocialsContainer>
            <SocialsContainer>
                <Rights>© 2020 Twist, all rights reserved</Rights>
                <Links>
                    <Link>contact</Link>
                    <Link>about us</Link>
                    <Link>FAQ's</Link>
                    <Link>support</Link>
                </Links>
            </SocialsContainer>
        </FooterContainer>
    );
};

export default FooterSection;