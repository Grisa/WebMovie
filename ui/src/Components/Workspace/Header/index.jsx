import React, { Component } from "react";
// import { Grid } from "semantic-ui-react";
import styled from "styled-components";

import Logo from "../../Generic/Logo";
import MenuList from "../MenuList";
import Signin from "../Signin";
import Signup from "../Signup";

const midia = [
	{ key: "1", text: "Filmes", value: "1" },
	{ key: "2", text: "Séries", value: "2" },
	{ key: "3", text: "Animes", value: "3" }
];

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 10fr 1fr 1fr 1fr;
	grid-template-rows: 1fr;
	padding: 20px 0;
	z-index: 9999999999;
	position: relative;
`;

class Header extends Component {
	render() {
		const props = this.props;

		return (
			<Grid>
				<Logo />
				<MenuList midia={midia} {...props} />
				<Signin />
				<Signup />
			</Grid>
		);
	}
}

export default Header;
