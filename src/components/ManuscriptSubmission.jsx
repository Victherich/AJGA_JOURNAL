



// import React, { useContext, useState } from "react";
// import styled from "styled-components";
// import { FaFileUpload, FaTag, FaFileAlt, FaUserFriends, FaUpload } from "react-icons/fa";
// import { Context } from './Context';

// const SubmissionContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const FormWrapper = styled.div`
//   padding: 10px;
//   border-radius: 10px;
//   width: 100%;
//   text-align: center;
// `;

// const InputField = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   background: #f9f9f9;

//   input, select, textarea {
//     border: none;
//     outline: none;
//     width: 100%;
//     padding: 5px;
//     background: transparent;
//   }

//   textarea {
//     resize: none;
//     height: 100px;
//   }
// `;

// const FileInput = styled.input`
//   display: none;
// `;

// const FileLabel = styled.label`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   margin-top: 10px;
//   background: #1DA1F2;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background: #005A93;
//   }
// `;

// const FileNameDisplay = styled.p`
//   margin-top: 10px;
//   font-size: 0.9rem;
//   color: #333;
// `;

// const SubmitButton = styled.button`
//   background: #0077B5;
//   color: white;
//   border: none;
//   padding: 10px;
//   width: 100%;
//   margin-top: 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background: #005A93;
//   }
// `;

// const ManuscriptSubmission = () => {
//   const { categories } = useContext(Context);
//   const [formData, setFormData] = useState({
//     title: "",
//     abstract: "",
//     keywords: "",
//     coAuthors: "",
//     articleType: "Research Article",
//     manuscriptFile: null,
//   });

//   const [fileName, setFileName] = useState(""); // State to hold file name

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, manuscriptFile: file });

//     if (file) {
//       setFileName(file.name); // Update state with selected file name
//     } else {
//       setFileName(""); // Clear file name if no file is selected
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Manuscript:", formData);
//   };

//   return (
//     <SubmissionContainer>
//       <FormWrapper>
//         <h2>Submit Your Manuscript</h2>
//         <form onSubmit={handleSubmit}>
//           <InputField>
//             <FaFileAlt />
//             <input type="text" name="title" placeholder="Manuscript Title" required onChange={handleChange} />
//           </InputField>

//           <InputField>
//             <textarea name="abstract" placeholder="Abstract" required onChange={handleChange}></textarea>
//           </InputField>

//           <InputField>
//             <FaTag />
//             <input type="text" name="keywords" placeholder="Keywords (comma-separated)" required onChange={handleChange} />
//           </InputField>

//           <InputField>
//             <FaUserFriends />
//             <input type="text" name="coAuthors" placeholder="Co-Authors (if any)" onChange={handleChange} />
//           </InputField>

//           <InputField>
//             <select name="articleType" required onChange={handleChange}>
//               <option value="Research Article">-- Select Category --</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>{category.name}</option>
//               ))}
//             </select>
//           </InputField>

//           <FileInput id="file" type="file" accept=".doc,.docx,.pdf" required onChange={handleFileChange} />
//           <FileLabel htmlFor="file">
//             <FaUpload /> Upload Manuscript
//           </FileLabel>

//           {/* Display selected file name */}
//           {fileName && <FileNameDisplay>Selected File: {fileName}</FileNameDisplay>}

//           <SubmitButton type="submit">Submit Manuscript</SubmitButton>
//         </form>
//       </FormWrapper>
//     </SubmissionContainer>
//   );
// };

// export default ManuscriptSubmission;





import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaFileUpload, FaTag, FaFileAlt, FaUserFriends, FaUpload } from "react-icons/fa";
import { Context } from './Context';
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const SubmissionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding:bottom:100px;
`;

const FormWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
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

  input, select, textarea {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    background: transparent;
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  background: #1DA1F2;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005A93;
  }
`;

const FileNameDisplay = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #333;
`;

const SubmitButton = styled.button`
  background: #0077B5;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #005A93;
  }
`;

const ManuscriptSubmission = ({setActivePage}) => {
  const { categories } = useContext(Context);
  const authorInfo = useSelector(state=>state.authorInfo)
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    keywords: "",
    coAuthors: "",
    articleCategory: "Research Article", // Updated field name
    manuscriptFile: null,
    articleCode: generateArticleCode(), // Generate 9-digit article code
  });

  const [fileName, setFileName] = useState("");

  function generateArticleCode() {
    return Math.floor(100000000 + Math.random() * 900000000).toString(); // Generate a 9-digit code
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, manuscriptFile: file });

    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.manuscriptFile) {
      Swal.fire({text:"Please select a manuscript file."});
      return;
    }

    const loadingAlert=Swal.fire({text:"Please wait..."})
    Swal.showLoading();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("abstract", formData.abstract);
    formDataToSend.append("keywords", formData.keywords);
    formDataToSend.append("coAuthors", formData.coAuthors);
    formDataToSend.append("articleCategory", formData.articleCategory); // Updated field
    formDataToSend.append("articleCode", formData.articleCode);
    formDataToSend.append("author_id", authorInfo.id); // Replace with actual logged-in author's ID
    formDataToSend.append("manuscriptFile", formData.manuscriptFile);

    try {
      const response = await fetch("https://www.ajga-journal.org/api/submit_manuscript.php", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      Swal.fire({text:result.message,icon:"success"});

      if (result.success) {
        setFormData({
          title: "",
          abstract: "",
          keywords: "",
          coAuthors: "",
          articleCategory: "",
          manuscriptFile: null,
          articleCode: generateArticleCode(),
        });
        setFileName("");
        setActivePage('profile')

      }
    } catch (error) {
      Swal.fire({text:"Failed to submit manuscript. Please try again."});
    }finally{
      loadingAlert.close();

    }
  };

  return (
    <SubmissionContainer>
      <FormWrapper>
        <h2 style={{color:"#0077B5"}}>Submit Your Manuscript</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <FaFileAlt />
            <input type="text" name="title" placeholder="Manuscript Title" required onChange={handleChange} />
          </InputField>

          <InputField>
            <textarea name="abstract" placeholder="Abstract" required onChange={handleChange}></textarea>
          </InputField>

          <InputField>
            <FaTag />
            <input type="text" name="keywords" placeholder="Keywords (comma-separated)" required onChange={handleChange} />
          </InputField>

          <InputField>
            <FaUserFriends />
            <input type="text" name="coAuthors" placeholder="Co-Authors (if any)" onChange={handleChange} />
          </InputField>

          <InputField>
            <select name="articleCategory" required onChange={handleChange}>
              <option value="Research Article">-- Select Article Category --</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </InputField>

          <InputField>
            <FaFileAlt />
            Article Code:
            <input type="text" name="articleCode" value={formData.articleCode} readOnly />
          </InputField>

          <FileInput id="file" type="file" accept=".doc,.docx,.pdf" required onChange={handleFileChange} />
          <FileLabel htmlFor="file">
            <FaUpload /> Upload Manuscript
          </FileLabel>

          {fileName && <FileNameDisplay>Selected File: {fileName}</FileNameDisplay>}

          <SubmitButton type="submit">Submit Manuscript</SubmitButton>
        </form>
      </FormWrapper>
    </SubmissionContainer>
  );
};

export default ManuscriptSubmission;
