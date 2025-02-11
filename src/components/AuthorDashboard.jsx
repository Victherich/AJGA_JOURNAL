import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaFileUpload, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import AuthorProfile from "./AuthorProfile";
import ManuscriptSubmission from "./ManuscriptSubmission";
import ManuscriptTracking from "./ManuscriptTracking";
import AuthorManuscripts from "./AuthorManuscripts";


const DashboardContainer = styled.div`
  display: flex;
  background: #f4f4f4;
  padding-top:70px;
  justify-content:center;
`;

const Sidebar = styled.div`
  background: #0077B5;
  width: ${(props) => (props.open ? "250px" : "60px")};
  height: 100%;
  min-height:600px;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 10;
`;

const MenuButton = styled.div`
  top: 150px;
  left: ${(props) => (props.open ? "220px" : "10px")};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: white;
  transition: left 0.3s ease-in-out;


  @media(max-width:420px){
  display:none;
  }
`;

const MenuItem = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  color: white;
  padding: 15px;
  cursor: pointer;
  margin: 5px 0;
  border-radius: 5px;
  transition: 0.3s;
  font-size: 1rem;

  &:hover {
    background: #005A93;
  }

  svg {
    margin-right: ${(props) => (props.open ? "10px" : "0")};
    transition: margin-right 0.3s;
  }

  span {
    display: ${(props) => (props.open ? "inline" : "none")};
  }

@media(max-width:420px){
  span{
   
  }
}


`;

const ContentContainer = styled.div`
  // margin-left: ${(props) => (props.open ? "250px" : "60px")};
  padding-top: 20px;

  width: 100%;
  transition: margin-left 0.3s ease-in-out;
`;

const AuthorDashboard = () => {
  const [activePage, setActivePage] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <DashboardContainer>
      <Sidebar open={menuOpen}>
        <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <MenuItem open={menuOpen} onClick={() => setActivePage("profile")}>
          <FaUser /> <span>Profile</span>
        </MenuItem>

        <MenuItem open={menuOpen} onClick={() => setActivePage("submission")}>
          <FaFileUpload /> <span>Submit Manuscript</span>
        </MenuItem>

        <MenuItem open={menuOpen} onClick={() => setActivePage("mymanuscripts")}>
          <FaSearch /> <span>My Submission</span>
        </MenuItem>
      </Sidebar>

      <ContentContainer open={menuOpen}>
        {activePage === "profile" && <AuthorProfile/>}
        {activePage === "submission" && <ManuscriptSubmission />}
        {activePage === "mymanuscripts" && <AuthorManuscripts />}
      </ContentContainer>
    </DashboardContainer>
  );
};

export default AuthorDashboard;
