import React from "react";
import "./style.css";
import { parseDocCookie } from "../../utils/parseDocCookie"

const UsernameDisplay = () => {

	let uName = parseDocCookie("username");
	return(
		<div>
			<div className="username-text">Hi, {uName}!</div>
		</div>
	);
}

export default UsernameDisplay;