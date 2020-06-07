import React from 'react';
import styled from 'styled-components';
import FeatureTitle1 from '../../assets/twist/feature-title-icon-01.svg';
import FeatureTitle2 from '../../assets/twist/feature-title-icon-02.svg'
import FeatureTitle3 from '../../assets/twist/feature-title-icon-03.svg'
import FeatureTitle4 from '../../assets/twist/feature-title-icon-04.svg'
import FeatureTitle5 from '../../assets/twist/feature-title-icon-05.svg'
import FeatureTitle6 from '../../assets/twist/feature-title-icon-06.svg'
import FlexibilityCard from './FlexibilityCard';

const title = 'Flexibility';
const text = 'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design for previewing layouts.';

const flexs = [
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

const FlexibilityContainer = styled.section`
    min-height: 100vh;
    padding: 60px 180px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
`;

const FlexibilitySection = () => {
    return (
        <FlexibilityContainer>
            {
                flexs.map((flex, index) => <FlexibilityCard key={String(index)} flex={flex} />)
            }
        </FlexibilityContainer>
    );
};

export default FlexibilitySection;