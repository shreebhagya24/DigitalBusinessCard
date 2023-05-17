import React from 'react'
import styled from 'styled-components';
import Logo1 from '../assets/logoA.png';
import BackgroundImg from '../assets/background.png';
import { MdCall, MdEmail, MdWhatsapp, MdLocationOn } from 'react-icons/md';
import { FaGlobe, FaInstagramSquare, FaLinkedin, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';




const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #00008B;
  color: #fff;
  margin-top : 10px;
  font-size: 15px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    text-align: center;
  }

`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  align-self: left;
  object-fit: contain;

  @media only screen and (max-width: 480px) {
    width: 50px;
   height: 50px;
   margin: auto;
  }
  `;

  const ButtonWrapper = styled.div`
    margin-top: 0.5rem;
  background-image: url(${BackgroundImg});
  background-size: cover;
  `;

  const ButtonWrapper1 =styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  
`;

const ButtonWrapper2 =styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  
`;

const ButtonWrapper3 =styled.div`
  justify-content: center;
  margin-top: 0.5rem;
  flex-direction: column;
  display: flex;
  
`;

const Button1 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00008B;
  color: yellow;
  border: none;
  border-radius: 3px;
  padding: 10px 10px;
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem 5rem 0.5rem 5rem;

  @media only screen and (max-width: 480px) {
    margin: 0.5rem 2rem 0.5rem 2rem;
  }
  
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

const ButtonIcon1 = styled(MdCall)`
  font-size: 20px;
  margin-right: 5px;
  color: yellow;
`;

const ButtonIcon2 = styled(MdWhatsapp)`
  font-size: 20px;
  margin-right: 5px;
  color: yellow;
`;

const ButtonIcon3 = styled(MdEmail)`
  font-size: 20px;
  margin-right: 5px;
  color: yellow;
`;

const ButtonIcon4 = styled(MdLocationOn)`
  font-size: 20px;
  margin-right: 5px;
  color: yellow;
`;

const ButtonIcon5 = styled(FaGlobe)`
  font-size: 20px;
  margin-right: 5px;
  color: yellow;
`;

const ButtonIcon6 = styled(MdLocationOn)`
font-size: 35px;
margin-right: 5px;
color: white;
`;

const ButtonIcon7 = styled(BsFillPersonFill)`
  font-size: 25px;
  margin-right: 5px;
  color: white;
`;



const SocialWrapper = styled.div`

display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

`;

const FacebookIcon = styled(FaFacebookSquare)`
  font-size: 30px;
  margin-left: 5px;
  color: yellow;

;
`;

const YoutubeIcon = styled(FaYoutube)`
  font-size: 30px;
  margin-left: 5px;
  color: yellow;
;
`;

const InstagramIcon = styled(FaInstagramSquare)`
  font-size: 30px;
  margin-left: 5px;
  color: yellow;
;
`;

const LinkedinIcon = styled(FaLinkedin)`
  font-size: 30px;
  margin-left: 5px;
  color: yellow;
;
`;




const Header1 = () => {
  return (
    <>
    <Header>
    <Logo src={Logo1}></Logo>
       <h1>Aakash Deep Packers & Movers</h1>
     </Header>

     <ButtonWrapper>
  
  <ButtonWrapper1>

      <Button href="tel:+919116633113" target="_blank" rel="noopener noreferrer">
      <ButtonIcon1 />
      <ButtonText>Call</ButtonText>
    </Button>

    <Button href="https://api.whatsapp.com/send?phone=9116633113" target="_blank" rel="noopener noreferrer">
      <ButtonIcon2 />
      <ButtonText>Whatsapp</ButtonText>
    </Button>
  </ButtonWrapper1>

    <ButtonWrapper1>
    <Button href="mailto:aakashdeeppackers@gmail.com" target="_blank" rel="noopener noreferrer">
      <ButtonIcon3 />
      <ButtonText>Mail</ButtonText>
    </Button>

    <Button href="https://goo.gl/maps/9C6SYyPoBKmkvm85A" target="_blank" rel="noopener noreferrer" >
      <ButtonIcon4 />
      <ButtonText>Location</ButtonText>
    </Button>
    </ButtonWrapper1>

    <ButtonWrapper2>
    <Button href="https://adpackers.com/" target="_blank" rel="noopener noreferrer">
      <ButtonIcon5 />
      <ButtonText>Website</ButtonText>
    </Button>
    </ButtonWrapper2>

    <ButtonWrapper3>
    <Button1 href="tel:+919116633113" target="_blank" rel="noopener noreferrer"> 
      <ButtonIcon7 />
      <ButtonText style={{fontsize: '15px'}}>Rinku Lal (Branch Manager)</ButtonText>
    </Button1>

    <Button1 href="https://goo.gl/maps/9C6SYyPoBKmkvm85A" target="_blank" rel="noopener noreferrer"> 
      <ButtonIcon6 />
      <ButtonText style={{textAlign: 'center'}}> Shop 64, Rajendra Nagar, 100 Feet Rd, behind New RTO, Udaipur, Rajasthan 313001</ButtonText>
    </Button1>
    </ButtonWrapper3>
     

    <SocialWrapper>
             
             <a href="https://www.facebook.com/aakashdeepmoverspackers/" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
             <a href="https://www.youtube.com/channel/UCVJ_PDZBWEkAJ3p2ZwWbsUQ" target="_blank" rel="noopener noreferrer"><YoutubeIcon/></a>
             <a href="https://www.instagram.com/aakashdeeppackers/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
             <a href="https://www.linkedin.com/in/aakash-deep-packers-and-movers-48584818a/" target="_blank" rel="noopener noreferrer"><LinkedinIcon/></a>

    </SocialWrapper>



</ButtonWrapper>

    

     </>
  )
}

export default Header1
