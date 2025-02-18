import React, { useContext, useState } from "react";
import styled from "styled-components";
import { 
  FaBook, FaFlask, FaHistory, FaNewspaper, FaAngleDown, FaAngleRight,
  FaHeartbeat, FaGraduationCap, FaLeaf, FaRobot, FaBrain, FaSatellite,
  FaTools, FaPalette, FaBalanceScale, FaUsers, FaGavel, FaFutbol,
  FaMusic, FaUtensils, FaGlobe, FaDragon, FaSeedling, FaSkullCrossbones, 
  FaRecycle, FaShieldAlt, FaGlobeAmericas
} from "react-icons/fa";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";



const SidebarContainer = styled.aside`

  width:100%;
  height: 100%;
  background: #222;
  color: white;
  padding: 20px;

  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
`;

const SidebarTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #444;
  padding-bottom: 10px;


  @media(max-width:768px){
  font-size:20px;
}
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #444;
  }

  @media(max-width:768px){
  font-size:14px;
}
`;

const YearSection = styled.div`
  margin-top: 15px;
`;

const YearTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: #333;
  transition: 0.3s;
  &:hover {
    background: #555;
  }
`;

const IssuesList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 5px;
`;

const IssueItem = styled.li`
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #444;
    border-radius: 5px;
  }
`;

const Sidebar = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const {categories, mobileMenuOpen, setMobileMenuOpen}=useContext(Context);
  const navigate = useNavigate()

  const years = {
    2025: ["Vol 12, Issue 1", "Vol 12, Issue 2"],
    2024: ["Vol 11, Issue 1", "Vol 11, Issue 2", "Special Edition"],
    2023: ["Vol 10, Issue 1", "Vol 10, Issue 2"],
  };


 

  return (
    <SidebarContainer>
      <SidebarTitle>Browse Categories</SidebarTitle>

      
      
  
      {/* Categories Section */}
      {categories.map((category, index) => (
        <MenuItem key={index} onClick={()=>{navigate(`/issuesandpubs/${category.id}`); setMobileMenuOpen(false)}}>
          {category.icon} {category.name}
        </MenuItem>
      ))}

      {/* Archive Section */}
      <SidebarTitle style={{ marginTop: "30px" }}>Archives</SidebarTitle>
      {Object.keys(years).map((year) => (
        <YearSection key={year}>
          <YearTitle onClick={() => setExpandedYear(expandedYear === year ? null : year)}>
            {year} {expandedYear === year ? <FaAngleDown /> : <FaAngleRight />}
          </YearTitle>
          {expandedYear === year && (
            <IssuesList>
              {years[year].map((issue, idx) => (
                <IssueItem key={idx}>{issue}</IssueItem>
              ))}
            </IssuesList>
          )}
        </YearSection>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;



