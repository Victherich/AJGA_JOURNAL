import React from "react";
import styled from "styled-components";
import quantum from "../Images/quantum.jpg";
import ai from "../Images/ai.jpg";

const IssuesContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  position:relative;

  h2{
    color:rgba(0,0,255,0.5);
    font-size:2rem;
  }
    h3{
        color:rgba(0,0,255,0.5);
    }
        p{
            color:#444;
        }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;

  
      
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  cursor:pointer;

 

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Issues = () => {
  return (
    <IssuesContainer id="issues">
      <h2>Latest Issue Highlights</h2>
      <FeaturesGrid>
        <Card>
          <CardImage src={quantum} alt="Quantum Computing" />
          <h3 style={{color:"rgba(0,0,255,0.5)"}}>Exploring Quantum Computing</h3>
          <p>Leading-edge research in quantum algorithms.</p>
        </Card>
        <Card>
          <CardImage src={ai} alt="AI Innovations" />
          <h3 style={{color:"rgba(0,0,255,0.5)"}}>AI and Machine Learning Innovations</h3>
          <p>Understanding the future of AI technology.</p>
        </Card>
      </FeaturesGrid>
    </IssuesContainer>
  );
};

export default Issues;
