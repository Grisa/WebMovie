import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const SignoutContent = styled.button`
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
	grid-column: 5;
`;

const Signout = ({ history }) => (
	<SignoutContent
		onClick={() => {
			localStorage.removeItem("token");
			history.push("/home");
		}}>
		Sign out
	</SignoutContent>
);

export default withRouter(Signout);
