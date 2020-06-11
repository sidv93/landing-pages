import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/sketch/illustration-section-03.svg';
import CollaborationHeader from './CollaborationHeader';
import CollaborationLeft from './CollaborationLeft';
import CollaborationRight from './CollaborationRight';

import Background1 from '../../assets/sketch/illustration-element-02.svg';
import FeatureImage1 from '../../assets/sketch/features-split-top-01.png';

import Background2 from '../../assets/sketch/illustration-element-03.svg';
import FeatureImage2 from '../../assets/sketch/features-split-top-02.png';

import FeatureImage3 from '../../assets/sketch/features-split-top-03.png';
import Background3 from '../../assets/sketch/illustration-element-04.svg';


const Collaboration = styled.section`
    position: relative;
    min-height: 100vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: -10px;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const CollaborationContainer = styled.div`
    margin: 0 180px;
    border-bottom: 1px solid #DFE5EB;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #e8eaf1;
    }
`;

const CollaborationSection = () => {
    return (
        <Collaboration>
            <CollaborationContainer>
                <CollaborationHeader />
                <CollaborationLeft background={Background1} secondaryImg={FeatureImage1} />
                <CollaborationRight background={Background2} secondaryImg={FeatureImage2} />
                <CollaborationLeft background={Background3} secondaryImg={FeatureImage3} />
            </CollaborationContainer>
        </Collaboration>
    );
};

export default CollaborationSection;