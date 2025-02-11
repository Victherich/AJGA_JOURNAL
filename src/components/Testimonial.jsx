import React from "react";
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import CTA from "./CTA";
import lp1 from '../Images/lp1.jpg'

const TestimonialContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
    background-image:url(${lp1});
    background-size:cover;
    background-position:center;
    position:relative;
    display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:100%;

  h2{
    // color:rgba(0,0,255,0.5);
    color:white;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
// background-color:rgba(0,0,0,0.2);
padding:10px;
border-radius:10px;
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

const Grid = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
  // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
   position:relative;
   width:100%;
`;

const TestimonialBox = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width:300px;
`;

const Testimonials = () => {
  return (
    <TestimonialContainer id="testimonials">
      <h2>What Our Authors and Researchers Say</h2>
      <Grid>
      <TestimonialBox>
  <FaThumbsUp size={40} style={{ color: "white" }} />
  <h3>Amazing Experience</h3>
  <p>"The peer review process was seamless, and the team was very professional." - Dr. Alice</p>
</TestimonialBox>

<TestimonialBox>
  <FaThumbsUp size={40} style={{ color: "white" }} />
  <h3>Global Reach</h3>
  <p>"My research reached a wider audience, thanks to World Journal." - Dr. Mark</p>
</TestimonialBox>

{/* New Testimonials for Researchers */}
<TestimonialBox>
  <FaThumbsUp size={40} style={{ color: "white" }} />
  <h3>Reliable Academic Platform</h3>
  <p>"Publishing in this journal enhanced the credibility of my research." - Prof. Susan</p>
</TestimonialBox>

<TestimonialBox>
  <FaThumbsUp size={40} style={{ color: "white" }} />
  <h3>Excellent Support</h3>
  <p>"The editorial team provided invaluable feedback that improved my work significantly." - Dr. James</p>
</TestimonialBox>

      </Grid>
      <CTA/>
    </TestimonialContainer>
  );
};

export default Testimonials;
