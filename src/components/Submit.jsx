import React from "react";
import styled,{keyframes} from "styled-components";
import registerImg from "../Images/registerImg3.png";
import { useNavigate } from "react-router-dom";


const buttonSlide = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  `

const SubmitContainer = styled.section`
  background-image: url(${registerImg});
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 20px;
  text-align: center;
`;

const SubmitText = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;

  h2 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 10px;
    text-align: left;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  background: linear-gradient(to right, #3a1c71, #d76d77, #3a1c71);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
   animation: ${buttonSlide} 3s linear infinite;
   background-size: 200% 200%;

  &:hover {
    // background: #d76d77;
  }
`;

const Submit = () => {
  const navigate = useNavigate()
  return (
    <SubmitContainer id="submit">
      <SubmitText>
        <h2>How to Submit</h2>
        <p>Submitting your paper is easy! Follow the steps:</p>
        <ol>
          <p>1. Register an account on our platform.</p>
          <p>2. Upload your research paper and details.</p>
          <p>3. Our editorial board will review your submission.</p>
        </ol>
      </SubmitText>
      <Button onClick = {()=>navigate('/authordashboard')}>Submit Your Paper</Button>
    </SubmitContainer>
  );
};

export default Submit;
