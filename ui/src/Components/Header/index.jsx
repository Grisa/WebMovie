import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import Logo from "../Logo";
import MenuList from "../MenuList";
import Signin from "../Signin";
import Signup from "../Signup";

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

class Header extends Component {
	render() {
		return (
			<Grid style={{ paddingTop: "20px" }}>
				<Grid.Row columns={16}>
					<Grid.Column width={2} verticalAlign="middle">
						<Logo />
					</Grid.Column>
					<Grid.Column width={12}>
						<MenuList options={options} midia={midia} />
					</Grid.Column>
					<Grid.Column floated="right">
						<Signin />
					</Grid.Column>
					<Grid.Column style={{ padding: "0" }} floated="right" width={1}>
						<Signup />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Header;
