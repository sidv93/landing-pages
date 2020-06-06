import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    padding: 30px 0;
    position: relative;
    width: 50%;
    left: 50%;

    &:before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #E7ECF2;
        height: 100%;
    }
`;
const Container = styled.div`
    position: relative;
`;
const Date = styled.div`
    color: ${props => props.theme.textColor};
    text-transform: uppercase;
    font-size: 1rem;
    position: relative;
    padding-left: 30px;
    padding-top: 0;

    &:before {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #2174EA;
        position: absolute;
        left: -2.6px;
    }
`;
const RoadmapText = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
    padding-left: 30px;
    padding-top: 20px;
`;
const RoadmapElement = ({date}) => {
    return (
        <Root>
            <Container>
                <Date>{date}</Date>
                <RoadmapText>
                    Deployed a high-quality first release and conducted a market validation test
            </RoadmapText>
            </Container>
        </Root>
    );
};

export default RoadmapElement;