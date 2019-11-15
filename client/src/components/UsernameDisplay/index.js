import React from "react";
import "./style.css";

const UsernameDisplay = () => {

	// parsing username from document.cookie, document.cookie is defined in
	// client\src\components\LoginForm\index.js
	let start = document.cookie.search("username");
	let arr = document.cookie.substring(start).split("\"");
	let uName = arr[2];

	return(
		<div>
			<div className="username-text">Hi, {uName}!</div>
		</div>
	);
}

export default UsernameDisplay;