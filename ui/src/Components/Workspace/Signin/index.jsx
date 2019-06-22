import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SigninContent = styled.h1`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	font-weight: bold;
	width: 100%;
	padding: 8px 10px;
	height: 100%;
	line-height: 30px;
	grid-column: 14 / 15;
`;

const Signin = () => (
	<Link to="/signin" style={{ gridColumn: "14 / 15" }}>
		<SigninContent>Sign in</SigninContent>
	</Link>
);

export default Signin;
