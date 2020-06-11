import React from 'react';
import styled from 'styled-components';
import Testimonials from './Testimonials';

const Section = styled.section`
    position: relative;

    &:after {
        content: '';
        position: absolute;
    }
`;
const TestimonialContainer = styled.div`
    margin: 40px 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Header = styled.h1`
    font-size: 2.6rem;
    font-weight: 700;
    color: ${props => props.theme.headerFontColor};
    font-family: ${props => props.theme.headerFontFamily};

`;
const TestimonialSection = () => {
    return (
        <Section>
            <TestimonialContainer>
                <Header>Customer testimonials</Header>
                <Testimonials />
            </TestimonialContainer>
        </Section>
    );
};

export default TestimonialSection;