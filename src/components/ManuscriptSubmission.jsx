import React, { useState } from "react";
import styled from "styled-components";
import { FaFileUpload, FaTag, FaFileAlt, FaUserFriends, FaUpload } from "react-icons/fa";

const SubmissionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
//   height: 100vh;
//   background: linear-gradient(to right, #0077B5, #1DA1F2);
`;

const FormWrapper = styled.div`
//   background: white;
  padding: 10px;
  border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
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

  input, select, textarea {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    background: transparent;
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  background: #1DA1F2;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005A93;
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

const ManuscriptSubmission = () => {
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    keywords: "",
    coAuthors: "",
    articleType: "Research Article",
    manuscriptFile: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, manuscriptFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Manuscript:", formData);
  };

  return (
    <SubmissionContainer>
      <FormWrapper>
        <h2>Submit Your Manuscript</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <FaFileAlt />
            <input type="text" name="title" placeholder="Manuscript Title" required onChange={handleChange} />
          </InputField>

          <InputField>
            <textarea name="abstract" placeholder="Abstract" required onChange={handleChange}></textarea>
          </InputField>

          <InputField>
            <FaTag />
            <input type="text" name="keywords" placeholder="Keywords (comma-separated)" required onChange={handleChange} />
          </InputField>

          <InputField>
            <FaUserFriends />
            <input type="text" name="coAuthors" placeholder="Co-Authors (if any)" onChange={handleChange} />
          </InputField>

          <InputField>
            <select name="articleType" required onChange={handleChange}>
              <option value="Research Article">Research Article</option>
              <option value="Review Article">Review Article</option>
              <option value="Short Communication">Short Communication</option>
              <option value="Technical Report">Technical Report</option>
            </select>
          </InputField>

          <FileInput id="file" type="file" accept=".doc,.docx,.pdf" required onChange={handleFileChange} />
          <FileLabel htmlFor="file">
            <FaUpload /> Upload Manuscript
          </FileLabel>

          <SubmitButton type="submit">Submit Manuscript</SubmitButton>
        </form>
      </FormWrapper>
    </SubmissionContainer>
  );
};

export default ManuscriptSubmission;
