import React from 'react';
import styled from 'styled-components';
import FeedbackTab1 from '../../assets/tidy/feature-tab-icon-1.svg';
import FeedbackTab2 from '../../assets/tidy/feature-tab-icon-2.svg';
import FeedbackTab3 from '../../assets/tidy/feature-tab-icon-3.svg';
import FeedbackTab4 from '../../assets/tidy/feature-tab-icon-4.svg';
import NavCard from './NavCard';
import FeedbackImage from './FeedbackImage';

const feedbackText = 'Internal Feedback';

const feedbacks = [
    {
        icon: FeedbackTab1, title: feedbackText
    },
    {
        icon: FeedbackTab2, title: feedbackText
    },
    {
        icon: FeedbackTab3, title: feedbackText
    },
    {
        icon: FeedbackTab4, title: feedbackText
    }
];

const NavContainer = styled.div`
    padding: 60px 180px;
    display: flex;
    flex-direction: column;
`;

const NavBar = styled.nav`
    display: flex;
    flex: 1;
    justify-content: space-between;
`;

const FeedbackNav = () => {
    return (
        <NavContainer>
            <NavBar>
                {
                    feedbacks.map((feedback,index) => <NavCard key={String(index)} feedback={feedback} active={false} />) 
                }
            </NavBar>
            <FeedbackImage />
        </NavContainer>
    );
};

export default FeedbackNav;
