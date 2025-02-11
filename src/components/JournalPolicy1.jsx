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

const JournalPolicy1 = () => {
  return (
    <ContainerWrap>
        <Container>
      <Heading>Publishing Policies of the African Journal of General Agriculture</Heading>
      <Section>
      <p>
  The African Journal of General Agriculture follows a rigorous peer-review process and upholds the highest
  ethical standards in scientific publishing. As one of the official journals of the Society for Experimental
  Biology of Nigeria (NISEB), the journal is committed to ensuring broad access to high-quality research while
  maintaining transparency in its publication processes.
</p>

      </Section>
      <Section>
      <Subheading>
        <FaBookOpen /> 1. Open Access Policy
      </Subheading>
      <p>
        The journal operates under an open-access model, ensuring that all published articles are freely available
        to researchers, professionals, policymakers, and the general public worldwide without subscription fees. This
        policy promotes knowledge dissemination, academic collaboration, and increased citation of published works.
      </p>
      <p>
        All articles are published under a Creative Commons license, allowing unrestricted access, distribution, and
        reproduction, provided the original work is properly cited.
      </p>
    </Section>

    <Section>
      <Subheading> 
        <FaDollarSign /> 2. Article Processing Charges (APCs)
      </Subheading>
      <p>
        To support the costs of peer review, editing, online hosting, and long-term archiving, authors may be required
        to pay an Article Processing Charge (APC) upon acceptance of their manuscript. Waivers or discounts may be 
        available for authors from low-income or developing countries and for members of NISEB upon request.
      </p>
    </Section>

    <Section>
      <Subheading>
        <FaCopyright /> 3. Copyright Policy
      </Subheading>
      <ul>
        <li>
          Authors retain the copyright of their published work while granting the journal a license to publish and 
          distribute the article.
        </li>
        <li>
          The journal allows authors to share their articles on institutional repositories, personal websites, and 
          academic networking sites, ensuring maximum visibility and impact.
        </li>
      </ul>
    </Section>

    <Section>
      <Subheading> 
        <FaSearch /> 4. Peer-Review Process
      </Subheading>
      <p>
        All submissions undergo a double-blind peer review, where the identities of both authors and reviewers remain 
        anonymous. The review process ensures:
      </p>
      <ul>
        <li>Scientific rigor and methodological soundness</li>
        <li>Originality and contribution to the field</li>
        <li>Clarity, coherence, and compliance with the journal’s guidelines</li>
      </ul>
      <p>
        Manuscripts may be accepted, revised, or rejected based on the reviewers’ recommendations and the editorial 
        board’s decision.
      </p>
    </Section>

    <Section>
      <Subheading>
        <FaShieldAlt /> 5. Plagiarism and Ethical Standards
      </Subheading>
      <p>
        The journal strictly prohibits plagiarism, data fabrication, and unethical research practices. All manuscripts 
        are screened using plagiarism detection software, and any form of academic misconduct may lead to desk rejection 
        or retraction of published articles.
      </p>
    </Section>

    <Section>
      <Subheading>
        <FaFileAlt /> 6. Subscription and Print Copies
      </Subheading>
      <p>
        While the journal is primarily open access, institutions, libraries, and individuals may request printed 
        copies for archival or reference purposes. Subscription fees apply for printed editions, and bulk orders 
        may be available at discounted rates.
      </p>
      <p>
        The African Journal of General Agriculture is dedicated to promoting scientific integrity, accessibility, 
        and global collaboration, ensuring that valuable research reaches a broad audience for maximum impact.
      </p>
    </Section>

    <Section>
      <Subheading>
        <FaDatabase /> 7. Indexing
      </Subheading>
      <p>
        The African Journal of General Agriculture is committed to maintaining high visibility and accessibility in the 
        global research community. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), 
        it strives to be included in major academic and scientific databases to enhance its reach and credibility. 
        The journal will be indexed in the following:
      </p>
      <ul>
        <li><strong>Google Scholar</strong> – Ensuring broad visibility in academic search engines.</li>
        <li><strong>African Journals Online (AJOL)</strong> – Facilitating access to research across Africa.</li>
        <li><strong>DOAJ (Directory of Open Access Journals)</strong> [Pending/In Process] – Increasing discoverability among open-access databases.</li>
        <li><strong>Scopus</strong> [Under Consideration] – Enhancing global citation and research impact.</li>
        <li><strong>Web of Science</strong> [Planned Submission] – Expanding recognition in high-impact journal listings.</li>
        <li><strong>CrossRef (DOI Registration)</strong> – Assigning Digital Object Identifiers (DOIs) to all published articles for permanent online access.</li>
      </ul>
      <p>
        The journal is continuously working toward inclusion in more prominent international databases, ensuring researchers 
        benefit from wider dissemination and higher citation rates.
      </p>
    </Section>

    <Section>
      <Subheading>
        <FaChartBar /> 8. Impact Factor & Citation Metrics
      </Subheading>
      <p>
        The African Journal of General Agriculture is actively building its impact in the research community through 
        citation tracking and altmetrics. While the journal’s impact factor is currently under evaluation, its influence 
        can be measured through:
      </p>
      <ul>
        <li><strong>h-index and citation count</strong> (via Google Scholar and ResearchGate)</li>
        <li><strong>Journal Metrics</strong> from Scopus and Web of Science (when indexed)</li>
        <li><strong>Altmetric scores</strong> indicating article reach and engagement on social media and news platforms</li>
      </ul>
      <p>
        Authors publishing in the journal benefit from global visibility, DOI indexing, and increased citation potential, 
        making their research accessible to scholars, policymakers, and industry professionals.
      </p>
      <p>
        The journal remains committed to scientific excellence and continuous improvement, working toward higher indexing 
        recognition and citation impact in the academic community.
      </p>
    </Section>



    </Container>
    </ContainerWrap>
  );
};

export default JournalPolicy1;
