import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

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
`;
const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const UsersLabel = styled.p`
    color: ${props => props.theme.buttonTextColor};
    font-size: 1.1rem;
`;
const Range = styled.div`
`;
const RangeSlider = styled.input`
    background-color: #2d3a4b;
    outline: none;
    transition: opacity 0.2s;
    opacity: 0.7;
    width: 100%;

    &:hover {
        opacity: 1;
    }
`;
const UserCount = styled.p`
    color: ${props => props.theme.textColor};
    font-size: 1.1rem;
    text-align: center;
`;
const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
`;

const PricingCards = () => {
    return (
        <PricingCardsContainer>
            <RangeContainer>
                <UsersLabel>How many users do you have?</UsersLabel>
                <Range>
                    <RangeSlider type="range" min="1" max="100" />
                </Range>
                <UserCount>2500</UserCount>
            </RangeContainer>
            <CardsContainer>
                <PricingCard info={tier1} price="27" />
                <PricingCard info={tier2} price="47" />
                <PricingCard info={tier3} price="67" />
            </CardsContainer>
        </PricingCardsContainer>
    );
};

export default PricingCards;