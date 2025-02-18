// // import React from 'react';
// // import styled from 'styled-components';
// // import { FaBookOpen, FaGlobe, FaCopyright, FaCheckCircle, FaExclamationTriangle, FaNewspaper, FaListAlt, FaChartLine } from 'react-icons/fa'; // Import icons
// // import openAccessImage from '../Images/ai.jpg'; // Import your images
// // import peerReviewImage from '../Images/ai.jpg';
// // import indexingImage from '../Images/ai.jpg';
// // import impactImage from '../Images/ai.jpg';


// // const PageContainer = styled.div`
// //   padding: 20px;
// //   font-family: sans-serif;
// //   background-color: #f8f8f8; /* Light background color */
// //   @media (max-width: 768px) {
// //     padding: 10px; /* Adjust padding for smaller screens */
// //   }
// // `;

// // const Section = styled.div`
// //   margin-bottom: 30px;
// //   padding: 20px;
// //   background-color: white;
// //   border-radius: 8px;
// //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
// //   @media (max-width: 768px) {
// //     padding: 15px; /* Adjust padding for smaller screens */
// //   }
// // `;

// // const SectionTitle = styled.h2`
// //   color: #333;
// //   margin-bottom: 15px;
// //   display: flex;
// //   align-items: center; /* Align icon and text */
// //   svg {
// //     margin-right: 10px;
// //   }
// // `;

// // const ImageContainer = styled.div`
// //   margin-bottom: 15px;
// //   img {
// //     width: 100%;
// //     border-radius: 8px;
// //     object-fit: cover; /* Ensure image covers container */
// //     max-height: 300px; /* Set a maximum height for images */
// //   }
// // `;

// // const Paragraph = styled.p`
// //   line-height: 1.6;
// //   color: #555;
// // `;

// // const List = styled.ul`
// //   list-style-type: disc;
// //   padding-left: 20px;
// //   margin-bottom: 15px;
// //   li {
// //     margin-bottom: 8px;
// //   }
// // `;

// // const ListItem = styled.li`
// //   /* You can add any specific styling for list items here */
// // `;


// // const PublishingPolicies = () => {
// //   return (
// //     <PageContainer>
// //       <Section>
// //         <SectionTitle><FaBookOpen />Publishing Policies of the African Journal of General Agriculture</SectionTitle>
// //         <ImageContainer><img src={openAccessImage} alt="Open Access" /></ImageContainer>
// //         <Paragraph>The African Journal of General Agriculture follows a rigorous peer-review process and upholds the highest ethical standards in scientific publishing. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), the journal is committed to ensuring broad access to high-quality research while maintaining transparency in its publication processes.</Paragraph>

// //         {/* ... (Rest of the Publishing Policies content using the styled components) */}
// //         <SectionTitle><FaGlobe />1. Open Access Policy</SectionTitle>
// //         <Paragraph>The journal operates under an open-access model, ensuring that all published articles are freely available to researchers, professionals, policymakers, and the general public worldwide without subscription fees. This policy promotes knowledge dissemination, academic collaboration, and increased citation of published works.</Paragraph>
// //         <Paragraph>All articles are published under a Creative Commons license, allowing unrestricted access, distribution, and reproduction, provided the original work is properly cited.</Paragraph>

// //         {/* ... (Rest of the content, following the same pattern) */}
// //         <SectionTitle><FaCopyright />2. Copyright Policy</SectionTitle>
// //         <List>
// //           <ListItem>Authors retain the copyright of their published work while granting the journal a license to publish and distribute the article.</ListItem>
// //           <ListItem>The journal allows authors to share their articles on institutional repositories, personal websites, and academic networking sites, ensuring maximum visibility and impact.</ListItem>
// //         </List>

// //         <SectionTitle><FaCheckCircle />4. Peer-Review Process</SectionTitle>
// //         <ImageContainer><img src={peerReviewImage} alt="Peer Review" /></ImageContainer>
// //         <Paragraph>All submissions undergo a double-blind peer review, where the identities of both authors and reviewers remain anonymous. The review process ensures:</Paragraph>
// //         <List>
// //             <ListItem>Scientific rigor and methodological soundness</ListItem>
// //             <ListItem>Originality and contribution to the field</ListItem>
// //             <ListItem>Clarity, coherence, and compliance with the journal’s guidelines</ListItem>
// //         </List>

// //         <SectionTitle><FaExclamationTriangle />5. Plagiarism and Ethical Standards</SectionTitle>
// //         <Paragraph>The journal strictly prohibits plagiarism, data fabrication, and unethical research practices. All manuscripts are screened using plagiarism detection software, and any form of academic misconduct may lead to desk rejection or retraction of published articles.</Paragraph>

// //       </Section>

// //       <Section>
// //         <SectionTitle><FaListAlt />Indexing</SectionTitle>
// //         <ImageContainer><img src={indexingImage} alt="Indexing" /></ImageContainer>
// //         <Paragraph>The African Journal of General Agriculture is committed to maintaining high visibility and accessibility in the global research community. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), it strives to be included in major academic and scientific databases to enhance its reach and credibility. The journal will be indexed in the following:</Paragraph>
// //         <List>
// //           <ListItem>Google Scholar – Ensuring broad visibility in academic search engines.</ListItem>
// //           {/* ... other indexing items */}
// //         </List>
// //       </Section>

// //       <Section>
// //         <SectionTitle><FaChartLine />Impact Factor & Citation Metrics</SectionTitle>
// //         <ImageContainer><img src={impactImage} alt="Impact Factor" /></ImageContainer>
// //         <Paragraph>The African Journal of General Agriculture is actively building its impact in the research community through citation tracking and altmetrics. While the journal’s impact factor is currently under evaluation, its influence can be measured through:</Paragraph>
// //         <List>
// //           <ListItem>h-index and citation count (via Google Scholar and ResearchGate)</ListItem>
// //           {/* ... other impact items */}
// //         </List>
// //       </Section>
// //     </PageContainer>
// //   );
// // };

// // export default PublishingPolicies;




// import React from "react";
// import styled from "styled-components";
// import { FaBookOpen, FaGlobe, FaFileAlt, FaShieldAlt, FaMoneyBill, FaClipboardCheck } from "react-icons/fa";
// // import openAccessImage from "./images/open-access.jpg";
// // import peerReviewImage from "./images/peer-review.jpg";
// import ethicsImage from "../Images/ai.jpg";
// // import indexingImage from "./images/indexing.jpg";
// // import impactImage from "./images/impact.jpg";
// import openAccessImage from '../Images/ai.jpg'; // Import your images
// import peerReviewImage from '../Images/ai.jpg';
// import indexingImage from '../Images/ai.jpg';
// import impactImage from '../Images/ai.jpg';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   padding: 20px;
//   max-width: 1200px;
//   margin: auto;
// `;

// const Section = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 1.5rem;
//   color: #333;
// `;

// const Text = styled.p`
//   font-size: 1rem;
//   color: #555;
//   max-width: 800px;
//   text-align:left;
// `;

// const Image = styled.img`
//   width: 100%;
//   max-width: 600px;
//   border-radius: 8px;
//   margin-top: 15px;
// `;

// const List = styled.ul`
//   text-align: left;
//   max-width: 800px;
// `;

// const ListItem = styled.li`
//   font-size: 1rem;
//   color: #555;
//   margin-bottom: 5px;
// `;

// const PublishingPolicies = () => {
//   return (
//     <Container>
//       <Section>
//         <Title><FaBookOpen /> Publishing Policies of the African Journal of General Agriculture</Title>
//         <Text>The African Journal of General Agriculture follows a rigorous peer-review process and upholds the highest ethical standards in scientific publishing. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), the journal is committed to ensuring broad access to high-quality research while maintaining transparency in its publication processes.</Text>
//       </Section>
      
//       <Section>
//         <Title><FaGlobe /> Open Access Policy</Title>
//         <Text>The journal operates under an open-access model, ensuring that all published articles are freely available to researchers, professionals, policymakers, and the general public worldwide without subscription fees. This policy promotes knowledge dissemination, academic collaboration, and increased citation of published works.
// All articles are published under a Creative Commons license, allowing unrestricted access, distribution, and reproduction, provided the original work is properly cited.
// </Text>
//         {/* <Image src={openAccessImage} alt="Open Access" /> */}
//       </Section>

//       <Section>
//         <Title><FaMoneyBill /> Article Processing Charges (APCs)</Title>
//         <Text>To support the costs of peer review, editing, online hosting, and long-term archiving, authors may be required to pay an Article Processing Charge (APC) upon acceptance of their manuscript. Waivers or discounts may be available for authors from low-income or developing countries and for members of NISEB upon request.</Text>
//       </Section>

//       <Section>
//         <Title><FaFileAlt /> Copyright Policy</Title>
//         <List>
//           <ListItem>Authors retain the copyright of their published work while granting the journal a license to publish and distribute the article.</ListItem>
//           <ListItem>The journal allows authors to share their articles on institutional repositories, personal websites, and academic networking sites, ensuring maximum visibility and impact.</ListItem>
//         </List>
//       </Section>

//       <Section>
//         <Title><FaClipboardCheck /> Peer-Review Process</Title>
//         <Text>All submissions undergo a double-blind peer review, where the identities of both authors and reviewers remain anonymous. The review process ensures: <br/>1. Scientific rigor and methodological soundness, <br/>2. Originality and contribution to the field, <br/>3. Clarity, coherence, and compliance with the journal’s guidelines. <br/>Manuscripts may be accepted, revised, or rejected based on the reviewers’ recommendations and the editorial board’s decision.</Text>
//         {/* <Image src={peerReviewImage} alt="Peer Review" /> */}
//       </Section>
      
//       <Section>
//         <Title><FaShieldAlt /> Plagiarism and Ethical Standards</Title>
//         <Text>The journal strictly prohibits plagiarism, data fabrication, and unethical research practices. All manuscripts are screened using plagiarism detection software, and any form of academic misconduct may lead to desk rejection or retraction of published articles.</Text>
//         {/* <Image src={ethicsImage} alt="Ethics" /> */}
//       </Section>

//       <Section>
//         <Title><FaShieldAlt /> Subscription and Print Copies</Title>
//         <Text>While the journal is primarily open access, institutions, libraries, and individuals may request printed copies for archival or reference purposes. Subscription fees apply for printed editions, and bulk orders may be available at discounted rates.</Text>
//         <Text>The African Journal of General Agriculture is dedicated to promoting scientific integrity, accessibility, and global collaboration, ensuring that valuable research reaches a broad audience for maximum impact.</Text>
       
//         {/* <Image src={ethicsImage} alt="Ethics" /> */}
//       </Section>
      
//       <Section>
//         <Title><FaBookOpen /> Indexing</Title>
//         <Text>The African Journal of General Agriculture is committed to maintaining high visibility and accessibility in the global research community. As one of the official journals of the Society for Experimental Biology of Nigeria (NISEB), it strives to be included in major academic and scientific databases to enhance its reach and credibility. The journal will be indexed in the following:</Text>
//         <List>
//           <ListItem>Google Scholar – Ensuring broad visibility in academic search engines.</ListItem>
//           <ListItem>African Journals Online (AJOL) – Facilitating access to research across Africa.</ListItem>
//           <ListItem>DOAJ (Directory of Open Access Journals) [Pending/In Process] – Increasing discoverability among open-access databases.</ListItem>
//           <ListItem>Scopus [Under Consideration] – Enhancing global citation and research impact.</ListItem>
//           <ListItem>Web of Science [Planned Submission] – Expanding recognition in high-impact journal listings.</ListItem>
//           <ListItem>CrossRef (DOI Registration) – Assigning Digital Object Identifiers (DOIs) to all published articles for permanent online access.</ListItem>
//         </List>
//         <Text>The journal is continuously working toward inclusion in more prominent international databases, ensuring researchers benefit from wider dissemination and higher citation rates.</Text>
       
//         {/* <Image src={indexingImage} alt="Indexing" /> */}
//       </Section>
      
//       <Section>
//         <Title><FaGlobe /> Impact Factor & Citation Metrics</Title>
//         <Text>The African Journal of General Agriculture is actively building its impact in the research community through citation tracking and altmetrics. While the journal’s impact factor is currently under evaluation, its influence can be measured through:</Text>
//         <List>
//           <ListItem>h-index and citation count (via Google Scholar and ResearchGate)</ListItem>
//           <ListItem>Journal Metrics from Scopus and Web of Science (when indexed)</ListItem>
//           <ListItem>Altmetric scores indicating article reach and engagement on social media and news platforms</ListItem>
//         </List>
//         <Text>
//         Authors publishing in the journal benefit from global visibility, DOI indexing, and increased citation potential, making their research accessible to scholars, policymakers, and industry professionals.
//         </Text>
//         <Text>
//         The journal remains committed to scientific excellence and continuous improvement, working toward higher indexing recognition and citation impact in the academic community.
//         </Text>
//         {/* <Image src={impactImage} alt="Impact Factor" /> */}
//       </Section>
//     </Container>
//   );
// };

// export default PublishingPolicies;

import React from 'react'
import JournalPolicy1 from './JournalPolicy1'
import JournalPolicy2 from './JournalPolicy2'
import JournalPolicy3 from './JournalPolicy3'
import JournalPolicy4 from './JournalPolicy4'
import JournalPolicy5 from './JournalPolicy5'
import JournalPolicy6 from './JournalPolicy6'
import styled from 'styled-components'
import policybg from '../Images/policybg.jpg'
import JournalPolicy7 from './JournalPolicy7'
import JournalPolicy8 from './JournalPolicy8'
import JournalPolicy9 from './JournalPolicy9'
import JournalPolicy10 from './JournalPolicy10'

const PublishingPolicies = () => {
const Div = styled.div`
  // background-image:url(${policybg});
  padding-bottom:100px;
  background-size:cover;
`

  return (
    <Div>
      <JournalPolicy1/>
      <JournalPolicy2/>
      <JournalPolicy3/>
      <JournalPolicy4/>
      <JournalPolicy5/>
      <JournalPolicy6/>
      <JournalPolicy7/>
      <JournalPolicy8/>
      <JournalPolicy9/>
      <JournalPolicy10/>
    </Div>
  )
}

export default PublishingPolicies

