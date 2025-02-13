


// import React, { useState, useEffect, useContext } from "react";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import ManuscriptDetailModal from "./ManuscriptDetailModal"; // Import the modal component
// import Swal from "sweetalert2";
// import PayManuscriptAPC from "./PayManuscriptAPC";
// import { Context } from "./Context";


// const Container = styled.div`
//   padding: 20px;
//   background: #f4f4f4;
//   min-height: 100vh;
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #0077B5;
// `;

// const TableContainer = styled.div`
//   background: white;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const TdLabel = styled.td`
//   font-weight: bold;
//   background: #f1f1f1;
//   padding: 10px;
//   width: 30%;
// `;

// const TdValue = styled.td`
//   padding: 10px;
// `;

// const StatusBadge = styled.span`
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-weight: bold;
//   color: white;
//   background: ${(props) => {
//     switch (props.status) {
//       case "Accepted":
//         return "green";
//       case "Rejected":
//         return "red";
//       case "Revisions Requested":
//         return "purple";
//       default:
//         return "orange";
//     }
//   }};
// `;

// const ViewButton = styled.button`
//   background: #0077B5;
//   color: white;
//   border: none;
//   padding: 8px 12px;
//   cursor: pointer;
//   border-radius: 5px;
//   transition: 0.3s;

//   &:hover {
//     background: #005A93;
//   }
// `;

// const AllSubmittedManuscripts = ({setActivePage}) => {
//   const authorId = useSelector(state => state.authorInfo.id);
//   const author = useSelector(state=>state.authorInfo);
//   // console.log(author)
//   const [manuscripts, setManuscripts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedManuscript, setSelectedManuscript] = useState(null); // State for modal
//   const {categories} = useContext(Context);

//   useEffect(() => {
//     const fetchManuscripts = async () => {
//       try {
//         const response = await fetch(
//           `https://www.ajga-journal.org/api/get_manuscripts_by_author.php?author_id=${authorId}`,
//           { cache: "no-store" } // Prevent caching
//         );
//         const data = await response.json();

//         if (data.success) {
//           setManuscripts(data.manuscripts);
//           console.log(data.manuscripts)
//         } else {
//           console.error(data.error);
//         }
//       } catch (error) {
//         console.error("Error fetching manuscripts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchManuscripts();
//   }, [authorId]);






//   const deleteManuscript = async (manuscriptId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           Swal.fire({
//             title: "Deleting...",
//             text: "Please wait while the manuscript is being deleted.",
//             allowOutsideClick: false,
//             didOpen: () => {
//               Swal.showLoading();
//             },
//           });
  
//           const response = await fetch("https://www.ajga-journal.org/api/get_all_manuscripts.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ manuscript_id: manuscriptId }),
//           });
  
//           const data = await response.json();
  
//           if (data.success) {
//             Swal.fire("Deleted!", "Manuscript has been deleted.", "success");
//             setManuscripts((prev) => prev.filter((m) => m.id !== manuscriptId));
//           } else {
//             Swal.fire("Error!", data.error || "Failed to delete manuscript.", "error");
//           }
//         } catch (error) {
//           Swal.fire("Error!", "Network issue or server error.", "error");
//           console.error("Error deleting manuscript:", error);
//         }
//       }
//     });
//   };
  
  

//     // Function to get category name from categories array
//     const getCategoryName = (categoryId) => {
//       const category = categories.find((cat) => cat.id == categoryId);
//       console.log(category)
//       return category ? category.name : categoryId; // Show name if found, otherwise show ID
//     };


//   if (loading) {
//     return <Container><Title>Loading...</Title></Container>;
//   }

//   return (
//     <Container>
//       <Title> All Submitted Manuscripts</Title>
//       {manuscripts.length === 0 ? (
//         <p>No manuscripts found.</p>
//       ) : (
//         manuscripts.map((manuscript) => (
//           <TableContainer key={manuscript.id}>
//             <Table>
//               <tbody>
//                 <tr>
//                   <TdLabel>Title:</TdLabel>
//                   <TdValue>{manuscript.title}</TdValue>
//                 </tr>
//                 <tr>
//                   <TdLabel>Article Code:</TdLabel>
//                   <TdValue>{manuscript.article_code}</TdValue>
//                 </tr>
                // <tr>
                //   <TdLabel>Category:</TdLabel>
                //   <TdValue>{getCategoryName(manuscript.article_category)}</TdValue>
                // </tr>
                // <tr>
                //   <TdLabel>Status:</TdLabel>
                //   <TdValue>
                //     <StatusBadge status={manuscript.status}>
                //       {manuscript.status}
                //     </StatusBadge>
                //   </TdValue>
                // </tr>
                // <tr>
                //   <TdLabel>Submitted Date:</TdLabel>
                //   <TdValue>{manuscript.submittedDate}</TdValue>
                // </tr>
                // <tr>
                //   <TdLabel>Last Updated:</TdLabel>
                //   <TdValue>{manuscript.lastUpdated}</TdValue>
                // </tr>
//                 <tr>
//                   <TdLabel>Action:</TdLabel>
//                   <TdValue>
//                     <ViewButton onClick={() => setSelectedManuscript(manuscript)}>
//                       View Details
//                     </ViewButton>

// {manuscript.APC==="paid"&&<p style={{color:"green", fontWeight:"bold",marginTop:"10px"}}>APC PAID ✅</p>}


//                   </TdValue>
//                 </tr>
//               </tbody>
//             </Table>
//           </TableContainer>
//         ))
//       )}

//       {/* Render the modal when a manuscript is selected */}
//       {selectedManuscript && (
//         <ManuscriptDetailModal
//           manuscript={selectedManuscript}
//           onClose={() => setSelectedManuscript(null)}
//         />
//       )}
//     </Container>
//   );
// };

// export default AllSubmittedManuscripts;


import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ManuscriptDetailModal from "./ManuscriptDetailModal"; 
import Swal from "sweetalert2";
import { Context } from "./Context";

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
  background: ${(props) => {
    switch (props.status) {
      case "Accepted":
        return "green";
      case "Rejected":
        return "red";
      case "Revisions Requested":
        return "purple";
      default:
        return "orange";
    }
  }};
`;

const ViewButton = styled.button`
  background: #0077B5;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  margin-left: 5px;

  &:hover {
    background: #005A93;
  }
`;

const AssignButton = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  margin-left: 5px;

  &:hover {
    background: darkgreen;
  }
`;

const AllSubmittedManuscripts = ({ setActivePage }) => {
  const authorId = useSelector((state) => state.authorInfo.id);
  const [manuscripts, setManuscripts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedManuscript, setSelectedManuscript] = useState(null);
  const { categories } = useContext(Context);
  const [reviewers, setReviewers] = useState([]); 
  const [selectedReviewers, setSelectedReviewers] = useState({}); 

  useEffect(() => {
    const fetchManuscripts = async () => {
      try {
        const response = await fetch(
          `https://www.ajga-journal.org/api/get_manuscripts_by_author.php?author_id=${authorId}`,
          { cache: "no-store" }
        );
        const data = await response.json();

        if (data.success) {
          setManuscripts(data.manuscripts);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching manuscripts:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviewers = async () => {
      try {
        const response = await fetch("https://www.ajga-journal.org/api/get_reviewers.php");
        const data = await response.json();

        if (data.success) {
          setReviewers(data.reviewers);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error fetching reviewers:", error);
      }
    };

    fetchManuscripts();
    fetchReviewers();
  }, [authorId]);

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id == categoryId);
    return category ? category.name : categoryId;
  };

  const handleAssign = async (manuscriptId) => {
    const reviewerId = selectedReviewers[manuscriptId];
    if (!reviewerId) {
      Swal.fire("Error!", "Please select a reviewer.", "error");
      return;
    }

    try {
      const response = await fetch("https://www.ajga-journal.org/api/assign_reviewer.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ manuscript_id: manuscriptId, reviewer_id: reviewerId }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire("Success!", "Reviewer assigned successfully.", "success");
      } else {
        Swal.fire("Error!", data.error || "Failed to assign reviewer.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Network issue or server error.", "error");
      console.error("Error assigning reviewer:", error);
    }
  };

  if (loading) {
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title> All Submitted Manuscripts</Title>
      {manuscripts.length === 0 ? (
        <p>No manuscripts found.</p>
      ) : (
        manuscripts.map((manuscript) => (
          <TableContainer key={manuscript.id}>
            <Table>
              <tbody>
                <tr>
                  <TdLabel>Title:</TdLabel>
                  <TdValue>{manuscript.title}</TdValue>
                </tr>
                <tr>
                  <TdLabel>Article Code:</TdLabel>
                  <TdValue>{manuscript.article_code}</TdValue>
                </tr>
                <tr>
                  <TdLabel>Category:</TdLabel>
                  <TdValue>{getCategoryName(manuscript.article_category)}</TdValue>
                </tr>
            
                <tr>
                  <TdLabel>Status:</TdLabel>
                  <TdValue>
                    <StatusBadge status={manuscript.status}>
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
                    <ViewButton onClick={() => setSelectedManuscript(manuscript)}>
                      View Details
                    </ViewButton>
                    <select style={{padding:"7px",cursor:"pointer",marginLeft:"5px",outline:"none"}}
                      value={selectedReviewers[manuscript.id] || ""}
                      onChange={(e) =>
                        setSelectedReviewers((prev) => ({
                          ...prev,
                          [manuscript.id]: e.target.value,
                        }))
                      }
                    >
                      <option value="">Select Reviewer</option>
                      {reviewers.map((reviewer) => (
                        <option key={reviewer.id} value={reviewer.id}>
                          {reviewer.name}
                        </option>
                      ))}
                    </select>
                    <AssignButton onClick={() => handleAssign(manuscript.id)}>
                      Assign
                    </AssignButton>
                  </TdValue>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        ))
      )}

      {selectedManuscript && (
        <ManuscriptDetailModal
          manuscript={selectedManuscript}
          onClose={() => setSelectedManuscript(null)}
        />
      )}
    </Container>
  );
};

export default AllSubmittedManuscripts;
