import React from "react";
import styled from "styled-components";

const EditorialContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  
  h2{
    color:rgba(0,0,255,0.5);
    font-size:2rem;
  }

  h3{
    color:rgba(0,0,255,0.5);
  }
    p{
    color:#444;
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const EditorCard = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const EditorImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const EditorialBoard = () => {
  return (
    <EditorialContainer id="editorial-board">
      <h2>Editorial Board</h2>
      <Grid>
        <EditorCard>
          <EditorImage src="https://via.placeholder.com/150" alt="Editor 1" />
          <h3>Dr. John Smith</h3>
          <p>Professor of Computer Science</p>
        </EditorCard>
        <EditorCard>
          <EditorImage src="https://via.placeholder.com/150" alt="Editor 2" />
          <h3>Dr. Emma White</h3>
          <p>Expert in AI & Data Science</p>
        </EditorCard>
      </Grid>
    </EditorialContainer>
  );
};

export default EditorialBoard;
