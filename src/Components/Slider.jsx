import React from 'react'
import { useState, useEffect} from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    width: 100%;
  height: 200px;
  }
  
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;



const Slider = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const prevSlide = () => {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setActiveIndex((activeIndex + 1) % images.length);
    };

    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 2000);
  
      return () => clearInterval(intervalId);
    });
  
    return (
      <SliderWrapper>
        {images.map((image, index) => (
          <Slide key={index} active={index === activeIndex}>
            <Image src={image} alt={`Slide ${index}`} />
          </Slide>
        ))}
        <PrevButton onClick={prevSlide}>Prev</PrevButton>
        <NextButton onClick={nextSlide}>Next</NextButton>
      </SliderWrapper>
      );
    }

export default Slider
