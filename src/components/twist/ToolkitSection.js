import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/twist/illustration-section-05.svg';
import ToolkitHeader from './ToolkitHeader';

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
    padding: 0 180px;;
`;

const ToolkitSection = () => {
    return (
        <Toolkit>
            <ToolkitContainer>
                <ToolkitHeader />
            </ToolkitContainer>
        </Toolkit>
    );
};

export default ToolkitSection;