import React from 'react'
import { createContext } from 'react'
import { 
    FaBook, FaFlask, FaHistory, FaNewspaper, FaAngleDown, FaAngleRight,
    FaHeartbeat, FaGraduationCap, FaLeaf, FaRobot, FaBrain, FaSatellite,
    FaTools, FaPalette, FaBalanceScale, FaUsers, FaGavel, FaFutbol,
    FaMusic, FaUtensils, FaGlobe, FaDragon, FaSeedling, FaSkullCrossbones, 
    FaRecycle, FaShieldAlt, FaGlobeAmericas
  } from "react-icons/fa";


export const Context = createContext();

const ContextProvider = ({children}) => {

  const categories = [
    { id: 1, name: "Agricultural Sciences (Crop, Livestock, Biotechnology)", icon: <FaSeedling /> },
    { id: 2, name: "Environmental Toxicology & Pollution Control", icon: <FaSkullCrossbones /> },
    { id: 3, name: "Bioremediation & Environmental Management", icon: <FaRecycle /> },
    { id: 4, name: "Food Safety, Health & Biosecurity", icon: <FaShieldAlt /> },
    { id: 5, name: "Climate Change & Sustainable Development", icon: <FaGlobeAmericas /> },
];



  return (
    <Context.Provider value={{categories}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider



// database

// pw: SBD@2025
// User: ajgajournal_ajgajournal
// Database: ajgajournal_ajgajournal
