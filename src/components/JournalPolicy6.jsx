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

const JournalPolicy6 = () => {
  return (
    <ContainerWrap>
        <Container>
        <Section>
      <Subheading>
        <FaSearch /> Double-Blind Peer Review Process
      </Subheading>
      <ul>
        <li>If the manuscript passes the <strong>initial screening</strong>, it is assigned to <strong>two or more independent experts</strong> in the field.</li>
        <li>Reviewers are selected based on their expertise and must not have <strong>any conflicts of interest</strong> with the authors.</li>
        <li>The identity of the <strong>authors and reviewers</strong> is kept confidential to ensure an <strong>objective assessment</strong>.</li>
      </ul>

      <h3>Review Criteria</h3>
      <ul>
        <li>✅ <strong>Scientific originality</strong> – Novelty and significance of the research</li>
        <li>✅ <strong>Methodological rigor</strong> – Soundness of research design, experiments, and statistical analysis</li>
        <li>✅ <strong>Clarity and coherence</strong> – Organization, readability, and logical flow of ideas</li>
        <li>✅ <strong>Data integrity</strong> – Reliability and accuracy of presented data and conclusions</li>
        <li>✅ <strong>Relevance and impact</strong> – Contribution to the field of agriculture, environmental toxicology, bioremediation, safety, health, security, and biological sciences</li>
      </ul>
    </Section>



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy6;
