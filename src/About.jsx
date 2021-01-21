import React from "react";
import profilepic from './profile.jpg';
 
function About(props) {
  return (
		<div>			
        <section id="one" class="wrapper spotlight style1">
				<div class="inner">
					<a href="#" class="image">
				<img className="profile" src={profilepic} alt="Tarmo" /></a>
					<div class="content">
						<h2 class="major">Who am i</h2>
						<p> 27-years old<br />From Jyväskylä, Finland<br />Second year student at JAMK University Of Applied Sciences.<br />
							Studying ICT, Specializing in software development<br/>
							I enjoy problem solving, innovations, gaming and life</p>
					</div>
				</div>
			</section>
      </div>
  )
}
 
export default About;