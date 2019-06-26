import React, { Component } from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

const DescriptionContainer = styled.div`
	height: 100%;
	color: rgba(0, 0, 0, 0.4);
	font-size: 15pt;
`;

const GenryContainer = styled.div`
	width: fit-content;
	background: #7159c1;
	border-radius: 40px;
	color: #f1f1f1;
	padding: 10px 30px;
	font-size: 11pt;
`;
const DurationContainer = styled.div``;

const ToBottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default class MovieData extends Component {
	returnDate(timestamp) {
		const date = new Date(timestamp);

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	returnHour(time) {
		let hour = Math.floor(time / (60 * 60));
		time -= hour * 60 * 60;
		let minutes = Math.floor(time / 60);
		time -= minutes * 60;
		let seconds = time;

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		return `${hour}:${minutes}:${seconds}`;
	}

	render() {
		const { data } = this.props;

		return (
			<Card
				style={{
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)",
					gridArea: "2 / 2 / 10 / 8"
				}}
				fluid>
				<CardHeader>
					<Title>{data.name}</Title>
				</CardHeader>
				<Card.Content
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end"
					}}>
					<DescriptionContainer>{data.description}</DescriptionContainer>
					<ToBottom>
						<div>
							<span style={{ fontSize: "13pt" }}>Gênero</span>
							<GenryContainer>{data.genre}</GenryContainer>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-end"
							}}>
							<DurationContainer>
								<Icon name="clock" />
								Duração do filme: {this.returnHour(data.duration)}
							</DurationContainer>
						</div>
					</ToBottom>
				</Card.Content>
			</Card>
		);
	}
}
