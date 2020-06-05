import React from 'react';
import styled from 'styled-components';
import FeedbackHeader from './FeedbackHeader';
import FeedbackNav from './FeedbackNav';

const FeedbackContainer = styled.section`
    min-height: 100vh;
    background-color: ${props => props.theme.sectionsBgColor};
    padding: 60px 180px;
`;

const FeedbackSection = () => {
    return (
        <FeedbackContainer>
            <FeedbackHeader />
            <FeedbackNav />
        </FeedbackContainer>
    );
};

export default FeedbackSection;
