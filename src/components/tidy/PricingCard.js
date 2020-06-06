import React from 'react';
import styled from 'styled-components';
import unavailable from '../../assets/tidy/unavailable.png';
import available from '../../assets/tidy/available.png';

const CardContainer = styled.div`
    background-color: ${props => props.theme.sectionsBgColor};
    min-width: 300px;
    padding: 20px 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    color: ${props => props.theme.textColor};
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
    color: ${props => props.theme.sectionsTextColor};
    font-size: 1.1rem;
    padding: 5px 0;
`;
const Button = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    padding: 12px 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
    border: none;
    outline: none;
    font-size: 1.1rem;
    cursor: pointer;
`;
const Image = styled.img`
    margin-right: 15px;
`;

const PricingCard = ({ price, info }) => {
    console.log(info);
    return (
        <CardContainer>
            <Header>
                <div>
                    <span style={{ color: '#627183', fontWeight: 500 }}>$</span>
                    <span style={{ fontSize: '3.2rem', fontWeight: 900, fontFamily: 'Playfair Display' }}>{price}</span>
                    <span style={{ color: '#95A4B4', fontSize: '1.5rem', fontWeight: 500 }}>/m</span>
                </div>
                <HeaderText>Lorem ipsum is a common text</HeaderText>
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

export default PricingCard;