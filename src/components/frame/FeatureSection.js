import React from 'react';
import styled from 'styled-components';
import FeatureTitle1 from '../../assets/frame/feature-tile-icon-01.svg';
import FeatureTitle2 from '../../assets/frame/feature-tile-icon-02.svg'
import FeatureTitle3 from '../../assets/frame/feature-tile-icon-03.svg'
import FeatureTitle4 from '../../assets/frame/feature-tile-icon-04.svg'
import FeatureTitle5 from '../../assets/frame/feature-tile-icon-05.svg'
import FeatureTitle6 from '../../assets/frame/feature-tile-icon-06.svg'
import FeatureCard from './FeatureCard';
import FeatureHeader from './FeatureHeader';

const title = 'Robust Workflow';
const text = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.';

const features = [
    {
        icon: FeatureTitle1, title, text
    },
    {
        icon: FeatureTitle2, title, text
    },
    {
        icon: FeatureTitle3, title, text
    },
    {
        icon: FeatureTitle4, title, text
    },
    {
        icon: FeatureTitle5, title, text
    },
    {
        icon: FeatureTitle6, title, text
    },
];

const Section = styled.section`
    min-height: 100vh;
    padding: 60px 180px;

    @media(max-width: 960px) {
        max-width: 960px;
        padding: 0;
    }
`;
const FeatureContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;

    @media(max-width: 960px) {
        display: block;
    }
`;


const FeatureSection = () => {
    return (
        <Section>
            <FeatureHeader />
            <FeatureContainer>
                {
                    features.map((feature, index) => <FeatureCard key={String(index)} feature={feature} />)
                }
            </FeatureContainer>
        </Section>

    );
};

export default FeatureSection;