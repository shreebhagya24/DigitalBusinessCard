import React from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import Alert from 'react-bootstrap/Alert';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Section = styled.section`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;


&:after {
  content: " *";
  color: red;
  }
   
    `;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #00008B;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
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



const ContactUs = () => {

  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [shiftingType, setShiftingtype] = useState('');
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !contact || !email || !location || !shiftingType) {
      setErrorMessage('Please fill in all fields');
      return;}

    emailjs.sendForm('service_88n2d6p', 'template_hpehng9', form.current, 'tHHwcjqkSVgj-e7X1')
      .then((result) => {
        setShow(true);
        setName("")
        setContact("")
        setEmail("")
        setShiftingtype('')
        setLocation("")
        setErrorMessage('')
        console.log(result, "Email sent");

      }, (error) => {
          console.log(error.text);
      });

     
  };

  return (
    
          <Main>
          <Heading><HeadingText>Contact US!</HeadingText></Heading>
        
         <Section>
         {
            show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
             Your Email Succesfully Send 😊
             </Alert> : ""
          }
    
         
          <Form ref={form} onSubmit={sendEmail}>
          
          <Label htmlFor="name">Name</Label>
          <Input 
               type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}
               placeholder='Please enter name' required/>
          
            
            
            <Label htmlFor="contact">Contact No</Label>
            <Input 
               type="tel" 
               name="contact"
               value={contact}
               onChange={(e) => setContact(e.target.value)}
               placeholder='Please enter mobile no'
               required />

            <Label htmlFor="email">Email</Label>
            <Input 
               type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}
               placeholder='Please enter email' required/>

            <Label htmlFor="shifting-type">Shifting Type</Label>
            <Select id="shifting-type" name ='shiftingType' value={shiftingType} onChange={(e) => setShiftingtype(e.target.value)} required>
            <option value="">-- Select --</option>
            <option value="Local">Local Shifting</option>
            <option value="Domestic">Domestic Shifting</option>
            <option value="International">International Shifting</option>
           </Select>

            <Label htmlFor="location">Location</Label>
            <TextArea 
               type="text"
               name="location" 
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               placeholder='Please enter the location'
               required>
              </TextArea>
              {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}

            <Button type="submit" onClick={sendEmail} >Submit</Button>

          </Form>
        </Section>
      </Main>
      

      
        
  )
}

export default ContactUs
