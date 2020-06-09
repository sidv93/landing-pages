import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/frame/logo.svg';
import Facebook from '../../assets/frame/facebook.svg';
import Twitter from '../../assets/frame/twitter.svg';
import Instagram from '../../assets/frame/instagram.svg';
import Background from '../../assets/frame/illustration-section-06.svg';

const FooterContainer = styled.footer`
    padding: 25px 180px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        background: #232E3B;
        z-index: -3;
    }

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 30px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 57%;
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
    font-size: 1rem;
    color: ${props => props.theme.linkTextColor};
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
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
    font-size: 1rem;
    color: ${props => props.theme.linkTextColor};
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
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