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
        FaBook,


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

const JournalPolicy3 = () => {
  return (
    <ContainerWrap>
        <Container>
      <Heading>Author Guidelines</Heading>
      <Section>
      <p>
      Authors submitting manuscripts to the African Journal of General Agriculture are required to follow the guidelines outlined below to ensure a smooth peer-review and publication process. The journal maintains high academic and ethical standards and expects all submissions to comply with these requirements.</p>

      </Section>

      <Section>
      <Subheading>
        <FaFileAlt /> Manuscript Format
      </Subheading>
      <p>
        All manuscripts should be submitted in Microsoft Word (DOC/DOCX) or LaTeX format, following the structure below:
      </p>

      <h4>a. Title Page</h4>
      <ul>
        <li><strong>Title of the manuscript</strong> (concise and informative)</li>
        <li><strong>Full names</strong> of all authors with affiliations and email addresses</li>
        <li><strong>Corresponding author’s details</strong> (name, email, and phone number)</li>
        <li><strong>ORCID ID</strong> (if available)</li>
      </ul>
<br/>
      <h4>b. Abstract and Keywords</h4>
      <ul>
        <li><strong>Abstract</strong> (150–250 words) summarizing the study's objectives, methods, results, and conclusions</li>
        <li>3 to 6 relevant <strong>keywords</strong> for indexing purposes</li>
      </ul>
<br/>
      <h4>c. Main Manuscript Sections</h4>
      <ul>
        <li><strong>Introduction</strong> – Background, research problem, and study objectives</li>
        <li><strong>Materials and Methods</strong> – Detailed methodology, experimental design, and ethical approvals (if applicable)</li>
        <li><strong>Results</strong> – Clear and concise presentation of findings with appropriate tables and figures</li>
        <li><strong>Discussion</strong> – Interpretation of results with comparison to existing literature</li>
        <li><strong>Conclusion</strong> – Summary of key findings and recommendations for future research</li>
        <li><strong>Acknowledgments</strong> – Recognition of funding sources, institutions, and individuals who contributed to the study</li>
        <li><strong>References</strong> – Properly formatted citations</li>
      </ul>
<br/>
      <h4>d. Figures and Tables</h4>
      <ul>
        <li>All figures should be high resolution (300 dpi) in <strong>JPEG, PNG, or TIFF</strong> format</li>
        <li>Tables should be formatted without vertical lines and <strong>numbered consecutively</strong></li>
        <li>Figures and tables must be cited in the text (e.g., Figure 1, Table 2)</li>
      </ul>
    </Section>

    <Section>
      <Subheading>
        <FaBook /> Referencing Style
      </Subheading>
      <p>
        The journal follows the <strong>American Psychological Association (APA) 7th edition</strong> referencing format.
      </p>
<br/>
      <h4>In-Text Citation Examples</h4>
      <ul>
        <li><strong>Single author:</strong> (Smith, 2020) or Smith (2020)</li>
        <li><strong>Two authors:</strong> (Johnson & Lee, 2021)</li>
        <li><strong>Three or more authors:</strong> (Garcia et al., 2022)</li>
      </ul>
<br/>
      <h4>Reference List Format</h4>
      <ul>
        <li>
          <strong>Journal Articles:</strong>
          <ul>
            <li>
              Doe, J., & Smith, A. (2023). Effects of pesticides on soil microbiota. <i>African Journal of General Agriculture</i>, 
              19(2), 45-58. <a href="https://doi.org/xxxx">https://doi.org/xxxx</a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Books:</strong>
          <ul>
            <li>Brown, K. (2019). <i>Agricultural biotechnology and food security</i>. Springer.</li>
          </ul>
        </li>
        <li>
          <strong>Conference Papers:</strong>
          <ul>
            <li>
              Williams, P., & Green, L. (2020). Sustainable farming practices. <i>Proceedings of the International Agricultural Conference</i>, 345-360.
            </li>
          </ul>
        </li>
      </ul>
    </Section>



    <Section>
      <Subheading>
        <FaShieldAlt /> Ethical Requirements
      </Subheading>

      <h4>a. Plagiarism and Originality</h4>
      <ul>
        <li>Manuscripts must be <strong>original</strong> and not under consideration or published elsewhere.</li>
        <li>All submissions are screened using plagiarism detection software (e.g., Turnitin, iThenticate).</li>
      </ul>

      <h4>b. Conflict of Interest</h4>
      <ul>
        <li>Authors must disclose any <strong>financial or personal conflicts of interest</strong> that may influence the research.</li>
      </ul>

      <h4>c. Research Ethics and Consent</h4>
      <ul>
        <li>
          Studies involving <strong>human participants or animals</strong> must provide ethical clearance from an institutional review board (IRB) or ethics committee.
        </li>
        <li><strong>Informed consent</strong> must be obtained for studies involving human subjects.</li>
      </ul>

      <h4>d. Data Availability</h4>
      <ul>
        <li>Authors should <strong>share data</strong> where applicable and provide access to supplementary materials upon request.</li>
      </ul>
    </Section>
      



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy3;
