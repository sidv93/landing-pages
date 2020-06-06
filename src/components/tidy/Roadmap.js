import React from 'react';
import styled from 'styled-components';
import RoadmapRight from './RoadmapRight';
import RoadmapLeft from './RoadmapLeft';

const RoadmapContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 20px 0;
`;

const Roadmap = () => {
    return (
        <RoadmapContainer>
            <RoadmapRight date="november 2019" />
            <RoadmapLeft date="decemeber 2019" />
            <RoadmapRight date="january 2020" />
            <RoadmapLeft date="february 2020" />
        </RoadmapContainer>
    );
};

export default Roadmap;
