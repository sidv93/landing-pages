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

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 0;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    @media(max-width: 960px) {
        display: block;
        text-align: center;
        padding: 20px 10px;
    }
`;

const RightsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    @media(max-width: 960px) {
        display: block;
        text-align: center;
    }
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;

    @media(max-width: 960px) {
        display: block;
        text-align: center;
    }
`;

const Rights = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.linkColor};
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
    color: ${props => props.theme.linkColor};
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

    @media(max-width: 960px) {
        margin: 20px 20px;
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
            <RightsContainer>
                <Links>
                    <Link>contact</Link>
                    <Link>about us</Link>
                    <Link>FAQ's</Link>
                    <Link>support</Link>
                </Links>
                <Rights>© 2020 Twist, all rights reserved</Rights>

            </RightsContainer>
        </FooterContainer>
    );
};

export default FooterSection;