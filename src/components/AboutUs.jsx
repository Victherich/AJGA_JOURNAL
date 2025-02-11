// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { FaUsers, FaBookOpen, FaGlobe, FaBalanceScale } from "react-icons/fa";
// import missionImage from "../Images/mission.jpg";
// import editorialImage from "../Images/editorial.jpg";
// import policiesImage from "../Images/policies.jpg";
// import indexingImage from "../Images/indexing.jpg";
// import Hero3 from "./Hero3";
// import aboutimg2 from '../Images/aboutimg4.jpg'

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; t
//     margin-top:10px;ransform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Styled Components
// const Container = styled.div`
//   margin-top:10px;
//   font-family: "Arial", sans-serif;
//   background: white;
//   color: #333;
//   padding: 60px 20px;
//   text-align: center;
//   animation: ${fadeIn} 1.5s ease-in-out;
//   background-image:url(${aboutimg2});
//   background-size:cover;
//   position:relative;


//     &::before{
//     content:'';
//     position:absolute;
//     top:0;
//     left:0;
//     width:100%;
//     height:100%;
//     background-color:rgba(255,255,255,0.5);
//     }

// `;

// const Section = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   max-width: 1200px;
//   margin: 40px auto;
//   background: rgba(255,255,255,0.7);
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   text-align: left;
//   position:relative;
  
//   @media (max-width: 768px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const Image = styled.img`
//   width: 50%;
//   border-radius: 10px;
//   @media (max-width: 768px) {
//     width: 100%;
//     margin-bottom: 20px;
//   }
// `;

// const Content = styled.div`
//   width: 50%;
//   padding: 20px;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const Title = styled.h2`
//   font-size: 32px;
//   margin-bottom: 20px;
//   color: rgba(0, 0, 255, 0.5);
// `;

// const Text = styled.p`
//   font-size: 18px;
//   line-height: 1.6;
// `;

// const Icon = styled.div`
//   font-size: 50px;
//   margin-bottom: 20px;
//   color: rgba(0, 0, 255, 0.5);
// `;

// const AboutUs = () => {
//   return (
//     <>
//     <Hero3/>
//         <Container>
        
//       <Section>
//         <Image src={missionImage} alt="Mission and Scope" />
//         <Content>
//           <Icon><FaBookOpen /></Icon>
//           <Title>Mission and Scope</Title>
//           <Text>
//             AJGA Journal of Research is dedicated to publishing groundbreaking
//             research across diverse disciplines. Our mission is to provide a
//             platform for scholars and researchers to share knowledge that impacts
//             the world positively.
//           </Text>
//         </Content>
//       </Section>

//       <Section>
        
//         <Content>
//           <Icon><FaUsers /></Icon>
//           <Title>Editorial Board Members</Title>
//           <Text>
//             Our esteemed editorial board consists of distinguished scholars from
//             top institutions worldwide, ensuring the highest research standards.
//           </Text>
//           <ul>
//             <li>Dr. Jane Smith - Harvard University</li>
//             <li>Dr. Robert Johnson - Oxford University</li>
//             <li>Dr. Linda Martinez - Stanford University</li>
//             <li>Dr. Ahmed Khan - University of Tokyo</li>
//           </ul>
//         </Content>
//         <Image src={editorialImage} alt="Editorial Board Members" />
//       </Section>

//       <Section>
//         <Image src={policiesImage} alt="Publishing Policies" />
//         <Content>
//           <Icon><FaBalanceScale /></Icon>
//           <Title>Publishing Policies</Title>
//           <Text>
//             We offer both Open Access and Subscription-based models to ensure
//             broad accessibility. Our rigorous peer-review process upholds research
//             integrity and quality.
//           </Text>
//         </Content>
//       </Section>

//       <Section>
        
//         <Content>
//           <Icon><FaGlobe /></Icon>
//           <Title>Indexing and Impact Factor</Title>
//           <Text>
//             Our journal is indexed in renowned databases like Scopus, Web of
//             Science, and Google Scholar. Our impact factor reflects our
//             commitment to high-quality research dissemination.
//           </Text>
//         </Content>
//         <Image src={indexingImage} alt="Indexing and Impact Factor" />
//       </Section>
//     </Container>
//     </>
//   );
// };

// export default AboutUs;


import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLeaf, FaFlask, FaUsers, FaGlobe, FaCheckCircle } from "react-icons/fa";
import backgroundImage from "../Images/aboutimg4.jpg"; 
import Hero3 from '../components/Hero3'
import missionImage from "../Images/mission.jpg";
import editorialImage from "../Images/editorial.jpg";
import introImage from '../Images/logo.png';
import scopeImage from '../Images/scopeImage.png'
import excellenceImage from '../Images/excellenceImage.jpg'

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled Components
const Container = styled.div`
  font-family: "Arial", sans-serif;
  background: url(${backgroundImage}) center/cover no-repeat;
  color: #333;
  padding: 60px 20px;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: left;
  animation: ${slideIn} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 40%;
  border-radius: 10px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: rgba(0, 0, 255, 0.8);
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  margin: 5px 0;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
  color: rgba(0, 0, 255, 0.8);
`;

// AboutUs Component
const AboutUs = () => {
  return (
    <>
      <Hero3 />
      <Container>
        
        {/* Introduction & Aims */}
        <Section>
          <Image src={introImage} alt="Introduction" />
          <Content>
            <Icon><FaGlobe /></Icon>
            <Title>Introduction and Aims of the African Journal of General Agriculture</Title>
            <Text>
            The African Journal of General Agriculture is a peer-reviewed, open-access journal and one of the official journals of the Society for Experimental Biology of Nigeria (NISEB). It is dedicated to advancing research and knowledge in agriculture and its interdisciplinary fields, including environmental toxicology, bioremediation, safety, health, security, and biological sciences.</Text>
           <br/> <Text>
            The journal aims to foster scientific innovation and interdisciplinary collaboration by providing a platform for the dissemination of high-quality research that addresses contemporary challenges in agriculture, environmental management, and food security. It welcomes original research articles, reviews, and technical reports that contribute to improving agricultural productivity, mitigating environmental pollution, and ensuring the safety and well-being of humans, animals, and ecosystems.</Text>
            <br/><Text>
            By bridging the gap between scientific research and practical applications, the African Journal of General Agriculture supports policymakers, researchers, and practitioners in making informed decisions that promote sustainable agriculture, environmental resilience, and public health in Africa and beyond. </Text>
          </Content>
        </Section>

        {/* Mission */}
        <Section>
          <Content>
            <Icon><FaLeaf /></Icon>
            <Title>Mission</Title>
            <Text>
            The African Journal of General Agriculture is committed to the advancement of knowledge and innovation in agriculture and related fields. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), our mission is to provide a credible platform for disseminating high-quality, peer-reviewed research that addresses critical challenges in agriculture, environmental sustainability, and public health. The journal seeks to bridge the gap between research and practical applications, contributing to food security, environmental conservation, and the overall well-being of communities in Africa and beyond.  </Text>
          </Content>
          <Image src={missionImage} alt="Mission" />
        </Section>

        {/* Scope */}
        <Section>
          <Image src={scopeImage} alt="Scope" />
          <Content>
            <Icon><FaFlask /></Icon>
            <Title>Scope</Title>
            The journal welcomes original research articles, reviews, and technical reports in the following key areas:
            <br/><br/><List>
              <ListItem>🌱 Agricultural Sciences – Crop and livestock production, soil science, agronomy, agricultural biotechnology, agro-economics, and sustainable farming practices.</ListItem>
              <ListItem>🛑 Environmental Toxicology – Impact assessment of pollutants, pesticide toxicity, heavy metal contamination, and ecotoxicological studies.</ListItem>
              <ListItem>🔬 Bioremediation & Environmental Management – Pollution control, waste management, and ecological restoration.</ListItem>
              <ListItem>⚕️ Safety, Health, and Security – Occupational health, food safety, biosecurity, and risk assessment.</ListItem>
              <ListItem>🌍 Biological Sciences – Plant and animal physiology, microbiology, genetics, molecular biology, and biotechnology applications in agriculture.</ListItem>
              <ListItem>🌱 Climate Change & Sustainable Development – Climate adaptation strategies, carbon sequestration, and sustainable agricultural systems.</ListItem>
            </List>
           <br/> The African Journal of General Agriculture encourages interdisciplinary research that integrates science, technology, and policy to address real-world agricultural and environmental challenges. By publishing cutting-edge research, the journal contributes to the development of sustainable solutions for the future of agriculture and environmental health in Africa and beyond.
          </Content>
        </Section>

        {/* Editorial Board */}
<Section>
  <Content>
    <Icon><FaUsers /></Icon>
    <Text>
      <strong>The African Journal of General Agriculture</strong> is led by a distinguished team of scholars and researchers committed to maintaining high editorial and publication standards.
    </Text>
    
    <br/><br/>
    
    <Title>Editorial Board</Title>
    
    {/* Editor-in-Chief */}
    <Text><strong>Editor-in-Chief:</strong></Text>
    <List>
      <ListItem>🔹 <strong>Prof. Olalekan Adeyemi</strong> – Federal University of Petroleum Resources, Effurun, Delta State, Nigeria</ListItem>
    </List>

    {/* Editorial Board Members */}
    <Text><strong>Editorial Board Members:</strong></Text>
    <List>
      <ListItem>👨‍🏫 <strong>Prof. Gbore Francis Ayodeji</strong><br/>
        📍 Sam Maris University, Supare-Akoko, Nigeria <br/>
        📍 OR Department of Animal Science, Adekunle Ajasin University, Akungba-Akoko, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Dr. Ayobami Matthew Olajuyin</strong><br/>
        📍 University of Texas Medical Branch <br/>
        📍 Department of Pharmacology and Toxicology, 301 University Boulevard, Galveston, Texas, USA
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Beckley Ikhajiagbe, FLS (London), FIPMD</strong><br/>
        📍 Department of Plant Biology and Biotechnology, University of Benin, Benin City, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Musa Oyewole Salawu</strong><br/>
        📍 Department of Biochemistry, University of Ilorin, Ilorin, Kwara State, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Gbolagade Benjamin Adesiji</strong><br/>
        📍 Faculty of Agriculture, University of Ilorin, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Augustine Olusegun Olusola</strong><br/>
        📍 Department of Biochemistry, Faculty of Science, Adekunle Ajasin University, Akungba Akoko, Ondo State, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Olarewaju Michael Oluba</strong><br/>
        📍 Department of Medical Biochemistry, David Umahi Federal University of Health Sciences, Uburu, Ebonyi State, Nigeria<br/>
        📧 Email: <a href="mailto:olubamo@dufuhs.edu.ng">olubamo@dufuhs.edu.ng</a>
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Emmanuel N. Agomuo</strong><br/>
        📍 Department of Biochemistry, Faculty of Biological Sciences, Imo State University, Owerri, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Egwim Evans</strong><br/>
        📍 Department of Biochemistry, Federal University of Technology, Minna, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Innocent Onyesom</strong><br/>
        📍 Department of Medical Biochemistry, Delta State University, Abraka, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Stephen Anayo Uzoekwe</strong><br/>
        📍 Department of Chemistry, Federal University, Otuoke, Bayelsa State, Nigeria
      </ListItem>

      <ListItem>👨‍🏫 <strong>Prof. Joseph Bamidele Minari</strong><br/>
        📍 Department of Cell Biology and Genetics, University of Lagos, Nigeria
      </ListItem>
    </List>
  </Content>
  <Image src={editorialImage} alt="Editorial Board" />
</Section>


        {/* Commitment to Excellence */}
        <Section>
          <Image src={excellenceImage} alt="Commitment to Excellence" />
          <Content>
            <Icon><FaCheckCircle /></Icon>
            <Title>Commitment to Excellence</Title>
            <Text>
              The African Journal of General Agriculture benefits from the expertise of accomplished scholars 
              who provide editorial oversight, peer-review coordination, and scientific direction to uphold 
              the journal’s credibility and impact.
            </Text>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default AboutUs;

