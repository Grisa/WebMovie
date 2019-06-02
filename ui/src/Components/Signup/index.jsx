import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupContent = styled.h1`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	font-weight: bold;
	border: 3px solid #7d4cdb;
	border-radius: 35px;
	width: 94px;
	padding: 5px 10px;
	height: 100%;
	line-height: 30px;
`;
const Signup = () => (
	<Link to="/signup">
		<SignupContent>Sign up</SignupContent>
	</Link>
);

export default Signup;
