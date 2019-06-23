import React, { Component } from "react";
import styled from "styled-components";

import { Card, Image } from "semantic-ui-react";

const Container = styled.div`
	border: 1px solid #7d4cdb;
	background: #7d4cdb;
	width: 400px;
	height: 250px;
	padding: 10px;
	margin-bottom: 10px;
`;

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

const GenryContainer = styled.div`
	width: fit-content;
	height: fit-content;
	background: #7159c1;
	border-radius: 40px;
	color: #f1f1f1;
	padding: 5px 15px;
	font-size: 11pt;
`;

const Classif = styled.div`
	width: 100px;
	height: 100px;
	line-height: 100px;
	border: 1px solid #7519c1;
	border-radius: 15px;
	color: #fff;
	font-size: 24pt;
	text-align: center;
	vertical-align: middle;
`;

class ListCard extends Component {
	renderClassif() {
		let color = "#000";

		return <Classif style={{ background: color }}>+18</Classif>;
	}

	render() {
		return (
			<Container>
				<Card fluid style={{ height: "100%" }}>
					<CardHeader>
						<Title>nome do filme</Title>
					</CardHeader>
					<Card.Content
						style={{
							display: "flex",
							height: "calc(100% - 51px)",
							justifyContent: "center"
						}}>
						<div
							style={{
								flexGrow: 2,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between"
							}}>
							<GenryContainer>Terror</GenryContainer>
							{this.renderClassif()}
						</div>
						<div>
							<Image
								src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
								size="small"
							/>
						</div>
					</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default ListCard;
