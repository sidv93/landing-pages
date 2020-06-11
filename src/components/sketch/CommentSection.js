import React from 'react';
import styled from 'styled-components';
import CommentTile1 from '../../assets/sketch/feature-tile-icon-01.svg';
import CommentTile2 from '../../assets/sketch/feature-tile-icon-02.svg'
import CommentTile3 from '../../assets/sketch/feature-tile-icon-03.svg'
import CommentTile4 from '../../assets/sketch/feature-tile-icon-04.svg'
import CommentTile5 from '../../assets/sketch/feature-tile-icon-05.svg'
import CommentTile6 from '../../assets/sketch/feature-tile-icon-06.svg'
import CommentCard from './CommentCard';
import Background from '../../assets/sketch/illustration-section-02.svg';

const title = 'Tailored Comments';
const text = 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups.';

const comments = [
    {
        icon: CommentTile1, title, text
    },
    {
        icon: CommentTile2, title, text
    },
    {
        icon: CommentTile3, title, text
    },
    {
        icon: CommentTile4, title, text
    },
    {
        icon: CommentTile5, title, text
    },
    {
        icon: CommentTile6, title, text
    },
];

const CommentsContainer = styled.section`
    min-height: 100vh;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 100%;
        height: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center top;
        left: 50%;
        top: 100px;
        transform: translate(-50%);
        z-index: -2;
    }
`;
const Comments = styled.div`
    padding: 60px 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 45px;
`;

const CommentSection = () => {
    return (
        <CommentsContainer>
            <Comments>
                {
                    comments.map((comment, index) => <CommentCard key={String(index)} comment={comment} />)
                }
            </Comments>
        </CommentsContainer>
    );
};

export default CommentSection;
