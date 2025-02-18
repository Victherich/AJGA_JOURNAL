import React from "react";
import styled from "styled-components";
import { FaBook, FaSearch, FaDownload, FaHandshake, FaPhone, FaEnvelope } from "react-icons/fa";

// Styled components for the content
const Container = styled.div`
 padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: rgba(0, 0, 255, 0.5);
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const HighlightText = styled.span`
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const SubscriptionWrapper = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const SubSection= styled.div`
    margin-bottom: 40px;
`
const SubTitle = styled.h4`
     color: rgba(0, 0, 255, 0.5);
  display: flex;
  align-items: center;
  font-size: 24px;
`



const JournalPolicy10 = () => {
  return (
    <Container>
      {/* Commitment to Research Integrity */}
      <Section>
        <Title>
          <FaBook />
          Commitment to Research Integrity
        </Title>
        <Text>
          The African Journal of General Agriculture ensures that every published article undergoes a rigorous, ethical, and fair review process. By maintaining high editorial standards, the journal continues to support scientific excellence and credibility in the field of agriculture, environmental toxicology, bioremediation, safety, health, security, and biological sciences.
        </Text>
      </Section>

      {/* Author & Reviewer Resources */}
      <Section>
        <Title>
          <FaSearch />
          Author & Reviewer Resources
        </Title>
        <Text>
          The African Journal of General Agriculture provides comprehensive resources for both authors and reviewers to ensure the high quality, accuracy, and integrity of published research. These resources guide authors in manuscript preparation and submission while equipping reviewers with clear evaluation criteria for peer review.
        </Text>
      </Section>

      {/* Manuscript Preparation Guidelines */}
      <Section>
        <Title>
          <FaBook />
          Detailed Guidelines for Manuscript Preparation
        </Title>
        <Text>
          To maintain consistency and professionalism, authors must adhere to the journal’s manuscript preparation guidelines.
        </Text>

        <HighlightText>Manuscript Formatting</HighlightText>
        <List>
          <ListItem>File format: Microsoft Word (DOC/DOCX) or LaTeX (TEX).</ListItem>
          <ListItem>Font & Spacing: Times New Roman, 12 pt, double-spaced.</ListItem>
          <ListItem>Page Numbers & Line Numbers: Included for easy reference during review.</ListItem>
          <ListItem>Section Headings: Clearly labeled, bold, and numbered (1, 1.1, 1.2, etc.).</ListItem>
        </List>

        <HighlightText>Manuscript Structure</HighlightText>
        <List>
          <ListItem>Title Page: Title (concise and informative), Author names, affiliations, and ORCID IDs, Corresponding author details.</ListItem>
          <ListItem>Abstract & Keywords: 150-250 words summarizing objectives, methods, results, and conclusions.</ListItem>
          <ListItem>Main Text: Introduction, Materials & Methods, Results, Discussion, Conclusion.</ListItem>
          <ListItem>Acknowledgments & Funding Sources: Recognition of funding bodies and contributors.</ListItem>
          <ListItem>References: APA 7th edition format for citations.</ListItem>
          <ListItem>Figures & Tables: High-resolution images (JPEG/PNG, 300 dpi).</ListItem>
          <ListItem>Supplementary Materials (if applicable): Additional datasets, protocols, or multimedia files.</ListItem>
        </List>
      </Section>

      {/* Submission Templates */}
      <Section>
        <Title>
          <FaDownload />
          Templates for Submissions
        </Title>
        <Text>
          To facilitate manuscript preparation, the journal provides downloadable submission templates in the following formats:
        </Text>
        <List>
          <ListItem>Microsoft Word Template (.docx) – Pre-formatted template for quick and easy manuscript preparation.</ListItem>
          <ListItem>LaTeX Template (.tex) – For authors using LaTeX, ensuring proper formatting for mathematical equations, complex tables, and references.</ListItem>
          <ListItem>Cover Letter Template (.docx) – A sample cover letter for manuscript submission.</ListItem>
        </List>
      </Section>

      {/* Reviewer Responsibilities and Criteria */}
      <Section>
        <Title>
          <FaHandshake />
          Reviewer Responsibilities and Criteria for Evaluation
        </Title>
        <Text>
          Reviewers play a crucial role in ensuring the scientific quality, integrity, and impact of published research.
        </Text>

        <HighlightText>Reviewer Responsibilities</HighlightText>
        <List>
          <ListItem>Provide objective and constructive feedback to authors.</ListItem>
          <ListItem>Assess the manuscript’s originality, methodology, clarity, and scientific impact.</ListItem>
          <ListItem>Ensure confidentiality.</ListItem>
          <ListItem>Declare conflicts of interest if they exist.</ListItem>
          <ListItem>Submit reviews on time (2–4 weeks).</ListItem>
        </List>

       
       
       
   
      </Section>


      <Section>
  <Title>Criteria for Evaluation</Title>
  <p>Reviewers assess the following key areas:</p>

  <HighlightText>1. Scientific Rigor & Methodology</HighlightText>
  <List>
    <ListItem>Are the research methods sound and appropriately applied?</ListItem>
    <ListItem>Is the study design ethical and reproducible?</ListItem>
  </List>

  <HighlightText>2. Originality & Contribution to Knowledge</HighlightText>
  <List>
    <ListItem>Does the manuscript provide new insights or innovative solutions?</ListItem>
    <ListItem>Does it align with the scope of the journal?</ListItem>
  </List>

  <HighlightText>3. Data Integrity & Analysis</HighlightText>
  <List>
    <ListItem>Are data correctly analyzed with appropriate statistical methods?</ListItem>
    <ListItem>Are the results well-supported by the evidence presented?</ListItem>
  </List>

  <HighlightText>4. Clarity & Organization</HighlightText>
  <List>
    <ListItem>Is the manuscript well-structured and logically presented?</ListItem>
    <ListItem>Are tables, figures, and references correctly formatted and labeled?</ListItem>
  </List>

  <HighlightText>5. Relevance & Impact</HighlightText>
  <List>
    <ListItem>Does the research address an important issue in agriculture, environmental toxicology, bioremediation, safety, health, security, or biological sciences?</ListItem>
  </List>

  <HighlightText>6. Ethical Compliance</HighlightText>
  <List>
    <ListItem>Does the study follow ethical guidelines for human/animal research?</ListItem>
    <ListItem>Has plagiarism or data fabrication been detected?</ListItem>
  </List>
</Section>



<Section>
  <Title>Commitment to Supporting Authors & Reviewers</Title>
  <p>
    The African Journal of General Agriculture provides comprehensive resources, clear templates, and structured review guidelines to maintain high publishing standards. These efforts ensure that manuscripts are prepared, reviewed, and published efficiently, enhancing the credibility and impact of the research.
  </p>
</Section>


<Section>
  <Title>7. Subscription & Open Access Policies</Title>
  <p>
    The African Journal of General Agriculture is committed to making high-quality agricultural and environmental research accessible to a global audience. The journal follows an open-access model to maximize knowledge dissemination while offering options for institutional and individual subscriptions to printed editions.
  </p>

  <Title>Access Policies</Title>
  <p>The journal follows a fully open-access publishing model, ensuring that:</p>
  <List>
    <ListItem>All published articles are freely available online without paywalls.</ListItem>
    <ListItem>Researchers, students, policymakers, and professionals can access, download, and share articles at no cost.</ListItem>
    <ListItem>Published works receive greater visibility, increased citation potential, and broader impact.</ListItem>
  </List>
  <p>
    Unlike subscription-based journals, there are no access restrictions, making scientific knowledge freely available to all.
  </p>
</Section>


<Section>
  <Title>Article Processing Charges (APCs)</Title>
  <p>
    To support peer review, editorial management, hosting, and digital preservation, the journal requires authors to pay an Article Processing Charge (APC) upon acceptance of their manuscript.
  </p>
  <List>
    <ListItem>Standard APC: [N50,000 (Authors based in Nigeria) and 60 USD (Authors outside Nigeria)]</ListItem>
  </List>
  
  <Title>Waivers & Discounts</Title>
  <List>
    <ListItem>Authors from low-income countries may apply for a partial or full waiver.</ListItem>
    <ListItem>NISEB members (Society for Experimental Biology of Nigeria) may qualify for a discounted APC.</ListItem>
    <ListItem>Waivers may be considered for exceptional research contributions or invited review articles.</ListItem>
  </List>

  <p>No Submission Fees: Authors do not pay any fees at the time of submission. APCs are only charged after peer review and final acceptance.</p>

  <Title>Institutional and Individual Subscription Details</Title>
  <p>
    While the journal is primarily digital and open-access, printed copies are available for purchase:
  </p>
  
  <Title>Institutional Subscriptions</Title>
  <List>
    <ListItem>Universities, libraries, and research institutions can subscribe to annual print editions.</ListItem>
    <ListItem>Bulk subscriptions may be offered at a discounted rate.</ListItem>
  </List>

  <Title>Individual Subscriptions</Title>
  <List>
    <ListItem>Researchers and professionals may order single printed issues or annual subscriptions.</ListItem>
    <ListItem>Subscription fees cover printing and shipping costs.</ListItem>
  </List>

  <Title>Subscription Requests</Title>
  <p>
    Interested individuals or institutions can request subscription details, pricing, and bulk orders via the journal’s website or editorial office.
  </p>
</Section>


<Section>
  <Title>Commitment to Open Knowledge</Title>
  <p>
    The African Journal of General Agriculture remains dedicated to open-access publishing, ensuring that groundbreaking research in agriculture, environmental toxicology, bioremediation, safety, health, security, and biological sciences is freely accessible while maintaining a sustainable publishing model through APCs and optional print subscriptions.
  </p>
</Section>


<Section>
  <Title>Contact & Support</Title>
  <p>
    The African Journal of General Agriculture provides a dedicated contact and support system to assist authors, reviewers, and readers with inquiries related to manuscript submission, peer review, publication policies, and technical issues.
  </p>

  <SubSection>
    <SubTitle>Editorial Office Contact Information</SubTitle>
    <p>
      For general inquiries, manuscript submission assistance, and editorial matters, authors and reviewers can contact the journal’s editorial office via:
    </p>
    <ul>
      <li><strong>📍 Editorial Office Address:</strong> African Journal of General Agriculture, Society for Experimental Biology of Nigeria (NISEB), Department of Environmental Management and Toxicology, Federal University of Petroleum Resources, Effurun, Delta State, Nigeria</li>
      <li><strong>📧 Email:</strong> <a href="mailto:editorial@ajga-journal.org">editorial@ajga-journal.org</a></li>
      <li><strong>📞 Phone:</strong> <a href="tel:+2348037159452">+234 803-715-9452</a></li>
      <li><strong>🌐 Website:</strong> <a href="http://www.ajga-journal.org" target="_blank" rel="noopener noreferrer">www.ajga-journal.org</a></li>
      <li><strong>Response Time:</strong> The editorial office aims to respond to all inquiries within 2-3 business days.</li>
    </ul>
  </SubSection>

  <SubSection>
    <SubTitle>Frequently Asked Questions (FAQs) for Authors and Reviewers</SubTitle>
    <p>To streamline the submission and review process, the journal provides a comprehensive FAQ section on its website.</p>
    <h4>For Authors:</h4>
    <ul>
      <li>✅ <strong>How do I submit a manuscript?</strong> Manuscripts must be submitted via the online submission portal. A detailed guide is available in the Author Guidelines section.</li>
      <li>✅ <strong>What is the timeline for peer review?</strong> The journal follows a double-blind peer review process, typically taking 6-8 weeks.</li>
      <li>✅ <strong>How can I check the status of my submission?</strong> Authors can track their manuscript’s progress via the submission dashboard. Status updates are also sent via email.</li>
      <li>✅ <strong>Are there article processing charges (APCs)?</strong> Yes, APCs apply after acceptance to cover editorial and publication costs. Waivers and discounts are available under specific conditions.</li>
      <li>✅ <strong>Can I request a waiver for APCs?</strong> Authors from low-income countries or NISEB members may apply for APC waivers or discounts.</li>
      <li>✅ <strong>How do I make corrections after submission?</strong> Authors may update their manuscript before editorial screening. For major corrections post-review, a revision request must be submitted.</li>
    </ul>

    <h4>For Reviewers:</h4>
    <ul>
      <li>✅ <strong>How can I become a reviewer?</strong> Researchers with relevant expertise can apply via the Reviewer Registration Portal on the journal website.</li>
      <li>✅ <strong>What are the review guidelines?</strong> Reviewers must assess manuscripts based on originality, methodology, clarity, ethical compliance, and scientific contribution.</li>
      <li>✅ <strong>How much time do I have to review a manuscript?</strong> Standard review time is 2-4 weeks. Extensions can be requested in special cases.</li>
      <li>✅ <strong>Can I decline a review request?</strong> Yes, reviewers should decline if they have a conflict of interest or lack the expertise to evaluate the manuscript.</li>
    </ul>
  </SubSection>

  <SubSection>
    <SubTitle>Technical Support for Submission Issues</SubTitle>
    <p>For technical issues related to manuscript submission, online portal access, or document formatting, the journal offers IT and technical support.</p>
    <ul>
      <li><strong>Common Issues & Solutions:</strong></li>
      <ul>
        <li>• <strong>Login Problems:</strong> Reset your password via the "Forgot Password" option on the submission portal.</li>
        <li>• <strong>File Upload Errors:</strong> Ensure that files are in the required format (DOCX, LaTeX, PDF for figures).</li>
        <li>• <strong>Submission Stuck in Processing:</strong> Contact technical support if the system does not confirm submission within 24 hours.</li>
        <li>• <strong>Tracking Submission Status Issues:</strong> If the status has not been updated after the expected review period, contact the editorial office for assistance.</li>
      </ul>
    </ul>
    <ul>
      <li><strong>📧 Technical Support Email:</strong> <a href="mailto:support@ajga-journal.org">support@ajga-journal.org</a></li>
      <li><strong>📞 Technical Assistance Hotline:</strong> <a href="tel:+2348037159452">+234 803-715-9452</a></li>
    </ul>
  </SubSection>

  <SubSection>
    <SubTitle>Commitment to Author & Reviewer Support</SubTitle>
    <p>
      The African Journal of General Agriculture is dedicated to providing efficient and responsive support to authors, reviewers, and researchers. Whether it's an editorial inquiry, submission guidance, or technical troubleshooting, the journal ensures a smooth and transparent publishing experience.
    </p>
  </SubSection>
</Section>


<Section>
  <Title>Indexing & Metrics</Title>
  <p>
    The African Journal of General Agriculture is dedicated to enhancing the visibility and impact of published research by ensuring broad indexing, citation tracking, and metric evaluation. The journal actively pursues inclusion in prestigious academic databases to increase accessibility and credibility within the global scientific community.
  </p>

  <SubSection>
    <SubTitle>Journal Indexing (Scopus, Web of Science, Google Scholar, etc.)</SubTitle>
    <p>The journal is currently indexed in and working towards inclusion in the following databases:</p>
    <ul>
      <li>✅ <strong>Google Scholar</strong> – Ensures broad discoverability in academic search engines.</li>
      <li>✅ <strong>African Journals Online (AJOL)</strong> – Provides regional visibility for African-based research.</li>
      <li>✅ <strong>CrossRef (DOI Registration)</strong> – Assigns Digital Object Identifiers (DOIs) to all published articles, ensuring permanent access.</li>
      <li>✅ <strong>DOAJ (Directory of Open Access Journals) [Pending/In Process]</strong> – Increases discoverability among open-access repositories.</li>
      <li>✅ <strong>Scopus [Under Review]</strong> – Enhances global citation and ranking in scientific research.</li>
      <li>✅ <strong>Web of Science [Planned Submission]</strong> – Strengthens journal reputation through impact factor calculation.</li>
    </ul>
    <p>The journal is continuously working towards recognition by additional indexing services to maximize exposure and increase research impact.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Citation Metrics & Impact Factor Display</SubTitle>
    <p>To measure research influence and academic contribution, the journal tracks:</p>
    <ul>
      <li>📊 <strong>h-index & citation counts</strong> – Available via Google Scholar and ResearchGate.</li>
      <li>📊 <strong>Impact Factor (IF) [In Progress]</strong> – The journal is working towards obtaining an official impact factor after consistent citation growth.</li>
      <li>📊 <strong>Scimago Journal Rank (SJR) [Pending Scopus Indexing]</strong> – Will assess journal prestige based on citations and scholarly impact.</li>
    </ul>
    <p>Once the journal is indexed in Scopus and Web of Science, impact factor metrics will be regularly updated and displayed on the journal’s website.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Altmetric Scores for Article Influence</SubTitle>
    <p>To measure the broader societal impact of published research, the journal tracks Altmetric scores, which assess:</p>
    <ul>
      <li>🔹 Mentions on social media (Twitter, LinkedIn, Facebook)</li>
      <li>🔹 Citations in policy documents, news articles, and blogs</li>
      <li>🔹 Public engagement and downloads</li>
      <li>🔹 Reference in patent applications and industry reports</li>
    </ul>
    <p>Each published article is assigned an Altmetric Attention Score, providing insight into how research is being discussed and utilized beyond academia.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Commitment to Research Visibility</SubTitle>
    <p>
      The African Journal of General Agriculture prioritizes broad indexing, citation growth, and impact measurement to ensure that published research is globally recognized and accessible. By continuously improving indexing status, citation tracking, and altmetric monitoring, the journal aims to enhance scientific contribution and real-world influence in agriculture, environmental toxicology, bioremediation, safety, health, security, and biological sciences.
    </p>
  </SubSection>
</Section>


<Section>
  <Title>Social Media & Community Engagement</Title>
  <p>
    The African Journal of General Agriculture actively engages with the scientific community through social media, newsletters, and interactive platforms to enhance knowledge sharing, promote published research, and foster collaboration among researchers, policymakers, and industry professionals.
  </p>

  <SubSection>
    <SubTitle>Social Media Integration (Twitter, LinkedIn, etc.)</SubTitle>
    <p>To increase visibility and engagement, the journal maintains an active presence on key social media platforms:</p>
    <ul>
      <li>📢 <strong>Twitter/X (@AJGA_Journal)</strong> – Updates on new issues, featured articles, call for papers, and trending agricultural research.</li>
      <li>📢 <strong>LinkedIn (@African Journal of General Agriculture)</strong> – Professional networking, author highlights, and research discussions.</li>
      <li>📢 <strong>Facebook (@AJGAJournal)</strong> – Outreach to a broader audience, including students and early-career researchers.</li>
      <li>📢 <strong>ResearchGate & Academia.edu</strong> – Sharing article updates and engaging with the global research community.</li>
    </ul>
    <p>🔹 Authors are encouraged to share their published articles on social media using journal hashtags for greater reach and impact.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Email Alerts & Newsletters</SubTitle>
    <p>To keep researchers informed, the journal offers free email alerts and newsletters, including:</p>
    <ul>
      <li>📩 <strong>Table of Contents (TOC) Alerts</strong> – Sent when a new issue is published.</li>
      <li>📩 <strong>Call for Papers & Special Issues</strong> – Notifications about upcoming themed issues or research topics.</li>
      <li>📩 <strong>Editorial & Peer Review Updates</strong> – Guidance on submission deadlines and best practices.</li>
      <li>📩 <strong>Research Highlights & Author Spotlights</strong> – Featuring outstanding contributions and high-impact studies.</li>
    </ul>
    <p>✅ Authors, reviewers, and subscribers can sign up for these alerts via the journal’s website.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Blog or Discussion Forum for Researchers</SubTitle>
    <p>The journal plans to launch an interactive blog and discussion forum, providing:</p>
    <ul>
      <li>📝 <strong>Expert Commentary</strong> – Insights from editors and guest researchers on emerging topics in agriculture and environmental sciences.</li>
      <li>📝 <strong>Author Interviews</strong> – Exclusive Q&A sessions with published researchers.</li>
      <li>📝 <strong>Research Debates & Open Discussions</strong> – A space for scholars to discuss controversial or evolving topics.</li>
      <li>📝 <strong>Early-Career Researcher Support</strong> – Tips on manuscript writing, peer review, and academic career development.</li>
    </ul>
    <p>🔹 The forum will serve as a collaborative space where researchers can exchange ideas, seek advice, and engage in interdisciplinary discussions.</p>
  </SubSection>

  <SubSection>
    <SubTitle>Commitment to Knowledge Sharing</SubTitle>
    <p>
      The African Journal of General Agriculture actively promotes scientific communication beyond traditional publishing through social media, newsletters, and interactive platforms. By engaging the research community and enhancing article visibility, the journal fosters a global network of knowledge exchange and academic collaboration.
    </p>
  </SubSection>
</Section>



    </Container>
  );
};

export default JournalPolicy10;
