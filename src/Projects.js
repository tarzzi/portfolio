import React from "react"; 
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Projects(props) {
  return (
	
    
      <div>
        <h2 className="major">Portfolio</h2>
        <p />
        <section className="features">
          <article>
            <a href="images/ttstore.JPG" className="image"><img src="images/ttstore.JPG" alt="image of c# app" /></a>
            <h3 className="major">C#</h3>
            <p>C# programming, Object-oriented, WPF-interfaces</p>
            <a href="https://www.youtube.com/watch?v=MsKERoEQCmk" target="_blank" className="special">Example C# project</a>
          </article>
          <article>
            <a href="images/tcare.JPG" className="image"><img src="images/tcare.JPG" alt="image of html code" /></a>
            <h3 className="major">Websites and apps</h3>
            <p> Website building with HTML, CSS, Javascript and PHP.</p>
            <a href="https://www.youtube.com/watch?v=CJuKJCPSMt4" target="_blank" className="special">Example Web project
            </a>
          </article>
          <article>
            <a href="images/mysql.JPG" className="image"><img src="images/mysql.JPG" alt="image of mysql-diagram" /></a>
            <h3 className="major">MySQL</h3>
            <p>Database creation, relations, database usage in different applications. </p>
          </article>
          <article>
            <a href="images/donuts.png" className="image"><img src="images/donuts.png" alt="image of donuts" /></a>
            <h3 className="major">Blender</h3>
            <p>Capable of using blender for 3D-modelling.</p>
          </article>
          <article>
            <a href="images/nodered.JPG" className="image"><img src="images/nodered.JPG" alt="image of node-red visualisation" /></a>
            <a href="images/nodered2.JPG" className="image"><img src="images/nodered2.JPG" alt="image of node-red code-blocks" /></a>
            <h3 className="major">Node-Red</h3>
            <p>Basic usage of Node-red visual programming and data visualization, using Javascript-programming with JSON- and CSV-data. </p>
          </article>
          <article>
            <a href="images/vaatimusmaarittely.jpg" className="image"><img src="images/vaatimusmaarittely.jpg" alt="image of requirement-specification page" /></a>
            <h3 className="major">Software Requirement Specifications (SRS)</h3>
            <p>Designing and implementation of SRS-Documents</p>
            <a href="http://harjoitustehtavagroup.pages.labranet.jamk.fi/ohjelmistokehitys-ttos0100/Vaatimusmaarittely/vaatimusmaarittely/" className="special">Full document</a>
          </article></section></div>
  )
}
 
export default Projects;