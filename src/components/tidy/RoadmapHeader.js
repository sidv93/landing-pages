import React from 'react';
import styled from 'styled-components';
import withFade from '../../utils/withFade';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 150px;
    text-align: center;
`;

const HeaderTitle = styled.h1`
    font-family: ${props => props.theme.headerFontFamily}, serif;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
`;

const HeaderText = styled.p`
    font-size: 1.4rem;
    color: ${props => props.theme.sectionsTextColor};
    letter-spacing: 0.3px;
    text-align: center;
    overflow-wrap: break-word;
    word-wrap: break-word;
`;

const RoadmapHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Product roadmap
            </HeaderTitle>
            <HeaderText>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus in ornare.
            </HeaderText>
        </HeaderContainer>
    );
};

export default withFade(RoadmapHeader);