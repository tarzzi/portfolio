import React from "react";
import ReactGA from 'react-ga';
const trackingId = "UA-154665063-1"; 
ReactGA.initialize(trackingId);
	
function Head(props) {
  return (
    <div>
        <title>Tarmo Urrio - almost an engineer</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link href="https://fonts.googleapis.com/css?family=Raleway:200,700|Source+Sans+Pro:300,600,300italic,600italic" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<noscript>
		<link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </div>
  )
}
 
export default Head;