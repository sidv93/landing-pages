import React from 'react';
import styled from 'styled-components';
import NewsImage1 from '../../assets/tidy/news-image-01.jpg';
import NewsImage2 from '../../assets/tidy/news-image-02.jpg';
import NewsImage3 from '../../assets/tidy/news-image-03.jpg';
import ProductCard from './ProductCard';

const cardTitle = 'How to build anything';
const cardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.';

const cards = [
    {
        icon: NewsImage1, title: cardTitle, text: cardText
    },
    {
        icon: NewsImage2, title: cardTitle, text: cardText
    },
    {
        icon: NewsImage3, title: cardTitle, text: cardText
    }
];

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 20px 0;
`;

const ProductCards = () => {
    return (
        <CardsContainer>
            {
                cards.map((card, index) => <ProductCard key={String(index)} card={card} /> )
            }
        </CardsContainer>
    );
};

export default ProductCards;