import React from "react";
import './About_me.css'
import {Link} from "react-router-dom";
import main_logo from '../logo_white.png'
import search_icon from '../search_icon_b.png'
import profile_pic from '../profile_pic (1).png';

// const intro_text = '~ Hi I am Kwamina \n';


const About_me = () => {
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

        <div className="body">
            
        <img src={profile_pic} alt="UX Design" className="profile_pic" width="30%"  />
        
        <div>

            <div className="text"><p> ~ Hi I am Kwamina </p></div>
            <div><br/></div>
            <div className="description_text"><h5>A Product and </h5></div>
            <div className="description_text"><h5>User Experience Designer</h5></div>
            <div className="normal_text1">
                <p>
                with adept knowledge in Front & Back-end Development, Business Analysis, and Quality Assurance. 
                </p>
                </div>

                <div className="normal_text2">
                <p>
                My goal is to promote, collaborate with, and add to sustainable experiences and products that enhance people's quality of life.
                </p>
                </div>

                
        </div>

        
        
        
        </div>

        <div className="normal_text">
                <p>
                After my bachelor's in Computer Engineering, I worked in the capacity of a backend developer, where I consumed APIs. I also worked in the role of a business analyst gathering requirements and creating Business Requirement Documents (BRDs).  Before joining the UX team in Eprocess, I worked with the quality assurance team for 2 months, testing most of the products developed and presenting the solutions to the Change Approval Board for clearance.

The experience gained from my previous teams aided my understanding of the entire software development process. After joining the UX team, I began my journey as a product designer.

My first project was Ecobankwear; an innovative idea that housed frequently used services of the Ecobank MobileApp. I designed and developed (using Android studio) a working prototype with the aim of winning the innovation of the year award. Then in 2020, I won the MD's excellence award for diligence in my work.

I took up other freelancing jobs to build myself. After 4 years of UX, I can firmly say "The User is everything and Everything is the user".

Besides work, what do I do?

Well, I love to do sports, sing and dance. In my free time, I watch anime and listen to music. Otherwise, you will find me taking a stroll with my dogs.
                </p>
                </div>

        </div>
    )
}

export default About_me