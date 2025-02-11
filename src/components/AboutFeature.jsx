import React from "react";
import styled from "styled-components";
import { FaBook, FaPenNib, FaUsers } from "react-icons/fa";
import Issues from "./Issues";
import h1 from '../Images/h1.jpg'
import lp1 from '../Images/lp1.jpg'
import lp2 from '../Images/lp2.jpg'

const AboutContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-image:url(${lp2});
  background-size:cover;
  background-position:center;
  position:relative;
  margin-top:10px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:100%;

  h2{
//   color:rgba(0,0,255,0.5);
color:white;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
// background-color:rgba(0,0,0,0.2);
border-radius:10px;
padding:10px;
  font-size:2rem;
  position:relative;
  }
  h3{
    // color:#444;
    color:rgba(0,0,255,0.7);
    position:relative;
  }
    p{
        color:#444;
        position:relative;
    }


    &::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(255,255,255,0.9);
    }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  position:relative;
  width:100%;
`;

const FeatureBox = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
`;

const AboutFeature = () => {
  return (
    <AboutContainer id="about">
      <h2>Why Research and Publish With Us?</h2>
      <FeaturesGrid>
        <FeatureBox>
          <FaBook size={40} 
          style={{ 
            // color: "rgba(0,0,255,0.4)" ,
            color:"white"
            }} />
          <h3>High Impact Factor</h3>
          <p>Indexed in top global databases.</p>
        </FeatureBox>
        <FeatureBox>
          <FaPenNib size={40} 
          style={{ 
            // color: "rgba(0,0,255,0.4)",
                color:"white"
           }} />
          <h3>Rigorous Peer Review</h3>
          <p>Ensuring research quality and integrity.</p>
        </FeatureBox>
        <FeatureBox>
          <FaUsers size={40} 
          style={{ 
            // color: "rgba(0,0,255,0.4)" ,
            color:"white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)"
            }} />
          <h3>Renowned Editorial Board</h3>
          <p>Experts from top institutions.</p>
        </FeatureBox>
      </FeaturesGrid>
      <Issues/>
    </AboutContainer>
  );
};

export default AboutFeature;
