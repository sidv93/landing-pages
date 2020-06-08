import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/twist/illustration-section-05.svg';
import ToolkitHeader from './ToolkitHeader';
import ToolkitLeft from './ToolkitLeft';
import ToolkitRight from './ToolkitRight';
import Background1 from '../../assets/twist/illustration-element-03.svg';
import FeatureImage1 from '../../assets/twist/feature-split-image-01.svg';
import Background2 from '../../assets/twist/illustration-element-04.svg';
import FeatureImage2 from '../../assets/twist/feature-split-image-02.svg';
import FeatureImage3 from '../../assets/twist/feature-split-image-03.svg';
import Background3 from '../../assets/twist/illustration-element-05.svg';

const Toolkit = styled.section`
    position: relative;
    min-height: 100vh;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        left: 50%;
        top: 0;
        background-position: center top;
        transform: translate(-50%);
        z-index: -2;
    }
`;

const ToolkitContainer = styled.div`
    padding: 60px 180px;
`;

const ToolkitSection = () => {
    return (
        <Toolkit>
            <ToolkitContainer>
                <ToolkitHeader />
                <ToolkitLeft background={Background1} image={FeatureImage1} />
                <ToolkitRight background={Background2} image={FeatureImage2} />
                <ToolkitLeft background={Background3} image={FeatureImage3} />
            </ToolkitContainer>
        </Toolkit>
    );
};

export default ToolkitSection;