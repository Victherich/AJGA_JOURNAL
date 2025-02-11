import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaBook, FaFlask, FaHistory, FaNewspaper, FaAngleDown, FaAngleRight,
  FaHeartbeat, FaGraduationCap, FaLeaf, FaRobot, FaBrain, FaSatellite,
  FaTools, FaPalette, FaBalanceScale, FaUsers, FaGavel, FaFutbol,
  FaMusic, FaUtensils, FaGlobe, FaDragon, FaSeedling, FaSkullCrossbones, 
  FaRecycle, FaShieldAlt, FaGlobeAmericas
} from "react-icons/fa";



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

  const years = {
    2025: ["Vol 12, Issue 1", "Vol 12, Issue 2"],
    2024: ["Vol 11, Issue 1", "Vol 11, Issue 2", "Special Edition"],
    2023: ["Vol 10, Issue 1", "Vol 10, Issue 2"],
  };

  const categories = [
    { id: 1, name: "Agricultural Sciences (Crop, Livestock, Biotechnology)", icon: <FaSeedling /> },
    { id: 2, name: "Environmental Toxicology & Pollution Control", icon: <FaSkullCrossbones /> },
    { id: 3, name: "Bioremediation & Environmental Management", icon: <FaRecycle /> },
    { id: 4, name: "Food Safety, Health & Biosecurity", icon: <FaShieldAlt /> },
    { id: 5, name: "Climate Change & Sustainable Development", icon: <FaGlobeAmericas /> },
    // { id: 6, name: "Science & Technology", icon: <FaFlask /> },
    // { id: 7, name: "History & Culture", icon: <FaHistory /> },
    // { id: 8, name: "Business & Economics", icon: <FaBook /> },
    // { id: 9, name: "Current Affairs", icon: <FaNewspaper /> },
    // { id: 10, name: "Health & Medicine", icon: <FaHeartbeat /> },
    // { id: 11, name: "Education & Research", icon: <FaGraduationCap /> },
    // { id: 12, name: "Environmental Studies", icon: <FaLeaf /> },
    // { id: 13, name: "Artificial Intelligence", icon: <FaRobot /> },
    // { id: 14, name: "Psychology & Behavior", icon: <FaBrain /> },
    // { id: 15, name: "Space & Astronomy", icon: <FaSatellite /> },
    // { id: 16, name: "Engineering & Innovation", icon: <FaTools /> },
    // { id: 17, name: "Arts & Literature", icon: <FaPalette /> },
    // { id: 18, name: "Philosophy & Ethics", icon: <FaBalanceScale /> },
    // { id: 19, name: "Social Sciences", icon: <FaUsers /> },
    // { id: 20, name: "Law & Governance", icon: <FaGavel /> },
    // { id: 21, name: "Sports & Recreation", icon: <FaFutbol /> },
    // { id: 22, name: "Music & Performing Arts", icon: <FaMusic /> },
    // { id: 23, name: "Food & Nutrition", icon: <FaUtensils /> },
    // { id: 24, name: "Travel & Geography", icon: <FaGlobe /> },
    // { id: 25, name: "Mythology & Folklore", icon: <FaDragon /> }
];


  return (
    <SidebarContainer>
      <SidebarTitle>Browse Categories</SidebarTitle>
      
      {/* Categories Section */}
      {categories.map((category, index) => (
        <MenuItem key={index}>
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
