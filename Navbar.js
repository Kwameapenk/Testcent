import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";
import main_logo from '../logo_white.png'
import search_icon from '../search_icon_b.png'
import header_img from '../header_img.png';
import profile_pic from '../profile_pic (1).png';
import project_1 from '../project_1.jpg';
import project_2 from '../project_2.jpg';
import project_3 from '../project_3.jpg';
import Home from "../Home";

const Navbar = () => {
    return (
        <div>
        <div className="navbar">

            <img src={main_logo} alt="" className="logo"/>
            <ul>
               <li> <Link to = {"/"} className="link"> Home </Link></li>
               <li><Link to = {"/about"} className="link"> About me </Link></li>
               <li><Link to = {"/projects"} className="link"> Projects </Link></li>
               <li><Link to = {"/services"} className="link"> Services </Link></li>
               <li><Link to = {"/contact"} className="link"> Contact me </Link></li>
           </ul>

            <div className="search-box">
                <input type="text" placeholder="Search"/>
                <img src={search_icon} alt="" className="search"/>
            </div>    

        </div>

        <div>
        <img src={header_img} alt="UX Design" className="header_img" width="100%" />
  
        </div>

        <div className="rest_of_body">
            
            
            <img src={profile_pic} alt="UX Design" className="profile_pic" width="30%"  />
            
            
            
            <div>
            <h2 className="quote">
                "Ease of use may be invisible, but its absence sure isn't"
            </h2>
            </div>
        
        
        </div>

        <div>
            <h3 className="nav_normal_text1">
                Projects
            </h3>
        </div>

        <div className="projects">

            <img src={project_1} alt="UX Design" className="profile_pic" width="30%"  />
            <img src={project_2} alt="UX Design" className="profile_pic" width="30%"  />
            <img src={project_3} alt="UX Design" className="profile_pic" width="30%"  />
            
        </div>

       

        

        </div>
    )
}

export default Navbar