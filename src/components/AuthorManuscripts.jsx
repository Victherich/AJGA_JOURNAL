import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background: #f4f4f4;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  color: #0077B5;
`;

const TableContainer = styled.div`
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #0077B5;
  color: white;
  padding: 12px;
  text-align: left;
`;

const TdLabel = styled.td`
  font-weight: bold;
  background: #f1f1f1;
  padding: 10px;
  width: 30%;
`;

const TdValue = styled.td`
  padding: 10px;
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.status === "Accepted"
      ? "green"
      : props.status === "Rejected"
      ? "red"
      : "orange"};
`;

const ViewButton = styled.button`
  background: #0077B5;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #005A93;
  }
`;

const AuthorManuscripts = () => {
  // Dummy Manuscript Data (Replace with API Data)
  const [manuscripts, setManuscripts] = useState([]);

  useEffect(() => {
    // Simulating API call
    const fetchedData = [
      {
        id: 1,
        title: "Impact of Climate Change on Agriculture",
        status: "Under Review",
        submittedDate: "2024-02-01",
        lastUpdated: "2024-02-05",
      },
      {
        id: 2,
        title: "Organic Farming Techniques for Sustainable Growth",
        status: "Accepted",
        submittedDate: "2023-12-15",
        lastUpdated: "2024-01-10",
      },
      {
        id: 3,
        title: "Soil Erosion and Its Effect on Crop Yield",
        status: "Rejected",
        submittedDate: "2023-11-20",
        lastUpdated: "2023-12-01",
      },
    ];

    setManuscripts(fetchedData);
  }, []);

  return (
    <Container>
      <Title>Your Submitted Manuscripts</Title>
      {manuscripts.map((manuscript) => (
        <TableContainer key={manuscript.id}>
          <Table>
            <tbody>
              <tr>
                <TdLabel>Title:</TdLabel>
                <TdValue>{manuscript.title}</TdValue>
              </tr>
              <tr>
                <TdLabel>Status:</TdLabel>
                <TdValue>
                  <StatusBadge style={{textAlign:"center"}} status={manuscript.status}>
                    {manuscript.status}
                  </StatusBadge>
                </TdValue>
              </tr>
              <tr>
                <TdLabel>Submitted Date:</TdLabel>
                <TdValue>{manuscript.submittedDate}</TdValue>
              </tr>
              <tr>
                <TdLabel>Last Updated:</TdLabel>
                <TdValue>{manuscript.lastUpdated}</TdValue>
              </tr>
              <tr>
                <TdLabel>Action:</TdLabel>
                <TdValue>
                  <ViewButton onClick={() => alert(`Viewing manuscript: ${manuscript.title}`)}>
                    View
                  </ViewButton>
                </TdValue>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      ))}
    </Container>
  );
};

export default AuthorManuscripts;
