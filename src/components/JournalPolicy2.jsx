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

const JournalPolicy2 = () => {
  return (
    <ContainerWrap>
        <Container>
      <Heading>Online Submission Portal with Author Registration/Login</Heading>
      <Section>
      <p>
      The African Journal of General Agriculture provides a user-friendly online submission portal that enables authors to submit their manuscripts, track the review process, and communicate with editors efficiently. The system is designed to streamline the publishing workflow, ensuring transparency, efficiency, and timely publication of high-quality research articles.
</p>

      </Section>

      <Section>
      <Subheading>
        <FaUserEdit /> 1. Author Registration and Login
      </Subheading>
      <p>
        To submit a manuscript, authors are required to:
      </p>
      <ul>
        <li>
          <strong>Register an account</strong> on the journal’s submission portal by providing their name, affiliation, 
          email, and ORCID (if available).
        </li>
        <li>
          <strong>Log in securely</strong> to access the submission dashboard, track manuscript progress, and respond to 
          reviewer comments.
        </li>
        <li>
          <strong>Update their profile</strong>, including research interests, institution, and previous publications, 
          to facilitate reviewer matching.
        </li>
      </ul>
    </Section>


    <Section>
      <Subheading>
        <FaFileUpload /> 2. Manuscript Submission Process
      </Subheading>
      <p>The submission system follows a step-by-step guided process:</p>
      <ol>
        <li>
          <strong>Select Article Type</strong> – Choose from original research, review, short communication, or 
          technical report.
        </li>
        <li>
          <strong>Upload Manuscript and Supporting Files</strong> – Authors must submit:
          <ul>
            <li>Main manuscript file (Word or LaTeX format)</li>
            <li>Figures and tables (separate high-resolution files if required)</li>
            <li>Cover letter and conflict-of-interest statement</li>
          </ul>
        </li>
        <li>
          <strong>Fill Metadata Details</strong> – Enter the article title, abstract, keywords, and co-author details.
        </li>
        <li>
          <strong>Submit and Receive Confirmation</strong> – Authors receive an automatic confirmation email upon 
          successful submission.
        </li>
      </ol>
    </Section>

    <Section>
      <Subheading>
        <FaPaperPlane /> 3. Manuscript Tracking and Communication
      </Subheading>
      <ul>
        <li>
          Authors can track the status of their submissions (e.g., under review, revisions requested, accepted, or rejected).
        </li>
        <li>
          Editors and reviewers can communicate with authors via in-system messaging to ensure a smooth review process.
        </li>
        <li>
          Automatic email notifications are sent for submission updates, review decisions, and final publication.
        </li>
      </ul>
    </Section>


    <Section>
      <Subheading>
        <FaUserTie /> 4. Reviewer and Editor Dashboard
      </Subheading>
      <ul>
        <li>
          Registered reviewers can accept or decline review invitations and submit their feedback through the portal.
        </li>
        <li>
          Editors can assign reviewers, manage revisions, and make final publication decisions through an intuitive dashboard.
        </li>
      </ul>
    </Section>


    <Section>
      <Subheading>
        <FaLock /> 5. Secure and Reliable System
      </Subheading>
      <ul>
        <li>
          The portal is SSL-encrypted, ensuring data security and author confidentiality.
        </li>
        <li>
          The system supports version control, allowing authors to update and resubmit revised manuscripts without data loss.
        </li>
        <li>
          Integrated plagiarism detection tools (e.g., Turnitin, iThenticate) ensure originality and research integrity.
        </li>
      </ul>
      <p>
        The African Journal of General Agriculture is committed to providing an efficient and transparent submission 
        process, making it easier for authors, reviewers, and editors to contribute to high-quality scientific publishing.
      </p>
    </Section>



      



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy2;
