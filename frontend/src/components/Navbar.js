import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../Home";
import Consultant from "../pages/Consultant";
import Guide from "../pages/Guide";
import Program from "../pages/Program";
import ProgramDetails from "../pages/ProgramDetails";
import Review from "../pages/Review";
import "./css/Navbar.css";
import Logout from "./Logout";
import axios from "axios";
import { getRegInfoGetRoute } from "../utils/APIRoutes";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedin = false;

  // const getAllConsultants = async () => {
  //   console.log('consultansts')
  //   const consultansts = await axios.get('http://localhost:5000/api/auth/getConsultant');  
  //   console.log('consultansts1')
  //   console.log(consultansts)
  // }

  const handleLogout = async () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      setIsLoggedIn(!isLoggedIn);
    }
    // getAllConsultants();
  }, []);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Study Higher</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link to="/" >HOME </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/programs" >PROGRAMS</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/consultant" >CONSULTANT</Link>
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/review" >REVIEW</Link>
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/guide" >BLOG</Link>
                </a>
              </li>
              {isLoggedIn &&
              <>
                 <li class="nav-item">
                 <a class="nav-link" href="#">
                 <Link to="/chat" >CHAT</Link>
                 </a>
               </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Logout handleLogout={ handleLogout }/>
                  </a>
                </li>
                </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
