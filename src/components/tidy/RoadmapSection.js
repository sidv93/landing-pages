import React from 'react';
import styled from 'styled-components';
import RoadmapHeader from './RoadmapHeader';
import Roadmap from './Roadmap';

const RoadmapContainer = styled.section`
    min-height: 100vh;
    background-color: ${props => props.theme.sectionsBgColor};
    padding: 60px 180px;
`

const RoadmapSection = () => {
    return (
        <RoadmapContainer>
            <RoadmapHeader />
            <Roadmap />
        </RoadmapContainer>
    );
};

export default RoadmapSection;