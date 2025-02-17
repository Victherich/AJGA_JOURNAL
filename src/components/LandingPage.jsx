

// // import React from "react";
// // import styled, { keyframes } from "styled-components";
// // import { FaBook, FaNewspaper, FaPenNib, FaUsers, FaSearch } from "react-icons/fa";
// // import heroVideo from "../Images/media1.mp4";

// // // Keyframes for animations
// // const fadeIn = keyframes`
// //   from { opacity: 0; transform: translateY(-10px); }
// //   to { opacity: 1; transform: translateY(0); }
// // `;

// // // Styled Components
// // const Container = styled.div`
// //   font-family: "Arial", sans-serif;
// // //   background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
// // background: linear-gradient(to right, #3a1c71, #d76d77, #3a1c71);
// //   color: white;
// // `;

// // const Header = styled.header`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 20px 50px;
// //   background: rgba(0, 0, 0, 0.5);
// //   position: fixed;
// //   width: 100%;
// //   top: 0;
// //   z-index: 1000;
// // `;

// // const Logo = styled.h1`
// //   font-size: 24px;
// //   font-weight: bold;
// // `;

// // const Nav = styled.nav`
// //   display: flex;
// //   gap: 20px;
// // `;

// // const NavLink = styled.a`
// //   color: white;
// //   text-decoration: none;
// //   font-size: 18px;
// //   transition: 0.3s;
// //   &:hover {
// //     color: #ffaf7b;
// //   }
// // `;

// // const HeroSection = styled.section`
// //   position: relative;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   height: 100vh;
// //   text-align: center;
// //   animation: ${fadeIn} 1.5s ease-in-out;
// //   overflow: hidden;

// //   video{
// //      position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover;

// //   }
// // `;



// // const HeroText = styled.div`
// //   background: rgba(0, 0, 0, 0.6);
// //   padding: 30px;
// //   border-radius: 10px;
// //   z-index:1;
// // `;

// // const Button = styled.button`
// //   margin-top: 20px;
// //   padding: 15px 30px;
// //   font-size: 18px;
// //   background: #ffaf7b;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   transition: 0.3s;
// //   &:hover {
// //     background: #d76d77;
// //   }
// // `;

// // const Section = styled.section`
// //   padding: 60px 20px;
// //   text-align: center;
// // `;

// // const FeaturesGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// //   gap: 20px;
// //   margin-top: 30px;
// // `;

// // const FeatureBox = styled.div`
// //   background: rgba(255, 255, 255, 0.1);
// //   padding: 20px;
// //   border-radius: 10px;
// // `;

// // const Footer = styled.footer`
// //   background: rgba(0, 0, 0, 0.7);
// //   text-align: center;
// //   padding: 20px;
// // `;

// // const HomePage = () => {
// //   return (
// //     <Container>
// //       <Header>
// //         <Logo>World Journal</Logo>
// //         <Nav>
// //           <NavLink href="#about">About</NavLink>
// //           <NavLink href="#issues">Issues</NavLink>
// //           <NavLink href="#submit">Submit</NavLink>
// //           <NavLink href="#contact">Contact</NavLink>
// //         </Nav>
// //       </Header>

// //       <HeroSection>
    
// // <video
// // autoPlay
// // muted
// // loop
// // >
// // <source src={heroVideo} type="video/mp4" />
// // </video>
// //         <HeroText>
// //           <h1>Welcome to the World Journal of Research</h1>
// //           <p>Advancing knowledge and innovation globally</p>
// //           <Button>Submit Your Paper</Button>
// //         </HeroText>
// //       </HeroSection>

// //       <Section id="about">
// //         <h2>Why Publish With Us?</h2>
// //         <FeaturesGrid>
// //           <FeatureBox>
// //             <FaBook size={40} />
// //             <h3>High Impact Factor</h3>
// //             <p>Indexed in top global databases.</p>
// //           </FeatureBox>
// //           <FeatureBox>
// //             <FaPenNib size={40} />
// //             <h3>Rigorous Peer Review</h3>
// //             <p>Ensuring research quality and integrity.</p>
// //           </FeatureBox>
// //           <FeatureBox>
// //             <FaUsers size={40} />
// //             <h3>Renowned Editorial Board</h3>
// //             <p>Experts from top institutions.</p>
// //           </FeatureBox>
// //         </FeaturesGrid>
// //       </Section>

// //       <Footer>
// //         <p>&copy; 2025 World Journal. All rights reserved.</p>
// //       </Footer>
// //     </Container>
// //   );
// // };

// // export default HomePage;





// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaBook, FaNewspaper, FaPenNib, FaUsers, FaSearch, FaThumbsUp } from "react-icons/fa";
// import heroVideo from "../Images/media1.mp4";
// import ai from "../Images/ai.jpg";
// import quantum from "../Images/quantum.jpg";

// import registerImg from '../Images/registerImg3.png'

// // Keyframes for animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const buttonSlide = keyframes`
//     0% {
//       background-position: 0% 0%;
//     }
//     100% {
//       background-position: 200% 0%;
//     }
//   `

// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Styled Components
// const Container = styled.div`
//   font-family: "Arial", sans-serif;
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 50px;
//   background: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   font-style: italic;
//   font-family:Brush Script MT, Brush Script Std, cursive ;
//   color:white;
//   cursor:pointer;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// const NavLink = styled.a`
//   color: white;
//   text-decoration: none;
//   font-size: 18px;
//   transition: 0.3s;
//   &:hover {
//     color: #ffaf7b;
//   }
// `;

// const HeroSection = styled.section`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 1.5s ease-in-out;
//   overflow: hidden;

//   video {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const HeroText = styled.div`
// //   background: rgba(0, 0, 0, 0.6);
//   padding: 30px;
//   border-radius: 10px;
//   z-index: 1;
  

//   h1{
//     font-size:3.5rem;
//       text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//       color:white;
//   }
//       p{
//       text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
//       font-size:1.5rem;
//       color:white;
//       }
// `;

// const Button = styled.button`
//   margin-top: 20px;
//   padding: 15px 30px;
//   font-size: 18px;
// //   background: #ffaf7b;
// //   background: linear-gradient(270deg, #00f, #0f0, #00f);
//   background: linear-gradient(to right, #3a1c71, #d76d77, #3a1c71);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: 0.3s;
//   animation: ${buttonSlide} 3s linear infinite;
//    background-size: 200% 200%;
//   &:hover {
//     background: #d76d77;
//   }


 

//     animation: ${buttonSlide} 2s linear infinite;
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   text-align: center;
//   animation: ${fadeUp} 1.5s ease-in-out;

//   h2{
//     color:rgba(0,0,255,0.5);
//     font-size:2rem;
//   }

//   h3{
//     color:rgba(0,0,255,0.5);
//   }
//     p{
//         color:#444;
//     }
// `;


// const HowToSubmitTexts = styled.div`
//     background-color:rgba(0,0,0,0.5);
//     display:flex;
//     flex-direction:column;
//     padding:20px;
//     gap:10px;
//     border-radius:10px;

//      p{
//     margin-bottom:10px;
//     text-align:left;
//   }
// `

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
//   margin-top: 30px;

 
// `;

// const FeatureBox = styled.div`
//   background: rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   border-radius: 10px;
// `;

// const Card = styled.div`
//   background: rgba(255, 255, 255, 0.2);
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
//   transition: 0.3s;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   border-radius: 10px;
// `;

// const Footer = styled.footer`
//   background: rgba(0, 0, 0, 0.7);
//   text-align: center;
//   padding: 20px;
// `;

// const HomePage = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>AJGA Journal</Logo>
//         <Nav>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#issues">Issues</NavLink>
//           <NavLink href="#submit">Submit</NavLink>
//           <NavLink href="#contact">Contact</NavLink>
//         </Nav>
//       </Header>

//       <HeroSection>
//         <video autoPlay muted loop>
//           <source src={heroVideo} type="video/mp4" />
//         </video>
//         <HeroText>
//           <h1>Welcome to AJGA  <br/>Journal</h1>
//           <p>Advancing knowledge and innovation globally</p>
//           {/* <Button>Submit Your Paper</Button> */}
//         </HeroText>
//       </HeroSection>

//       <Section id="about">
//         <h2>Why Publish With Us?</h2>
//         <FeaturesGrid>
//           <FeatureBox>
//             <FaBook size={40} style={{color:"rgba(0,0,255,0.3)"}}/>
//             <h3>High Impact Factor</h3>
//             <p>Indexed in top global databases.</p>
//           </FeatureBox>
//           <FeatureBox>
//             <FaPenNib size={40} style={{color:"rgba(0,0,255,0.3)"}}/>
//             <h3>Rigorous Peer Review</h3>
//             <p>Ensuring research quality and integrity.</p>
//           </FeatureBox>
//           <FeatureBox>
//             <FaUsers size={40} style={{color:"rgba(0,0,255,0.3)"}}/>
//             <h3>Renowned Editorial Board</h3>
//             <p>Experts from top institutions.</p>
//           </FeatureBox>
//         </FeaturesGrid>
//       </Section>

//       <Section id="issues">
//         <h2>Latest Issue Highlights</h2>
//         <FeaturesGrid>
//           <Card>
//             <CardImage src={quantum} alt="Article 1" />
//             <h3>Exploring Quantum Computing</h3>
//             <p>Leading-edge research in quantum algorithms.</p>
//           </Card>
//           <Card>
//             <CardImage src={ai} alt="Article 2" />
//             <h3>AI and Machine Learning Innovations</h3>
//             <p>Understanding the future of AI technology.</p>
//           </Card>
//         </FeaturesGrid>
//       </Section>

//       <Section id="editorial-board">
//         <h2>Editorial Board</h2>
//         <FeaturesGrid>
//           <FeatureBox>
//             <img src="https://via.placeholder.com/150" alt="Editor 1" />
//             <h3>Dr. John Smith</h3>
//             <p>Professor of Computer Science</p>
//           </FeatureBox>
//           <FeatureBox>
//             <img src="https://via.placeholder.com/150" alt="Editor 2" />
//             <h3>Dr. Emma White</h3>
//             <p>Expert in AI & Data Science</p>
//           </FeatureBox>
//         </FeaturesGrid>
//       </Section>

//       <Section id="submit" 
//       style={{backgroundImage:`url(${registerImg})`,
//       backgroundSize:"cover",
//       backgroundPosition:'bottom',
//       display:"flex",
//       justifyContent:"center",
//       alignItems:"center",
//       flexDirection:"column"
//       }}>
//         <HowToSubmitTexts>
//         <h2>How to Submit</h2>
//         <p>Submitting your paper is easy! Follow the steps:</p>
//         <ol>
//           <p>1. Register an account on our platform.</p>
//           <p>2. Upload your research paper and details.</p>
//           <p>3. Our editorial board will review your submission.</p>
//         </ol>

//         </HowToSubmitTexts>
//         <Button>Submit Your Paper</Button>
//       </Section>

//       <Section id="testimonials">
//         <h2>What Our Authors Say</h2>
//         <FeaturesGrid>
//           <FeatureBox>
//             <FaThumbsUp size={40} />
//             <h3>Amazing Experience</h3>
//             <p>"The peer review process was seamless, and the team was very professional." - Dr. Alice</p>
//           </FeatureBox>
//           <FeatureBox>
//             <FaThumbsUp size={40} />
//             <h3>Global Reach</h3>
//             <p>"My research reached a wider audience, thanks to World Journal." - Dr. Mark</p>
//           </FeatureBox>
//         </FeaturesGrid>
//       </Section>

//       <Section id="cta">
//         <h2>Get Involved Today</h2>
//         <p>Submit your research, and join a global network of researchers.</p>
//         <Button>Submit Now</Button>
//       </Section>

//       <Footer>
//         <p>&copy; 2025 World Journal. All rights reserved.</p>
//       </Footer>
//     </Container>
//   );
// };

// export default HomePage;





import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutFeature from './AboutFeature'
import Issues from './Issues'
import EditorialBoard from './EditorialBoard'
import Submit from './Submit'
import Testimonials from './Testimonial'
import CTA from './CTA'
import Footer from './Footer'
import styled from 'styled-components'
import Sidebar from './SideBar'
import JournalIntro from './Intro'
import PublishingPolicyIntro from './PublishingPolicyIntroComponent'





const LandingPage = () => {

const Div1 = styled.div`
display:flex;
justify-content:center;
width:100%;

`

const Div2 = styled.div`
width:25%;

@media(max-width:768px){
  display:none;
}

`

const Div3 = styled.div`
  width:75%;
@media(max-width:768px){
  width:100%;
}
`


  return (
    <div>
      <Hero/>
 <Div1>

<Div2>
<Sidebar/>
</Div2>

<Div3>
<JournalIntro/>
<AboutFeature/>
{/* <EditorialBoard/> */}
<Submit/>
<Testimonials/>
<PublishingPolicyIntro/>
</Div3>



</Div1>
    </div>
   
  )
}

export default LandingPage

