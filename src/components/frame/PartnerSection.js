import React from 'react';
import styled from 'styled-components';
import Client1 from '../../assets/frame/clients-01.svg';
import Client2 from '../../assets/frame/clients-02.svg';
import Client3 from '../../assets/frame/clients-03.svg';
import Client4 from '../../assets/frame/clients-04.svg';
import Client5 from '../../assets/frame/clients-05.svg';

const Section = styled.section`
    padding: 50px 180px;
`;

const PartnerContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        background-color: #D3DDEC;
        display: block;
        width: 100%;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: #D3DDEC;
        display: block;
        width: 100%;
    }
`;
const Partner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`

`;

const PartnerSection = () => {
    return (
        <Section>
            <PartnerContainer>
                <Partner>
                    <Image src={Client1} alt="client" />
                </Partner>
                <Partner>
                    <Image src={Client2} alt="client" />
                </Partner>
                <Partner>
                    <Image src={Client3} alt="client" />
                </Partner>
                <Partner>
                    <Image src={Client4} alt="client" />
                </Partner>
                <Partner>
                    <Image src={Client5} alt="client" />
                </Partner>
            </PartnerContainer>
        </Section>

    );
};

export default PartnerSection;