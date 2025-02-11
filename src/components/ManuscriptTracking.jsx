import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaClipboardList } from "react-icons/fa";

const TrackingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #1DA1F2, #0077B5);
`;

const FormWrapper = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background: #f9f9f9;

  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    background: transparent;
  }
`;

const SubmitButton = styled.button`
  background: #0077B5;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #005A93;
  }
`;

const StatusDisplay = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: ${(props) => (props.status === "Accepted" ? "green" : props.status === "Under Review" ? "orange" : "red")};
  color: white;
  font-weight: bold;
  border-radius: 5px;
`;

const ManuscriptTracking = () => {
  const [manuscriptId, setManuscriptId] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating different statuses (API integration needed for real tracking)
    const statuses = ["Under Review", "Accepted", "Rejected", "Revisions Required"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    setStatus(randomStatus);
  };

  return (
    <TrackingContainer>
      <FormWrapper>
        <h2>Track Your Manuscript</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <FaClipboardList />
            <input type="text" placeholder="Enter Manuscript ID" required onChange={(e) => setManuscriptId(e.target.value)} />
          </InputField>

          <SubmitButton type="submit">
            <FaSearch /> Track Manuscript
          </SubmitButton>
        </form>

        {status && <StatusDisplay status={status}>Status: {status}</StatusDisplay>}
      </FormWrapper>
    </TrackingContainer>
  );
};

export default ManuscriptTracking;
