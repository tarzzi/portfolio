import React from 'react';
import logo from './logo.svg';
import bg from './bg.jpg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Intro from './Intro.js'; 
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
	return (
		<div className="App"> 
			<Intro />
			<About />
			<Projects />
			<Contact />
		</div>
 );
}

export default App;
