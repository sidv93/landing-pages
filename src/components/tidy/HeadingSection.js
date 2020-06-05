import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Banner from './Banner';

const HeadingSectionContainer = styled.section`
    background-color: ${props => props.theme.bgColorPrimary};
    min-height: 100vh;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 150px), 0 92%);
`

const HeadingSection = () => {
    return (
        <HeadingSectionContainer>
            <Header />
            <Banner />
        </HeadingSectionContainer>
    );
};

export default HeadingSection;
