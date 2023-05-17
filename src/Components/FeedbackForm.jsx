import React from 'react'
import styled from "styled-components";
import Review from '..//assets/review.png'

const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-top : 10px;
  
  @media only screen and (max-width: 480px) {
    text-align: center;
    justify-content: center;
  }
 `;

 const ImageWrapper = styled.div`
     align-items: center;
    justify-content: center;
    margin-top :2px;
  
  
  @media only screen and (max-width: 480px) {
    text-align: center;
    justify-content: center;
  }
 `;

 const Img = styled.div`

    background-color: #00008B;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 1px solid transparent;
    
 
 `;

 const ImgItem = styled.div`
    border-radius: 1rem;
    overflow: hidden;
`;

 const ReviewImag = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
 
 `;

const ReviewButton = styled.button`
  background-color: yellow;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const FeedbackForm = () => {

    const googleReviewLink = "https://g.page/r/CQGSCuY8PDJpEB0/review";

  const handleReview = (reviewLink) => {
    // This function can redirect the user to your Google Business page
    // or open a pop-up where they can leave a review.
    window.open(reviewLink, "_blank");
  };

  return (
    <FormContainer>
     <ImageWrapper>
      <Img>
       <ImgItem>
        <ReviewImag src={Review}/>
         <ReviewButton onClick={()=>handleReview(googleReviewLink)}>
            Leave a Review on Google
         </ReviewButton>

        </ImgItem>
       </Img>
     </ImageWrapper>
  </FormContainer>
  )
}

export default FeedbackForm
