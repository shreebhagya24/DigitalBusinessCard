import React from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components';

const VideoContainer = styled.div`
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

 const YutubeWrapper = styled.div`
   align-items: center;
    justify-content: center;
    margin-top :5px;
  
  
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
 `;


const VideoPlayer = ({ videoId }) => {

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

  return (
    <VideoContainer>
    <Heading><HeadingText>Customer Review</HeadingText></Heading>
      <YutubeWrapper>
      <YouTube videoId={videoId} opts={opts} />
      </YutubeWrapper>
    </VideoContainer>
  )
  }



  export default VideoPlayer
