import React from 'react';
import styled from 'styled-components';
import TestimonialImg1 from '../../assets/sketch/testimonial-image-01.jpg';
import TestimonialImg2 from '../../assets/sketch/testimonial-image-02.jpg';
import TestimonialImg3 from '../../assets/sketch/testimonial-image-03.jpg';
import Background from '../../assets/sketch/illustration-testimonial.svg';
import Testimonial from './Testinomial';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore et dolore magna aliqua.';
const author = 'Erika Muliawan';
const company = 'appname';
const testimonials = [
    { icon: TestimonialImg1, text, author, company },
    { icon: TestimonialImg2, text, author, company, transform: 'translateY(50px)' },
    { icon: TestimonialImg3, text, author, company, transform: 'translateY(-50px)' }
]
const Container = styled.div`
    position: relative;
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;

    &:after {
        content: '';
        position: absolute;
        width: 200%;
        max-width: 200%;
        height: 630px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        left: 50%;
        top: 52%;
        transform: translate(-50%, -50%);
        z-index: -2;
    }
`;

const Testimonials = () => {
    return (
        <Container>
            {
                testimonials.map((item, index) => <Testimonial key={String(index)} testimonial={item} />)
            }
        </Container>
    );
};

export default Testimonials;