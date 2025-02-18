import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaRedo, FaTimesCircle } from 'react-icons/fa';

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

const JournalPolicy7 = () => {
  return (
    <Container>
      <Section>
        <Title><FaCheckCircle /> Reviewer Recommendations</Title>
        <Content>
          After evaluation, reviewers provide one of the following recommendations:
          <ol>
            <li>Accept as is – Minor or no revisions needed</li>
            <li>Minor revisions required – The manuscript is scientifically sound but requires small adjustments</li>
            <li>Major revisions required – Substantial improvements needed in methodology, analysis, or presentation</li>
            <li>Reject – The manuscript is not suitable for publication due to critical flaws or lack of originality</li>
          </ol>
          Reviewers submit detailed feedback, including:
          <ul>
            <li>Strengths and weaknesses of the study</li>
            <li>Suggestions for improving clarity, methodology, and presentation</li>
            <li>Ethical concerns (if any)</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaRedo /> Author Revisions and Resubmission</Title>
        <Content>
          <ul>
            <li>Authors receive reviewer feedback and must submit a revised version addressing all concerns.</li>
            <li>A point-by-point response letter should accompany the revised manuscript, explaining how each comment was addressed.</li>
            <li>If major revisions are requested, the manuscript may undergo a second round of review.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Editorial Decision & Final Approval</Title>
        <Content>
          <ul>
            <li>✅ Accepted for publication – The manuscript moves to copyediting and production.</li>
            <li>🔄 Further revisions needed – Authors must make additional changes.</li>
            <li>❌ Rejected – The manuscript does not meet the journal’s standards.</li>
          </ul>
          Authors are notified of the final decision via the submission portal and email.
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Copyediting, Proofreading, and Publication</Title>
        <Content>
          <ul>
            <li>Accepted manuscripts undergo professional copyediting and formatting.</li>
            <li>Authors receive proofs for final approval before publication.</li>
            <li>The final version is assigned a DOI (Digital Object Identifier) and published open access on the journal’s website.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Post-Publication Evaluation</Title>
        <Content>
          <ul>
            <li>Published articles are indexed in databases (Google Scholar, AJOL, CrossRef, etc.).</li>
            <li>Readers and researchers can cite, comment, and engage with published work.</li>
            <li>The journal tracks citation metrics and altmetrics to assess article impact.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Commitment to Quality and Integrity</Title>
        <Content>
          The African Journal of General Agriculture ensures a transparent, fair, and rigorous review process to maintain the highest academic publishing standards. Authors, reviewers, and editors work collaboratively to advance scientific knowledge and innovation in agriculture and related fields.
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Submission Status Tracking</Title>
        <Content>
          The African Journal of General Agriculture provides a real-time submission status tracking system through its online submission portal, allowing authors to monitor the progress of their manuscripts at every stage of the publishing process.
        </Content>
      </Section>

      <Section>
        <Title><FaCheckCircle /> Accessing the Submission Tracking System</Title>
        <Content>
          <ul>
            <li>Authors must log in to their accounts on the journal’s online submission portal using their registered email and password.</li>
            <li>The submission dashboard displays all submitted manuscripts with their current status and progress history.</li>
            <li>Authors receive automated email notifications at key stages of the review and editorial process.</li>
          </ul>
        </Content>
      </Section>
    </Container>
  );
};

export default JournalPolicy7;
