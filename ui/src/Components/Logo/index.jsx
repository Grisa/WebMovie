import React from "react";
import { Link } from "react-router-dom";

const outline = {
	color: "#7D4CDB",
	fontWeight: "bold",
	width: "300px",
	height: "100px",
	fontSize: "15pt",
	border: "3px solid #7D4CDB",
	alignItems: "center"
};

const text = {
	color: "#7D4CDB",
	width: "130px",
	fontWeight: "bold",
	fontSize: "15pt",
	display: "flex",
	alignItems: "center"
};

const Logo = ({ variant = "text", alignItems = "center" }) => {
	const style = Object.assign(
		{
			display: "flex",
			justifyContent: alignItems,
			width: "100px",
			height: "50px"
		},
		variant === "text" ? text : outline
	);

	return (
		<Link to="/home" style={style}>
			<span>Nome do Site</span>
		</Link>
	);
};

export default Logo;
