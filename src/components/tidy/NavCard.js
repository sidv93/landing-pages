import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: 1px solid #E7ECF2;
    box-shadow: 0 1px 4px rgba(16,29,45,0.08);
`;

const CardTitle = styled.h1`
    font-size: 1.1rem;
    color: #101D2D;
`;


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: ${props => props.active ? 1 : 0.5};

    &:hover {
        opacity: 1;
    }
`;

const NavCard = ({ feedback }) => {
    return (
        <CardContainer>
            <IconContainer>
                <img src={feedback.icon} alt="feedback-nav" height="60px" width="60px" />
            </IconContainer>
            <CardTitle>{feedback.title}</CardTitle>
        </CardContainer>
    );
};

export default NavCard;