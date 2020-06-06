import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/tidy/logo.svg';
import Facebook from '../../assets/tidy/facebook.svg';
import Twitter from '../../assets/tidy/twitter.svg';
import Instagram from '../../assets/tidy/instagram.svg';
import EmailContact from './EmailContact';

const FooterContainer = styled.footer`
    padding: 25px 180px;;
    background-color: ${props => props.theme.bgColorPrimary};
    min-height: 15vh;
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
`;

const Rights = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.textColor};
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
    color: ${props => props.theme.textColor};
    cursor: pointer;

    &:hover {
        color: #2174EA;
    }
`;

const Image = styled.img`
    height: 20px;
    width: 20px;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

const FooterSection = () => {
    return (
        <FooterContainer>
            <EmailContact />
            <SocialsContainer>
                <img src={Logo} style={{ height: '30px', width: '30px' }} alt="logo" />
                <SocialContainer>
                    <Image src={Facebook} alt="facebbok" />
                    <Image src={Twitter} alt="twitter" />
                    <Image src={Instagram} alt="instagram" />
                </SocialContainer>
            </SocialsContainer>
            <SocialsContainer>
                <Rights>© 2020 Tidy, all rights reserved</Rights>
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
