import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TestimonialImg1 from '../../assets/sketch/testimonial-image-01.jpg';
import TestimonialImg2 from '../../assets/sketch/testimonial-image-02.jpg';
import TestimonialImg3 from '../../assets/sketch/testimonial-image-03.jpg';
import CarouselElement from './CarouselElement';

const text = 'Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua enim adipiscing elit, sed do ad minim veniam.';
const elements = [
    {
        text, image: TestimonialImg1, active: true
    },
    {
        text, image: TestimonialImg2, active: false
    },
    {
        text, image: TestimonialImg3, active: false
    }
];
const indicators = [{active: true}, {active: false}, {active: false}];

const Section = styled.section`
    position: relative;
    padding: 60px 180px;
    background-color: #1E2238;
`;
const CarouselContainer = styled.div`

`;
const IndicatorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Indicator = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${props => props.active ? props.theme.buttonTextColor : '#8F96B0'};
    margin: 0 8px;
    cursor: pointer;
`;

const CarouselSection = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const changeCarouselElement = () => {
            elements[active].active = false;
            if (active === (elements.length - 1)) {
                elements[0].active = true;
                indicators[0].active = true;
                setActive(0);
            } else {
                elements[active + 1].active = true;
                indicators[active + 1].active = true
                setActive(prevActive => prevActive + 1);
            }
        }
        const interval = setInterval(changeCarouselElement, 4000);

        return () => clearInterval(interval);
    }, [active]);
    return (
        <Section>
            <CarouselContainer>
                {
                    elements.map((item, index) => <CarouselElement key={String(index)} data={item} />)
                }
            </CarouselContainer>
            <IndicatorContainer>
                {
                    indicators.map((item, index) => <Indicator key={String(index+10)} active={active === index} />)
                }
            </IndicatorContainer>
        </Section>
    );
};

export default CarouselSection;