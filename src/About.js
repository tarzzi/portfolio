import React from "react";
import profilepic from './profile.jpg';
 
function About(props) {
  return (
		<div>			
				<img className="profile" src={profilepic} alt="Picture of Tarmo" />
        <h2 className="major">Who am i</h2>
        <p> 26-years old<br />From Jyväskylä, Finland<br />Second year student at JAMK University Of Applied Sciences.<br />
          Studying ICT, Specializing in software development<br />
          I enjoy problem solving, innovations, gaming and life</p>
      </div>
  )
}
 
export default About;