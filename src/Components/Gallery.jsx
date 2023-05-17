import React,  {useEffect} from 'react';
import styled from 'styled-components';
import Packing1 from '../assets/packing1.jpg';
import Packing2 from '../assets/packing2.jpg';
import Packing3 from '../assets/packing3.jpg';
import Packing5 from '../assets/packing5.jpg';
import Packing6 from '../assets/packing6.jpg';
import Packing7 from '../assets/packing7.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

const GalleryWrapper = styled.div`
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
    display: grid;
    grid-template-rows: repeat(1 1fr);
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top :5px;
    `;

    const GalleryImg = styled.img`
    display: block;
    ${'' /* width: 100%;
    height: auto;
    object-fit: cover; */}
    width: 300px;
    height: 200px;
    object-fit: cover;
   `;

 const data = [

    {
      id: 1,
      image: Packing1,
    },

    {
        id: 2,
        image: Packing2,
      },
      {
        id: 3,
        image: Packing3,
      },
      {
        id: 4,
        image: Packing5,
      },
      {
        id: 5,
        image: Packing6,
      },
      {
        id: 6,
        image: Packing7,
      }]



const Gallery = () => {

    useEffect(()=>{Aos.init({duration:500})},[]);

  return (
    <GalleryWrapper>
       <Heading><HeadingText>Photo Gallery</HeadingText></Heading>

        <ImageWrapper>
            {data.map(({id, image}) => {
                return(
                    <GalleryImg key={id} src={image} data-aos="fade-up" data-aos-anchor-placement="top-center" ></GalleryImg>

                )
            }

            )

            }
        </ImageWrapper>
         

      
    </GalleryWrapper>
  )
}

export default Gallery
