import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupContent = styled.button`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	background-color: #fafafa;
	font-weight: bold;
	border: 3px solid #7d4cdb;
	border-radius: 35px;
	width: 100%;
	padding: 5px 10px;
	height: 100%;
	line-height: 30px;
	grid-column: 15/ 16;
`;
const Signup = () => (
	<Link to="/signup" style={{ gridColumn: "15 / 16" }}>
		<SignupContent>Sign up</SignupContent>
	</Link>
);

export default Signup;
