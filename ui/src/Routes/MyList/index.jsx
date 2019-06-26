import React, { Component } from "react";
import styled from "styled-components";

import ListCard from "../../Components/Cards/ListCard";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(16, 1fr);
	min-height: calc(100vmin - 90px - 300px);
`;

const List = styled.div`
	grid-area: 1 / 2 / auto / 16;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

// import { Container } from './styles';

class MyList extends Component {
	render() {
		return (
			<Container>
				<List>
					<ListCard />
					<ListCard />
					<ListCard />
					<ListCard />
					<ListCard />
				</List>
			</Container>
		);
	}
}

export default MyList;
