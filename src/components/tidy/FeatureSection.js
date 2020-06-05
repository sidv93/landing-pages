import React from 'react';
import styled from 'styled-components';
import FeatureTitle1 from '../../assets/tidy/feature-title-icon-1.svg';
import FeatureTitle2 from '../../assets/tidy/feature-title-icon-2.svg'
import FeatureTitle3 from '../../assets/tidy/feature-title-icon-3.svg'
import FeatureTitle4 from '../../assets/tidy/feature-title-icon-4.svg'
import FeatureTitle5 from '../../assets/tidy/feature-title-icon-5.svg'
import FeatureTitle6 from '../../assets/tidy/feature-title-icon-6.svg'
import FeatureCard from './FeatureCard';

const title = 'Robust Workflow';
const text = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.';

const features = [
    {
        icon: FeatureTitle1,title, text
    },
    {
        icon: FeatureTitle2,title, text
    },
    {
        icon: FeatureTitle3,title, text
    },
    {
        icon: FeatureTitle4,title, text
    },
    {
        icon: FeatureTitle5,title, text
    },
    {
        icon: FeatureTitle6,title, text
    },
];

const FeatureContainer = styled.section`
    min-height: 90vh;
    background-color: ${props => props.theme.sectionsBgColor};
    padding: 60px 180px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
`;

const FeatureSection = () => {
    return (
        <FeatureContainer>
            {
                features.map((feature, index) => <FeatureCard key={String(index)} feature={feature} />)
            }
        </FeatureContainer>
    );
};

export default FeatureSection;
