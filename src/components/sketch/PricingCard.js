import React from 'react';
import styled from 'styled-components';
import unavailable from '../../assets/sketch/unavailable.png';
import available from '../../assets/sketch/available.png';
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
    color: #95A1AE;
`;
const Title = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerColor};
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
    font-family: ${props => props.theme.textFontFamily}, sans-serif;
    color: ${props => props.theme.sectionTextColor};
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
`;
const Image = styled.img`
    margin-left: 35px;
`;

const PricingCard = ({price, info}) => {
    return (
        <CardContainer>
            <Header>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <span style={{ color: '#768DB2', fontSize: '2rem', fontWeight: 500 }}>$</span>
                        <span style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'IBM Plex Sans' }}>{price}</span>
                        <span style={{ color: '#95A4B4', fontSize: '1.5rem', fontWeight: 500 }}>/m</span>
                    </div>
                </div>
                <HeaderText>Lorem ipsum is a common text</HeaderText>
            </Header>
            <Title>What's included</Title>
            <ListContainer>
                {
                    info.map((item, index) => {
                        return (
                            <ListElement key={String(index)}>
                                <Included>{item.text}</Included>
                                <Image src={item.available ? available : unavailable} height="24" width="24" alt="available" />
                            </ListElement>
                        )
                    })
                }
            </ListContainer>
            <Button>Free 14 day trial</Button>
        </CardContainer>
    );
};

export default PricingCard;