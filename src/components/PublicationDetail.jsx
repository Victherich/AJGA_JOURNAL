// // src/components/PublicationDetail.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaBook, FaUser, FaCalendar, FaLink, FaFilePdf } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';

// // Styled Components
// const ContainerWrap = styled.div`
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     width:100%;
//     padding-top:100px;
//     padding-bottom:100px;
// `

// const Container = styled(motion.div)`
//   max-width: 1200px;
//   margin: auto;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// //   background: linear-gradient(145deg, #ffafbd, #ffc3a0);
//   background-color:whitesmoke;
//   border-radius: 20px;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   color: rgba(0,0,255,0.5);
//   animation: fadeIn 1s ease-in-out;
//   width:100%;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2.5em;
//   text-align: center;
//   margin-bottom: 20px;
//   color: rgba(0,0,255,0.5);
// `;

// const Field = styled.div`
//   width: 100%;
//   margin: 10px 0;
//   padding: 15px;
//   background: white;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   color: rgba(0,0,255,0.5);
//   font-size: 1.2em;
//   animation: slideIn 1s ease;

//   svg {
//     margin-right: 15px;
//     color: rgba(0,0,255,0.5);
//   }
// `;

// const StyledLink = styled.a`
//     font-weight:bold;
//     font-style:italic;
//   color:rgba(0,0,255,0.7);
//   text-decoration: none;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #fff;
//   }
// `;

// // Component Logic
// const PublicationDetail = () => {
//   const [publication, setPublication] = useState(null);
//   const [error, setError] = useState('');
//   const {id}=useParams();

//   useEffect(() => {
//     axios.get(`https://www.ajga-journal.org/api/get_publication_by_id.php?id=${id}`)
//       .then(response => {
//         if (response.data.success) {
//           setPublication(response.data.publication);
//         } else {
//           setError(response.data.message);
//         }
//       })
//       .catch(() => setError('Failed to fetch publication.'));
//   }, [id]);

//   if (error) {
//     return <Container>{error}</Container>;
//   }

//   if (!publication) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//    <ContainerWrap>
//          <Container 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ duration: 1 }}
//     >
//       <Title>
//         <FaBook /> {publication.title}
//       </Title>

//       <Field>
//         <FaUser /> Author ID: {publication.author_id}
//       </Field>

//       <Field>
//         <FaCalendar /> Created At: {new Date(publication.created_at).toLocaleDateString()}
//       </Field>

//       <Field>
//         <FaCalendar /> Updated At: {new Date(publication.updated_at).toLocaleDateString()}
//       </Field>

//       <Field>
//         <FaBook /> Abstract: {publication.abstract}
//       </Field>

//       <Field>
//         <FaBook /> Keywords: {publication.keywords}
//       </Field>

//       <Field>
//         <FaUser /> Co-Authors: {publication.co_authors}
//       </Field>

//       <Field>
//         <FaBook /> Article Category: {publication.article_category}
//       </Field>

//       <Field>
//         <FaBook /> Article Code: {publication.article_code}
//       </Field>

//       <Field>
//         <FaBook /> Last Revised Code: {publication.last_revised_article_code}
//       </Field>

//       <Field>
//         <FaLink /> DOI Link: 
//         <StyledLink href={publication.doiLink} target="_blank"> {publication.doiLink} </StyledLink>
//       </Field>

//       <Field>
//         <FaFilePdf /> File: 
//         <StyledLink href={`https://www.ajga-journal.org/api/${publication.file_path}`} target="_blank"> Download </StyledLink>
//       </Field>
//     </Container>
//    </ContainerWrap>
//   );
// };

// export default PublicationDetail;




// src/components/PublicationDetail.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaCalendar, FaLink, FaFilePdf } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import logo from '../Images/logo.png'
import { Context } from './Context';
import { useSelector } from 'react-redux';

// Styled Components
const ContainerWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction:column;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: #f5f5f5;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  color: #333;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: rgba(0,0,255,0.5);
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #555;
  margin: 5px 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: rgba(0,0,255,0.5);
  }
`;

const Description = styled.p`
  font-size: 1.1em;
  color: #444;
  line-height: 1.6;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgba(0,0,255,0.5);
  color: #fff;  
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  font-weight: bold;
  cursor:pointer;

  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

const DownloadButton = styled(StyledLink)`
  background: #1e90ff;
//   margin-left: 10px;

  &:hover {
    background: #007bff;
  }
`;

const BackButton = styled.button`
      display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
//   background: rgba(0,0,255,0.5);
  color: blue;  
  text-decoration: none;
  border-radius: 5px;
  border:1px solid blue;
  transition: background 0.3s ease;
  font-weight: bold;
  cursor:pointer;

  &:hover {
    // background: rgba(0,0,255,0.7);
  }
`

// Component Logic
const PublicationDetail = () => {
  const [publication, setPublication] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const {categories}=useContext(Context)
//   const [authorData, setAuthorData]=useState({})

  const [authorName, setAuthorName] = useState('');





  useEffect(() => {
    axios.get(`https://www.ajga-journal.org/api/get_publication_by_id.php?id=${id}`)
      .then(response => {
        if (response.data.success) {
          setPublication(response.data.publication);
          console.log(response.data.publication);
        } else {
          setError(response.data.message);
        }
      })
      .catch(() => setError('Failed to fetch publication.'));
  }, [id]);


  // Function to get category name from categories array
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id == categoryId);
    console.log(category)
    return category ? category.name : categoryId; // Show name if found, otherwise show ID
  };



  
  useEffect(() => {
    const getAuthorName = async () => {
      const name = await fetchAuthorData(publication?.author_id);
      setAuthorName(name);
    };
  
    getAuthorName();
  }, [publication?.author_id]);



  const fetchAuthorData = async (id) => {
    try {
      const response = await axios.get(`https://www.ajga-journal.org/api/get_author_by_id.php?id=${id}`);
  
      if (response.data.success && response.data.author) {
        return response.data.author.full_name;
      } else {
        return "Author not found"; // Optional: Default message
      }
    } catch (err) {
      console.error("Failed to fetch author details:", err);
      return "Error fetching author"; // Optional: Error message
    }
  };
  


  if (error) {
    return <Container>{error}</Container>;
  }

  if (!publication) {
    return <Container>Loading...</Container>;
  }

  return (
    <ContainerWrap>
      <Container
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {/* Left Column - Product Image */}
        <ImageWrapper>
          <img 
            src={logo} 
            alt="Publication"
          />
        </ImageWrapper>

        {/* Right Column - Product Details */}
        <Details>
          <Title>{publication.title.toUpperCase()}</Title>

          <Subtitle>
            <FaUser /> Author : {authorName}
          </Subtitle>

          <Subtitle>
  <FaCalendar /> Published Year: {new Date(publication.created_at).getFullYear()}
</Subtitle>


          {/* <Subtitle>
            <FaCalendar /> Updated At: {new Date(publication.updated_at).toLocaleDateString()}
          </Subtitle> */}

          <Description>
            <strong>Abstract:</strong> {publication.abstract}
          </Description>

          <Description>
            <strong>Keywords:</strong> {publication.keywords}
          </Description>

          <Description>
            <strong>Co-Authors:</strong> {publication.co_authors}
          </Description>

          <Description>
            <strong>Article Category:</strong> {getCategoryName(publication.article_category)}
          </Description>

          <Description>
            <strong>Article Code:</strong> {publication.article_code}
          </Description>
{/* 
          <Description>
            <strong>Last Revised Code:</strong> {publication.last_revised_article_code}
          </Description> */}

          <StyledLink onClick={()=>window.open(`${publication.doiLink}`,"_blank")}>
            <FaLink /> View DOI Link
          </StyledLink>

          <DownloadButton 
            href={`https://www.ajga-journal.org/api/${publication.file_path}`} 
            target="_blank"
          >
            <FaFilePdf /> Download PDF
          </DownloadButton>
        </Details>
      </Container>
      <BackButton onClick={()=>window.history.back()}>Back</BackButton>
    </ContainerWrap>
  );
};

export default PublicationDetail;
