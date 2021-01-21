import React from "react"; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import csharp from './ttstore.JPG';
import mysql from './mysql.JPG';
import tcare from './tcare.JPG';
import requi from './vaatimusmaarittely.jpg';

function Projects(props) {
  return (
	
    
      <div><section id="four" class="wrapper alt style1">
				<div class="inner">
					<h2 class="major">Portfolio</h2>
					<p></p>
					<section class="features">
						<article>
							<a href={csharp} class="image"><img src={csharp} alt="c# app" /></a>
							<h3 class="major">C#</h3>
							<p>C# programming, Object-oriented, WPF-interfaces</p>
							<a href="https://www.youtube.com/watch?v=MsKERoEQCmk" target="_blank" class="special">Example C# project</a>
							<a href="https://www.youtube.com/watch?v=MsKERoEQCmk" target="_blank" class="special">View code</a>
						</article>
						<article>
							<a href={tcare} class="image"><img src={tcare} alt="html code" /></a>
							<h3 class="major">Websites and apps</h3>
							<p> HTML, CSS, Javascript, PHP, jQuery, React.</p>
							<a href="https://www.youtube.com/watch?v=CJuKJCPSMt4" target="_blank" class="special">Example Web project
							</a><a href="https://www.youtube.com/watch?v=CJuKJCPSMt4" target="_blank" class="special">View code</a>
						</article>
						<article>
							<a href={mysql} class="image"><img src={mysql} alt="mysql-diagram" /></a>
							<h3 class="major">MySQL</h3>
							<p>Database management in different applications. </p>
						</article>
						<article>
							<a href={requi} class="image"><img src={requi} alt="requirement-specification page" /></a>
							<h3 class="major">Software Requirement Specifications (SRS)</h3>
							<p>Designing and implementation of SRS-Documents</p>
							<a href="http://harjoitustehtavagroup.pages.labranet.jamk.fi/ohjelmistokehitys-ttos0100/Vaatimusmaarittely/vaatimusmaarittely/" class="special">Full document</a>
						</article>
					</section>
					<ul class="actions">
					</ul>
				</div>
			</section>
		</div>
  )
}
 
export default Projects;