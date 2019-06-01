import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SigninContent = styled.h1`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	font-weight: bold;
	width: fit-content;
	padding: 8px 20px;
	height: 100%;
`;

const Signin = () => (
	<Link to="/signin">
		<SigninContent>Sign in</SigninContent>
	</Link>
);

export default Signin;
