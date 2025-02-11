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
        FaLock,
        FaClipboardCheck


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

const JournalPolicy5 = () => {
  return (
    <ContainerWrap>
        <Container>
        <Section>
      <Subheading>
        <FaClipboardCheck /> Initial Submission & Editorial Screening
      </Subheading>
      <ul>
        <li>Authors submit their manuscripts via the <strong>online submission portal</strong>.</li>
        <li>The <strong>Editor-in-Chief</strong> and editorial board conduct a preliminary screening to check for:</li>
        <ul>
          <li><strong>Adherence</strong> to journal guidelines</li>
          <li><strong>Scope and relevance</strong> of the study</li>
          <li><strong>Plagiarism detection</strong> using software (Turnitin/iThenticate)</li>
          <li><strong>Ethical compliance</strong> (human/animal research approvals, conflict of interest disclosure)</li>
        </ul>
        <li>
          Manuscripts that do not meet basic requirements may be <strong>desk rejected</strong> without external review.
        </li>
      </ul>
    </Section>



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy5;
