import React from "react";
import styled from "styled-components";
import { FaBookOpen,
    FaDollarSign,
      FaMoneyBillWave,
       FaCopyright, FaCheckCircle,
        FaExclamationTriangle, 
        FaFileAlt, FaChartBar,
         FaGlobe, FaDragon, FaSearch,
        FaShieldAlt,
        FaDatabase,
        FaUserEdit,
        Fa,FaFileUpload,
        FaPaperPlane,
        FaUserTie,
        FaLock


        } from "react-icons/fa";




        const ContainerWrap = styled.div`
            padding-top:100px;
            
        `

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  text-align: center;
  color: rgba(0,0,255,0.5);
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Subheading = styled.h3`
  display: flex;
  align-items: center;
  color: rgba(0,0,255,0.5);
  margin-bottom: 10px;
  font-size: 1.2em;

  svg {
    margin-right: 10px;
    color: rgba(0,0,255,0.5);
  }
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const JournalPolicy4 = () => {
  return (
    <ContainerWrap>
        <Container>
      {/* <Heading>Online Submission Portal with Author Registration/Login</Heading> */}
      <Section>
      <Subheading>
        <FaFileUpload /> Manuscript Submission and Processing
      </Subheading>
      <ul>
        <li>Manuscripts should be submitted via the journal’s <strong>online submission portal</strong>.</li>
        <li>The journal follows a <strong>double-blind peer-review</strong> process, and authors can expect a decision within <strong>6-8 weeks</strong>.</li>
        <li>Accepted manuscripts will undergo <strong>copyediting and formatting</strong> before final publication.</li>
      </ul>
     <br/> <p>
        <strong>The African Journal of General Agriculture</strong> is dedicated to maintaining high publication standards and ethical integrity. 
        Authors are encouraged to adhere to these guidelines to ensure smooth processing and successful publication of their research.
      </p>
<br/>
      <h4>Peer Review Process Explanation</h4>
      <p>
        <strong>The African Journal of General Agriculture</strong> follows a rigorous <strong>double-blind peer review</strong> process to ensure the 
        quality, credibility, and integrity of published research. This process maintains <strong>author anonymity</strong> and 
        <strong>reviewer confidentiality</strong>, ensuring an unbiased evaluation of manuscripts.
      </p>
    </Section>



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy4;
