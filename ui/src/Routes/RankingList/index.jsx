import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Pool from "../../Components/Pool/PoolMovie";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 13fr 1fr;
	padding: 20px 0;
`;

const Container = styled.div`
	display: flex;
	grid-column: 2;
	justify-content: space-between;
`;

class Ranking extends Component {
	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		return (
			<Grid>
				<Container>
					<Pool title="Filmes" />
					<Pool title="Séries" />
					<Pool title="Animes" />
				</Container>
			</Grid>
		);
	}
}

export default withRouter(Ranking);
