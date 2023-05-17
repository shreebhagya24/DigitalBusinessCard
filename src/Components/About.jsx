import React from 'react'
import styled from 'styled-components';
import Profile from '../assets/Company-Brochure.pdf';
import { MdFileDownload } from 'react-icons/md';


const AboutWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top : 10px;
  
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
 `;

 const Heading = styled.div`
  
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  background-color: #00008B;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    text-align: center;
  }
 `;

 const Para = styled.div`
  
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: black;
  margin-top : 5px;
  font-size: 20px;
  

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    text-align: center;
  }
 `;

 const HeadingText = styled.h1 `
 `;

 const ParaText = styled.h3 `
   font-family: 'Roboto', sans-serif;
   font-weight: bolder;
`;

const Downloadicon = styled(MdFileDownload)`
  font-size: 30px;
  margin-top: 2px;
  color: yellow;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #00008B;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;




const About = () => {
  return (
    <AboutWrapper>
       <Heading>
        <HeadingText>About Us</HeadingText>
       </Heading>

       <Para>
        <ParaText>Aakash Deep Packers and Movers Udaipur providing their best satisfactory services from last 10 years. Aakash Deep Packers and movers "Always give people more services than what they expect to get." We are having a list of thousands happy clients because "customer's perception is our reality." Aakash Deep Packers and Movers Udaipur An ISO 9001-2015 Certified Organization of Udaipur, Rajasthan. We understand your needs before doing anything for you. According to your requirements, we properly plan everything. Along with this, we take care of the documentation too. We will also give you the whole pricing structure which will make things much easier for you. The satisfaction of our clients is our biggest achievement.</ParaText>
       </Para>

       <Button href={Profile} download> 
        <ButtonText>Download Company Profile</ButtonText>
        <Downloadicon />
       </Button>

       

    </AboutWrapper>
  )
}

export default About
