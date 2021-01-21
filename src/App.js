import React from 'react';
import bg from './bg.jpg';
import Head from './Head.jsx';
import Intro from './Intro.jsx'; 
import Projects from './Projects.jsx'; 
import Contact from './Contact.jsx'; 
import About from './About.jsx'; 
import Scripts from './Scripts.jsx';
import './fontawesome-all.min.css';
import './App.css';
import './webfonts/fa-brands-400.eot';
import './webfonts/fa-solid-900.eot';
import './webfonts/fa-regular-400.eot';
 
function App() {
	return (
		<div className="App">
		<head>
			<Head />
		</head>
		<Intro />
		<body className="is-preload">
			<About />
			<Projects /> 
			<Contact />
			<Scripts />
		</body>
		</div>
 );
}

export default App;
