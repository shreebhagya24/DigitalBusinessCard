import React from 'react'
import styled from 'styled-components';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Header1 from './Components/Header1';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import VideoPlayer from './Components/VideoPlayer';
import FeedbackForm from './Components/FeedbackForm';
import ContactUs from './Components/ContactUs';
import Image1 from './assets/slider1.png'
import Image2 from './assets/skider2.png'
import Image3 from './assets/slider3.png'


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
  color: #333;
  margin-left: 30%;
  margin-right: 30%;
  
  @media only screen and (max-width: 480px) {
    margin: 0 auto;
  }
  
`;

const Footer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;



const App = () => {

    const images = [
        Image1,
        Image2,
        Image3,
      ];


  return (
    <>
    <AppWrapper>
    <Slider images={images} />
    <Header1 />
    <About />
    <Service />
    <Gallery />
    <VideoPlayer videoId="3BtK6G1v_Tw"/>
    <FeedbackForm/>
    <ContactUs />
    <Footer>
        <p>&copy; Aakash Deep Packers and Movers</p>
      </Footer>
    </AppWrapper>
      </>
      
);
};

    export default App
