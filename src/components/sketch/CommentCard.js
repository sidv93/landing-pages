import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const CardContainer = styled.div`
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const IconContainer = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CommentTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, sans-serif;
    color: ${props => props.theme.headerFontColor};
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
`;

const Text = styled.p`
    color: ${props => props.theme.sectionTextColor};
    font-family: ${props => props.theme.sectionFontFamily}, sans-serif;
    font-size: 1.1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 30px;
`;


const CommentCard = ({comment}) => {
    return (
        <CardContainer>
            <IconContainer>
                <img src={comment.icon} alt="comment-icon" />
            </IconContainer>
            <CommentTitle>{comment.title}</CommentTitle>
            <Text>{comment.text}</Text>
        </CardContainer>
    );
};

export default withFade(CommentCard);