import React, { useState } from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';
import Background from '../../assets/frame/illustration-section-02.svg';

const text = 'Excepteur sint occaecat velit';
const tier3 = new Array(5).fill({ text,available: true });
const tier2 = new Array(4).fill({ text, available: true })
tier2.push({ text, available: false });
const tier1 = new Array(3).fill({ text, available: true });
tier1.push({ text, available: false });
tier1.push({ text, available: false });

const PricingCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    &:after {
        content: '';
        position: absolute;
        width: 200%;
        height: 640px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: calc(50% - 100px);
        background-position: center top;
        transform: translate(-50%, -50%);
        z-index: -2;
    }

    @media(max-width: 960px) {

    } 
`;
const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media(max-width: 960px) {
        display: block;
    }
`;

const ToggleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
`;

const BillText = styled.p`
    color: ${props => props.theme.dollarTextColor};
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 20px;
`;

const CheckboxContainer = styled.div`
    position: relative;
`;

const CheckboxBack = styled.div`
    width: 70px;
    height: 35px;
    background-color: #4346DE;
    border-radius: 35px;
`;

const CheckboxCircle = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    background-color: white;
    cursor: pointer;
    transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const PricingCards = () => {
    const [selected, setSelected] = useState(false);
    const [left, setLeft] = useState('0');
    const handleToggle = () => {
        setSelected(!selected);
        setLeft(!selected ? '50%' : '0');
    }
    return (
        <PricingCardsContainer>
            <ToggleContainer>
                <BillText>billed monthly</BillText>
                <CheckboxContainer>
                    <CheckboxBack />
                    <CheckboxCircle style={{left: left}} onClick={handleToggle} />
                </CheckboxContainer>
                <BillText>billed annually</BillText>
            </ToggleContainer>
            <CardsContainer>
                <PricingCard info={tier1} price="27" />
                <PricingCard info={tier2} price="47" />
                <PricingCard info={tier3} price="67" />
            </CardsContainer>
        </PricingCardsContainer>
    );
};

export default PricingCards;