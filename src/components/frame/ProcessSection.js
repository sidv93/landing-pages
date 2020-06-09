import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/frame/illustration-section-03.svg';
import ProcessHeader from './ProcessHeader';
import ProcessLeft from './ProcessLeft';
import ProcessRight from './ProcessRight';
import Background1 from '../../assets/frame/illustration-element-03.svg';
import FeatureImage1 from '../../assets/frame/features-split-top-01.png';
import Background2 from '../../assets/frame/illustration-element-04.svg';
import FeatureImage2 from '../../assets/frame/features-split-top-02.png';
import FeatureImage3 from '../../assets/frame/features-split-top-03.png';
import Background3 from '../../assets/frame/illustration-element-05.svg';


const Process = styled.section`
    position: relative;
    min-height: 100vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100px;
        max-width: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: 145px;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const ProcessContainer = styled.div`
    margin: 0 180px;
    border-bottom: 1px solid #DFE5EB;;
`;

const ProcessSection = () => {
    return (
        <Process>
            <ProcessContainer>
                <ProcessHeader />
                <ProcessLeft background={Background1} secondaryImg={FeatureImage1} />
                <ProcessRight background={Background2} secondaryImg={FeatureImage2} />
                <ProcessLeft background={Background3} secondaryImg={FeatureImage3} />
            </ProcessContainer>
        </Process>
    );
};

export default ProcessSection;