import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaRedo, FaTimesCircle, FaArchive } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: rgba(0, 0, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Content = styled.p`
  line-height: 1.6;
`;

const JournalPolicy8 = () => {
  return (
    <Container>
      <Section>
        <Title><FaCheckCircle /> Submission Status Stages & Meaning</Title>
        <Content>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Status</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manuscript Submitted</td>
                <td>The manuscript has been successfully uploaded to the system and awaits initial screening.</td>
              </tr>
              <tr>
                <td>Under Editorial Screening</td>
                <td>The editorial team is checking compliance with journal guidelines, formatting, and ethical requirements.</td>
              </tr>
              <tr>
                <td>Desk Rejected</td>
                <td>The manuscript did not pass the initial screening due to formatting issues, scope mismatch, or plagiarism concerns.</td>
              </tr>
              <tr>
                <td>Under Review</td>
                <td>The manuscript has been sent to external reviewers for peer evaluation.</td>
              </tr>
              <tr>
                <td>Major/Minor Revisions Required</td>
                <td>Reviewers have suggested changes, and authors must submit a revised version.</td>
              </tr>
              <tr>
                <td>Revised Manuscript Under Review</td>
                <td>The revised manuscript is being re-evaluated by reviewers or editors.</td>
              </tr>
              <tr>
                <td>Accepted</td>
                <td>The manuscript has been approved for publication and moves to the copyediting stage.</td>
              </tr>
              <tr>
                <td>In Production</td>
                <td>The manuscript is undergoing formatting, DOI assignment, and final proofreading.</td>
              </tr>
              <tr>
                <td>Published</td>
                <td>The final version of the article is available online with a DOI.</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </Section>

      <Section>
        <Title><FaRedo /> Tracking Revisions and Resubmissions</Title>
        <Content>
          <ul>
            <li>If revisions are required, authors will receive reviewer comments and detailed instructions for modifications.</li>
            <li>The revised manuscript must be uploaded through the same submission portal, with a point-by-point response letter addressing reviewer feedback.</li>
            <li>The system updates the status to "Revised Manuscript Under Review" upon resubmission.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Communication and Notifications</Title>
        <Content>
          <ul>
            <li>Authors receive email alerts for each status update, including review decisions, editorial comments, and final acceptance.</li>
            <li>Authors can send queries or requests for clarification directly through the submission portal messaging system.</li>
            <li>The editorial office ensures prompt responses to author inquiries regarding submission progress.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Post-Acceptance Tracking</Title>
        <Content>
          <ul>
            <li>Once accepted, manuscripts proceed to copyediting, typesetting, and DOI assignment.</li>
            <li>Authors receive a proof version for final review before publication.</li>
            <li>After publication, authors can track their article’s citations and impact metrics via CrossRef, Google Scholar, and journal indexing databases.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Commitment to Transparency</Title>
        <Content>
          The African Journal of General Agriculture ensures a transparent, efficient, and user-friendly submission tracking system. This allows authors to remain informed throughout the peer-review and publication process, ensuring a smooth experience from submission to final publication.
        </Content>
      </Section>

      <Section>
        <Title><FaArchive /> Archives & Published Issues</Title>
        <Content>
          The African Journal of General Agriculture maintains a well-organized archive of past and current issues, ensuring that researchers, scholars, and professionals can easily access previously published articles. The journal’s digital repository is designed to provide seamless navigation and retrieval of scientific content.
        </Content>
      </Section>
    </Container>
  );
};

export default JournalPolicy8;
