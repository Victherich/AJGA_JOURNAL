// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;

// `;

// const FormWrapper = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   width: 400px;
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

//   input {
//     border: none;
//     outline: none;
//     width: 100%;
//     padding: 5px;
//     background: transparent;
//   }
// `;

// const SubmitButton = styled.button`
//   background: rgba(0,0,255,0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   width: 100%;
//   margin-top: 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background: rgba(0,0,255,0.7);
//   }
// `;

// const SwitchText = styled.p`
//   margin-top: 15px;
//   font-size: 0.9rem;

//   a {
//     color: rgba(0,0,255,0.7);
//     cursor: pointer;
//     text-decoration: underline;
//   }
// `;

// const AuthorLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate=useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logged in:", formData);
//   };

//   return (
//     <LoginContainer>
//       <FormWrapper>
//         <h2 style={{color:"rgba(0,0,255,0.5)"}}>Author Login</h2>
//         <form onSubmit={handleSubmit}>
//           <InputField>
//             <FaEnvelope style={{color:'rgba(0,0,255,0.5)'}}/>
//             <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
//           </InputField>

//           <InputField>
//             <FaLock style={{color:'rgba(0,0,255,0.5)'}}/>
//             <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} />
//           </InputField>

//           <SubmitButton type="submit">
//             <FaSignInAlt /> Log In
//           </SubmitButton>
//         </form>

//         <SwitchText>
//           Don't have an account? <a onClick={()=>navigate('/authorsignup')}>Sign Up</a>
//         </SwitchText>
//       </FormWrapper>
//     </LoginContainer>
//   );
// };

// export default AuthorLogin;



import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
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

const SubmitButton = styled.button`
  background: rgba(0,0,255,0.5);
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: rgba(0,0,255,0.7);
  }
`;

const SwitchText = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;

  a {
    color: rgba(0,0,255,0.7);
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AuthorLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading alert
    Swal.fire({
      title: "Logging in...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://www.ajga-journal.org/api/author_login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back, " + result.user.full_name,
        });
        localStorage.setItem("authToken", result.token);
        navigate("/dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.error,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <h2 style={{ color: "rgba(0,0,255,0.5)" }}>Author Login</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <FaEnvelope style={{ color: "rgba(0,0,255,0.5)" }} />
            <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          </InputField>

          <InputField>
            <FaLock style={{ color: "rgba(0,0,255,0.5)" }} />
            <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} />
          </InputField>

          <SubmitButton type="submit">
            <FaSignInAlt /> Log In
          </SubmitButton>
        </form>

        <SwitchText>
          Don't have an account? <a onClick={() => navigate('/authorsignup')}>Sign Up</a>
        </SwitchText>
      </FormWrapper>
    </LoginContainer>
  );
};

export default AuthorLogin;

