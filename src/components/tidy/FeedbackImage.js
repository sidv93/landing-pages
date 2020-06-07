import React from 'react';
import styled from 'styled-components';
import NavImage from '../../assets/tidy/features-tabs-image.png';
import withFade from '../../utils/withFade';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 880px;
    height: 530px;
    box-shadow: 0 4px 16px rgba(16,29,45,0.08);
    align-self: center;
    margin: 30px 0;
`;

const FeedbackImage = () => {
    return (
        <ImageContainer>
            <img src={NavImage} alt="nav-image" width="860" height="510" />
        </ImageContainer>
    );
};

export default withFade(FeedbackImage);
