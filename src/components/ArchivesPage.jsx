

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaSearch, FaDownload, FaFilePdf, FaFileAlt } from "react-icons/fa";
import Hero4 from "./Hero4";
import Sidebar from "./SideBar";

// **Typing Animation**
const TypingContainer = styled.h2`
  font-size: 1.2rem;
  color: rgba(0, 0, 255, 0.5);
  // color:#555;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid rgba(0, 0, 255, 0.7); /* Cursor effect */
  width: fit-content;
  animation: blinkCursor 0.8s steps(2, start) infinite;
  text-align:center;
  margin:0 auto;
  text-wrap:wrap;

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`;

// **Fade-in Animation**
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// **Styled Components**
const Container = styled.div`
  font-family: "Arial", sans-serif;
  background-color: white;
  color: rgba(0, 0, 255, 0.5);
  padding: 20px;
  padding-bottom:100px;
  width:100%;
`;

const Header = styled.header`
  padding: 20px;
  text-align: center;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 60%;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  outline:none;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background: rgba(0,0,255,0.5);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

const ArchiveSection = styled.section`
  margin-top: 50px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const ArchiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const ArchiveCard = styled.div`
  // background: rgba(0, 0, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: rgba(0, 0, 255, 0.8);
`;

const CardText = styled.p`
  font-size: 16px;
  color: #333;
  margin-top:10px;
`;

const CardActions = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const CardButton = styled.a`
  background:rgba(0,0,255,0.5);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size:0.8rem;
  
  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

const Div1 = styled.div`
  display:flex;
  width:100%;
`

const Div2 = styled.div`
  width:25%;
`

const Div3 = styled.div`
  width:75%;
`

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 50px;
  background-color: #f4f4f4;
`;

const ArchivesPage = () => {
  const [typedText, setTypedText] = useState(""); // Typing effect state
  const fullText = "We are a world-class journal and you can browse past and current issues of our journal in any category.";

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <Hero4 />
      <Div1>
        <Div2>
        <Sidebar/>
        </Div2>
      <Div3>
      <Container>
        <Header>
          <TypingContainer>{typedText}</TypingContainer>
        </Header>

        <SearchBarContainer>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, author, or keywords"
          />
          <SearchButton onClick={handleSearch}>
            <FaSearch size={20} /> Search
          </SearchButton>
        </SearchBarContainer>

        <ArchiveSection>
          <h3 style={{color:"#777"}}>Browse Our Archive:</h3>
          <ArchiveGrid>
            {/* Example Archive Card */}
            <ArchiveCard>
              <CardTitle>Understanding Quantum Computing</CardTitle>
              <CardText>By Dr. John Doe | Published in 2024</CardText>
              <CardActions>
                <CardButton href="#" target="_blank">
                  <FaDownload size={20} />
                  Download PDF
                </CardButton>
                <CardButton href="#" target="_blank">
                  <FaFileAlt size={20} />
                  View HTML
                </CardButton>
                <CardButton href="#" target="_blank">
                  <FaFilePdf size={20} />
                  DOI Link
                </CardButton>
              </CardActions>
            </ArchiveCard>

            {/* Example Archive Card */}
            <ArchiveCard>
              <CardTitle>AI in Healthcare</CardTitle>
              <CardText>By Dr. Jane Smith | Published in 2023</CardText>
              <CardActions>
                <CardButton href="#" target="_blank">
                  <FaDownload size={20} />
                  Download PDF
                </CardButton>
                <CardButton href="#" target="_blank">
                  <FaFileAlt size={20} />
                  View HTML
                </CardButton>
                <CardButton href="#" target="_blank">
                  <FaFilePdf size={20} />
                  DOI Link
                </CardButton>
              </CardActions>
            </ArchiveCard>
          </ArchiveGrid>
        </ArchiveSection>

   
      </Container>
      </Div3>
      
      </Div1>
    </>
  );
};

export default ArchivesPage;
