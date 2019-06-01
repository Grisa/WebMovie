import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

import Logo from "../Logo";
import MenuList from "../MenuList";

const options = [
	{ key: "1", text: "Exibir mídias", value: "1" },
	{ key: "2", text: "Ranking", value: "2" },
	{ key: "3", text: "Minha lista", value: "3" }
];

const midia = [
	{ key: "1", text: "Filmes", value: "1" },
	{ key: "2", text: "Séries", value: "2" },
	{ key: "3", text: "Animes", value: "3" }
];

const SignupContent = styled.h1`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	font-weight: bold;
	border: 3px solid #7d4cdb;
	border-radius: 35px;
	width: fit-content;
	padding: 5px 20px;
	height: 100%;
`;

const SigninContent = styled.h1`
	font-size: 15px;
	text-align: center;
	color: #7d4cdb;
	font-weight: bold;
	width: fit-content;
	padding: 8px 20px;
	height: 100%;
`;

const Signup = () => {
	return <SignupContent>Sign up</SignupContent>;
};

const Signin = () => {
	return <SigninContent>Sign in</SigninContent>;
};

class Header extends Component {
	render() {
		return (
			<Grid style={{ paddingTop: "20px" }} divided centered>
				<Grid.Row centered>
					<Grid.Column width={2} verticalAlign="middle" textAlign="center">
						<Logo />
					</Grid.Column>
					<Grid.Column width={10}>
						<MenuList options={options} midia={midia} />
					</Grid.Column>
					<Grid.Column width={1}>
						<Signin />
					</Grid.Column>
					<Grid.Column width={2}>
						<Signup />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Header;
