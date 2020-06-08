import React from 'react';
import styled from 'styled-components';
import unavailable from '../../assets/twist/unavailable.png';
import available from '../../assets/twist/available.png';
import PricingIcon from '../../assets/twist/pricing-icon.svg';
import withFade from '../../utils/withFade';

const CardContainer = styled.div`
    background-color: ${props => props.theme.buttonTextColor};
    min-width: 300px;
    padding: 20px 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 32px 64px rgba(24,35,52,0.24);
`;
const Header = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    &:after {
        content: '';
        max-width: 80px;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
`;
const HeaderText = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.bannerTextColor};
`;
const Title = styled.h2`
    font-size: 1rem;
    font-weight: 700;
`;
const ListElement = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &:before {
        content: '';
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
`
const ListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #E7ECF2;
        height: 1px;
    }
`;
const Included = styled.p`
    color: ${props => props.theme.bannerTextColor};
    font-size: 1.1rem;
    padding: 5px 0;
`;
const Button = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    padding: 12px 20px;
    font-weight: 500;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    ${({ middle }) => middle && `
    background-color: #55C3F5;
  `}
`;
const Image = styled.img`
    margin-right: 15px;
`;

const PricingCard = ({ price, info, middle }) => {
    return (
        <CardContainer>
            <Header>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                        <span style={{ color: '#768DB2', fontSize: '3rem', fontWeight: 500 }}>$</span>
                        <span style={{ fontSize: '3.2rem', fontWeight: 900, fontFamily: 'IBM Plex Sans' }}>{price}</span>
                    </div>
                    {
                        middle && (<div><img src={PricingIcon} height="40" width="40" alt="pricing-icon" /></div>)
                    }
                </div>
                <HeaderText>/month, billed annually</HeaderText>
            </Header>
            <Title>What's included</Title>
            <ListContainer>
                {
                    info.map((item, index) => {
                        return (
                            <ListElement key={String(index)}>
                                <Image src={item.available ? available : unavailable} height="24" width="24" alt="available" />
                                <Included>{item.text}</Included>
                            </ListElement>
                        )
                    })
                }
            </ListContainer>
            <Button>Start free trial</Button>
        </CardContainer>
    );
};

export default withFade(PricingCard);