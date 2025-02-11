import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaUniversity, FaIdBadge, FaEdit, FaSave } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;

`;

const ProfileCard = styled.div`

  padding: 30px;

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

  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    background: transparent;
  }
`;

const EditButton = styled.button`
  background: ${(props) => (props.editMode ? "#FF9800" : "#0077B5")};
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${(props) => (props.editMode ? "#E68900" : "#005A93")};
  }
`;

const AuthorProfile = () => {
  // Default user information (this should be fetched from API)
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    affiliation: "Federal University of Agriculture",
    orcid: "0000-0002-1825-0097",
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState(userData);

  // Handle input changes
  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  // Toggle edit mode and update user data
  const toggleEdit = () => {
    if (editMode) {
      setUserData(updatedData);
      alert("Profile Updated Successfully!");
    }
    setEditMode(!editMode);
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <h2>User Profile</h2>

        <InputField>
          <FaUser />
          <input type="text" name="name" value={updatedData.name} disabled={!editMode} onChange={handleChange} />
        </InputField>

        <InputField>
          <FaEnvelope />
          <input type="email" name="email" value={updatedData.email} disabled={!editMode} onChange={handleChange} />
        </InputField>

        <InputField>
          <FaUniversity />
          <input type="text" name="affiliation" value={updatedData.affiliation} disabled={!editMode} onChange={handleChange} />
        </InputField>

        <InputField>
          <FaIdBadge />
          <input type="text" name="orcid" value={updatedData.orcid} disabled={!editMode} onChange={handleChange} />
        </InputField>

        <EditButton editMode={editMode} onClick={toggleEdit}>
          {editMode ? <FaSave /> : <FaEdit />} {editMode ? "Save Changes" : "Edit Profile"}
        </EditButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default AuthorProfile;
