import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/home">
			<span
				style={{
					color: "#7D4CDB",
					fontWeight: "bold",
					fontSize: "15pt"
				}}>
				Nome do Site
			</span>
		</Link>
	);
};

export default Logo;
