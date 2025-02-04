import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const CardContainer = styled.div`
    background-color: ${props => props.theme.sectionsBgColor};
    display: flex;
    flex-direction: column;
    min-height: 200px;
    box-shadow: 0 4px 16px rgba(16,29,45,0.08);
    padding-bottom: 20px;
`;

const ImageContainer = styled.img`
    height: 200px;
    width: 350px;
`;

const CardTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0 20px;
`;

const CardText = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.sectionsTextColor};
    letter-spacing: 0.3px;
    line-height: 28px;
    padding: 0 20px;
`;

const Link = styled.a`
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.buttonBgColor};
    }
`

const ProductCard = ({ card }) => {
    return (
        <CardContainer>
            <ImageContainer src={card.icon} alt="news-image" />
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
            <Link>
                Read more
                <svg width="16" height="12" style={{margin: "0 10px"}} xmlns="http://www.w3.org/2000/svg"><path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#2174EA"></path></svg>
            </Link>
        </CardContainer>
    );
};

export default withFade(ProductCard);