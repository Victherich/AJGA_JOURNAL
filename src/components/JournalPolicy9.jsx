import React from 'react';
import styled from 'styled-components';
import { FaArchive, FaSearch, FaLink, FaDownload, FaShareAlt, FaClipboardList, FaBalanceScale, FaExclamationCircle } from 'react-icons/fa';

const Container = styled.div`
 padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const SectionTitle = styled.h2`
  color: rgba(0, 0, 255, 0.5);
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;


  svg {
    margin-right: 10px;
  }
`;

const List = styled.ul`
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Column = styled.div`
  margin-left: 20px;
`;

const ContentWrapper = styled.div`
  font-size: 16px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const JournalPolicy9 = () => {
  return (
    <Container>
      <Section>
        <SectionTitle><FaArchive /> Categorized List of Past and Current Issues</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• The journal’s website features a dedicated archive section where all published issues are systematically arranged by:</ListItem>
            <Column>
              <ListItem>o Year of publication (e.g., 2024, 2023, 2022)</ListItem>
              <ListItem>o Volume and issue number (e.g., Volume 20, Issue 2)</ListItem>
              <ListItem>o Research categories (e.g., Agricultural Sciences, Environmental Toxicology, Bioremediation, Safety & Health, Biological Sciences)</ListItem>
            </Column>
            <ListItem>• Each issue contains a table of contents listing the articles with their respective abstracts and author details.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaSearch /> Search and Filter Options for Articles</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• Search by author name – Locate articles by a specific researcher or contributor.</ListItem>
            <ListItem>• Search by title or keywords – Find articles related to specific research topics.</ListItem>
            <ListItem>• Filter by category – Browse articles under relevant research fields (e.g., environmental management, biotechnology, agricultural productivity).</ListItem>
            <ListItem>• Sort by date, citation count, or relevance – Ensure quick access to the most recent and influential publications.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaLink /> DOI Links for Easy Citation</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• Each published article is assigned a Digital Object Identifier (DOI), ensuring permanent and reliable access.</ListItem>
            <ListItem>• DOI links allow researchers to:</ListItem>
            <Column>
              <ListItem>o Accurately cite articles in research papers, theses, and reports.</ListItem>
              <ListItem>o Retrieve full-text versions directly from indexing services such as CrossRef and Google Scholar.</ListItem>
              <ListItem>o Track citations and impact metrics, enhancing research visibility.</ListItem>
            </Column>
            <ListItem>Example citation format:</ListItem>
            <ListItem><BoldText>Smith, J. & Doe, R. (2023). Advances in Bioremediation Techniques. African Journal of General Agriculture, 19(3), 45-60. https://doi.org/xxxx</BoldText></ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaDownload /> Downloadable PDFs or Full-Text HTML Articles</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• All published articles are available in PDF format, allowing users to download, print, and share research findings.</ListItem>
            <ListItem>• The journal also provides HTML versions for improved readability on mobile devices, tablets, and desktops.</ListItem>
            <ListItem>• Open-access availability ensures free and unrestricted access to research, promoting knowledge dissemination and academic collaboration.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaShareAlt /> Commitment to Open Knowledge Sharing</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• The African Journal of General Agriculture is dedicated to ensuring long-term access to published research through its organized archive system, advanced search features, DOI integration, and open-access publishing model.</ListItem>
            <ListItem>• This allows scholars and professionals to efficiently explore and utilize valuable scientific contributions in the field.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaClipboardList /> Editorial & Review Process</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• The African Journal of General Agriculture upholds a rigorous and transparent editorial and peer-review process to ensure the publication of high-quality, ethical, and impactful research.</ListItem>
            <ListItem>• The journal follows a structured workflow from submission to publication, adhering to international best practices in peer review, plagiarism detection, and research integrity.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaBalanceScale /> Clear Workflow from Submission to Publication</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>Step 1: Manuscript Submission</ListItem>
            <ListItem>• Authors submit their manuscripts via the online submission portal.</ListItem>
            <ListItem>• The system automatically acknowledges receipt and assigns a manuscript ID.</ListItem>
            <ListItem>Step 2: Editorial Screening</ListItem>
            <ListItem>• The Editor-in-Chief and handling editors conduct an initial check for:</ListItem>
            <Column>
              <ListItem>o Scope and relevance to the journal</ListItem>
              <ListItem>o Formatting compliance with author guidelines</ListItem>
              <ListItem>o Plagiarism detection using Turnitin or iThenticate</ListItem>
              <ListItem>o Ethical approvals and conflict-of-interest disclosures</ListItem>
            </Column>
            <ListItem>Step 3: Peer Review Process</ListItem>
            <ListItem>• Manuscripts that pass editorial screening are assigned to two or more expert reviewers for evaluation.</ListItem>
            <ListItem>• The journal employs a double-blind peer-review process (neither the authors nor the reviewers know each other’s identities).</ListItem>
            <ListItem>Step 4: Reviewer Feedback & Decision</ListItem>
            <ListItem>• Based on reviewer reports, the editor makes one of the following decisions:</ListItem>
            <Column>
              <ListItem>✅ Accept as is – The manuscript is ready for publication.</ListItem>
              <ListItem>🔄 Minor Revisions – The manuscript requires small corrections before acceptance.</ListItem>
              <ListItem>🔄 Major Revisions – The manuscript needs substantial changes and must be resubmitted.</ListItem>
              <ListItem>❌ Reject – The manuscript does not meet the journal’s standards or is unsuitable for publication.</ListItem>
            </Column>
            <ListItem>Step 5: Author Revisions & Resubmission</ListItem>
            <ListItem>• Authors receive reviewer comments and must submit a revised version with a point-by-point response letter.</ListItem>
            <ListItem>Step 6: Final Decision & Copyediting</ListItem>
            <ListItem>• The editor makes the final decision on acceptance.</ListItem>
            <ListItem>Step 7: Publication & Indexing</ListItem>
            <ListItem>• The final, proofread article is published online as an open-access document.</ListItem>
            <ListItem>• The article is indexed in Google Scholar, CrossRef, and other databases.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaExclamationCircle /> Double-Blind or Single-Blind Review Policies</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• The journal follows a double-blind review process to ensure objectivity and fairness:</ListItem>
            <Column>
              <ListItem>o Authors do not know the reviewers' identities.</ListItem>
              <ListItem>o Reviewers do not know the authors' identities.</ListItem>
              <ListItem>o This minimizes bias based on institution, reputation, or region.</ListItem>
            </Column>
            <ListItem>• In some cases, a single-blind review (where reviewers know the authors' names but authors do not know the reviewers) may be used when necessary.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaExclamationCircle /> Reviewer Guidelines</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem>• Reviewers play a critical role in maintaining the quality and integrity of the journal.</ListItem>
            <ListItem>• They are expected to:</ListItem>
            <Column>
              <ListItem>o Provide constructive, unbiased feedback to improve the manuscript.</ListItem>
              <ListItem>o Evaluate scientific validity, originality, and clarity.</ListItem>
              <ListItem>o Maintain confidentiality and avoid sharing manuscript details.</ListItem>
              <ListItem>o Declare conflicts of interest if they exist.</ListItem>
              <ListItem>o Adhere to ethical review standards, ensuring that studies comply with ethical guidelines.</ListItem>
            </Column>
            <ListItem>• Reviewers are given 2-4 weeks to complete their evaluations and submit detailed reports.</ListItem>
          </List>
        </ContentWrapper>
      </Section>

      <Section>
        <SectionTitle><FaExclamationCircle /> Ethical Considerations and Plagiarism Checks</SectionTitle>
        <ContentWrapper>
          <List>
            <ListItem><BoldText>a. Plagiarism & Duplicate Submission Policy</BoldText></ListItem>
            <ListItem>• All manuscripts are screened using plagiarism detection software (Turnitin/iThenticate).</ListItem>
            <ListItem>• Manuscripts with >15% similarity index (excluding references) are flagged for further review.</ListItem>
            <ListItem>• If plagiarism is detected, the manuscript may be rejected or sent back for revision.</ListItem>
            <ListItem><BoldText>b. Research Ethics Compliance</BoldText></ListItem>
            <ListItem>• Studies involving human subjects, animals, or hazardous materials must have institutional ethical approval.</ListItem>
            <ListItem>• Authors must obtain informed consent from human participants.</ListItem>
            <ListItem>• Ethical statements must be included in the Methods section of the manuscript.</ListItem>
            <ListItem><BoldText>c. Conflict of Interest Disclosure</BoldText></ListItem>
            <ListItem>• Authors, reviewers, and editors must disclose any financial or personal conflicts of interest.</ListItem>
            <ListItem>• Any undisclosed conflict of interest may result in manuscript withdrawal or retraction.</ListItem>
            <ListItem><BoldText>d. Data Integrity & Reproducibility</BoldText></ListItem>
            <ListItem>• Authors must provide raw data or supplementary materials if requested for verification.</ListItem>
            <ListItem>• Fabrication or falsification of data will lead to immediate rejection and possible blacklisting.</ListItem>
          </List>
        </ContentWrapper>
      </Section>
    </Container>
  );
};

export default JournalPolicy9;
