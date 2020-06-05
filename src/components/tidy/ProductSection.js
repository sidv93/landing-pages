import React from 'react';
import styled from 'styled-components';
import ProductHeader from './ProductHeader';
import ProductCards from './ProductCards';

const ProductContainer = styled.section`
    min-height: 100vh;
    background-color: ${props => props.theme.productSectionBgColor};
    padding: 60px 180px;
`;

const ProductSection = () => {
    return (
        <ProductContainer>
            <ProductHeader />
            <ProductCards />
        </ProductContainer>
    );
};

export default ProductSection;