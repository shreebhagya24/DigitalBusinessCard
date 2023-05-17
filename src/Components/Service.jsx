import React from 'react'
import styled from 'styled-components';
import Packing from '../assets/packing.png'
import Loading from '../assets/unloading.png'
import Home from '../assets/home relocation.png'
import Office from '../assets/office relocation.png'
import Car from '../assets/car transport.png'
import Bike from '../assets/bike packing.png'
import HeavyShifting from '../assets/heavy shifting.png'
import Storage from '../assets/storage.png'
import Insurance from '../assets/Insurance.png'
import Tracking from '../assets/Tracking.png'


const ServiceWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top : 10px;
  
  @media only screen and (max-width: 480px) {
    text-align: center;
    justify-content: center;
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

 const HeadingText = styled.h1 `
 `;

 const ImageWrapper = styled.div`
    text-align: center;
    display: grid;
    grid-template-rows: repeat(1 1fr);
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top :5px;
  
  
  @media only screen and (max-width: 480px) {
    text-align: center;
    justify-content: center;
  }
 `;

 const Img = styled.div`

    background-color: #FFFF8A;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 1px solid transparent;
    
 
 `;

 const ImgItem = styled.div`
    border-radius: 1rem;
    overflow: hidden;
`;

 const ServiceImag = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
 
 `;

 const Btn = styled.a`
     margin-bottom: 0.5rem;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #00008B;
     color: white;
     border: none;
     border-radius: 3px;
     padding: 10px 10px;
     text-decoration: none;
     cursor: pointer;
    margin: 1rem 5rem 0.5rem 5rem;
 
 `;

 const ImgText = styled.h2`
    font-family:Roboto; 
    font-weight: bolder;
    color: black;
    margin-top: 1px; 
 
 `;


 const data = [

    {
      id: 1,
      image: Packing,
      title: 'Packing&Moving',
      text: "Packing & Moving",
      nme: "ENQUIRY NOW",
      enquiry: 'https://adpackers.com/Default.aspx',
    },

    {
        id: 2,
        image: Loading,
        title: 'Loading&unloading',
        text: "Loading & Unloading",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 3,
        image: Home,
        title: 'Homerelocation',
        text: "Home Relocation",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 4,
        image: Office,
        title: 'Officelocation',
        text: "Office Relocation",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 5,
        image: Car,
        title: 'Car',
        text: "Car Transport",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 6,
        image: Bike,
        title: 'bike',
        text: "Bike Transport",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 7,
        image: HeavyShifting,
        title: 'HeavyMachinaryShifting',
        text: "Heavy Machinary Shifting",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 8,
        image: Storage,
        title: 'Storage',
        text: "Storage & Warehousing",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 9,
        image: Insurance,
        title: 'Insuarance',
        text: "Insuarance",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      },

      {
        id: 10,
        image: Tracking,
        title: 'Tracking',
        text: "Tracking",
        nme: "ENQUIRY NOW",
        enquiry: 'https://adpackers.com/Default.aspx',
      }]


const Service = () => {

     return (
    <ServiceWrapper>
      <Heading><HeadingText>Services</HeadingText></Heading>

      <ImageWrapper>
         {data.map(({ id, image, title, text, nme, enquiry }) => {
          return (

            <Img key={id} >
            <ImgText>{text}</ImgText>
            
            <ImgItem>
                <ServiceImag src={image} alt={title} />
              </ImgItem>
              
              <Btn href={enquiry} target="_blank" rel="noopener noreferrer">{nme}</Btn>
               

            </Img>

          )
        })}


      </ImageWrapper>
      
    </ServiceWrapper>
  )
}

export default Service
