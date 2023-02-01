import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { documentFormRoute, paymentRoute } from "../utils/APIRoutes.js";

const DocumentReviewForm = () => {

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    languageTest: "",
    languageTestScore: "",
    targetSchool: "",
    courrse: "",
    targetCountry: "",
    documentType: "",
  });

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/documentReviewForm");
    }
  }, []);

 

  //   //const { email, username } = values;
  //   // const passw  ="hello";
  //   // const { paymentData } = await axios.post(paymentRoute, {
  //   //   username,
  //   //   email,
  //   //   passw,
  //   // });
  //   // console.log(paymentData.status);

  //   // if (!paymentData.url) {
  //   //   console.log("Error finding message");
  //   // }

  //  // navigate("/");
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
   
  //     //console.log("in validation", registerRoute);
  //     const {
  //       username,
  //       email,
  //       phone,
  //       languageTest,
  //       languageTestScore,
  //       targetSchool,
  //       course,
  //       targetCountry,
  //       documentType,
  //     } = values;

  //     const password="newlklk";
  //     const { data } = await axios.post(paymentRoute, {
  //       username,
  //       email,
  //       password,
  //     });

  //     if (!data.url) {
  //       console.log("Error finding message");
  //     }

  //   //       const { data } = await axios.post(documentFormRoute, {
  //   //   username,
  //   //   email,
  //   //   phone,
  //   //   languageTest,
  //   //   languageTestScore,
  //   //   targetSchool,
  //   //   courrse,
  //   //   targetCountry,
  //   //   documentType,
  //   // });
  //    // window.location.replace(data.url);
    
  // };







    const handleSubmit = async (event) => {
      event.preventDefault();

        const password = "password";
          
          const {username,email, phone, languageTest, languageTestScore,targetSchool, courrse,targetCountry,documentType } = values;
          const { data } = await axios.post(paymentRoute, {
            username,
            email,
            password,
          });

          if (!data.url ) {
            console.log("Error finding message");
          }

          window.location.replace(data.url);
  };


//   const handleSubmit = async (event) => {
//     event.preventDefault();

//       const password = "passwooord";
        
//         const {username, email, phone,languageTest, languageTestScore,targetSchool, course,targetCountry,documentType } = values;
        
//         const [paymentResponse, registerResponse] =await Promise.all([
//           await axios.post(paymentRoute, {
//               username,
//               email,
//               password,
//             }),
//             await axios.post( documentFormRoute, {
//               username,
//               email,
//               password,
//               phone,
//               languageTest, 
//               languageTestScore,
//               targetSchool, 
//               course,
//               targetCountry,
//               documentType
//             })
//         ])
//         console.log(paymentResponse, registerResponse);

//         // registerResponse -> ata hocche register r response..r modde data ace.

        
//         // paymentResponse.data.url
//         if (!paymentResponse.data.url ) {
//           console.log("Error finding message");
//         } else{ // must else use kora lagbe
//           window.location.replace(paymentResponse.data.url); 
//         }
      
// };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

 
  return (
    <div>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            {/* <img src={Logo} alt="logo" /> */}
            <h1>Buy package</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="LanguageTest"
            name="LanguageTest"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="LanguageTestScore"
            name="LanguageTestScore"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            placeholder="TargetSchool"
            name="TargetSchool"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Course"
            name="Course"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="targetCountry"
            name="targetCountry"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="documentType"
            name="documentType"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Payment</button>
        </form>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};
const FormContainer = styled.div`
  height: 200vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #75e9e5;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
      width: 10rem;
    }
    h1 {
      color: black;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00ffff;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: black;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default DocumentReviewForm;
