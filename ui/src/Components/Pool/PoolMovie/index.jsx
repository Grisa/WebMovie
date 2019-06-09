import React, { Component } from "react";
import styled from "styled-components";

import PoolCard from "../../Cards/PoolCard";

const Pool = styled.div`
	min-height: 600px;
	height: fit-content;
	width: 30%;
`;

const Title = styled.span`
	color: #7d4cdb;
	font-size: 25px;
	font-weight: bold;
`;

const Container = styled.div`
	background: #7d4cdb;
	min-height: 600px;
	height: inherit;
	display: flex;
	flex-direction: column;
`;

class PoolMovie extends Component {
	render() {
		const { title } = this.props;

		return (
			<Pool>
				<Title>{title}</Title>
				<Container>
					<PoolCard title="Teste 1" />
					<PoolCard title="Teste 2" />
					<PoolCard title="Teste 3" />
					<PoolCard title="Teste 4" />
					<PoolCard title="Teste 5" />
					<PoolCard title="Teste 6" />
					<PoolCard title="Teste 7" />
					<PoolCard title="Teste 8" />
					<PoolCard title="Teste 6" />
					<PoolCard title="Teste 10" />
				</Container>
			</Pool>
		);
	}
}

export default PoolMovie;
