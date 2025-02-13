import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  max-width: 600px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  h4{
  margin-top:10px;
  }

  p{
    margin-top:10px;
  }
    strong{
    // color:rgba(0,0,255,0.7);
    }
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background: ${(props) => {
    switch (props.status) {
      case "Accepted":
        return "green";
      case "Rejected":
        return "red";
      case "Revisions Requested":
        return "purple";
      default:
        return "orange";
    }
  }};
`;

const ManuscriptDetailModal = ({ manuscript, onClose }) => {
const {categories} = useContext(Context);

  // Function to get category name from categories array
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id == categoryId);
    console.log(category)
    return category ? category.name : categoryId; // Show name if found, otherwise show ID
  };

  if (!manuscript) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3 style={{color:"rgba(0,0,255,0.5)"}}>Manuscript Details</h3>
        <p><strong>Title:</strong> {manuscript.title}</p>
        <p><strong>Article Code:</strong> {manuscript.article_code}</p>
        <p><strong>Category:</strong> {getCategoryName(manuscript.article_category)}</p>
        <p><strong>Status:</strong> <StatusBadge status={manuscript.status}>{manuscript.status}</StatusBadge></p>
        <p><strong>Submitted Date:</strong> {manuscript.submittedDate}</p>
        <p><strong>Last Updated:</strong> {manuscript.lastUpdated}</p>
        <p><strong>File:</strong> <a href={`https://www.ajga-journal.org/api/${manuscript.file_path}`} target="_blank" rel="noopener noreferrer">Download File</a></p>
        <h4>Abstract:</h4>
        <span>{manuscript.abstract}</span>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ManuscriptDetailModal;
