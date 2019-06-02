import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const Container = styled.div`
	border: 0 solid #444;
	margin-top: 30px;
	color: #7d4cdb;
	font-size: 25px;
	font-weight: bold;
`;

const Lane = styled.div`
	margin-bottom: 30px;
`;

const Line = styled.div`
	border-bottom: 5px solid #7d4cdb;
	margin: 10px 0;
`;

const Inline = styled.div`
	display: -webkit-box;
	overflow: auto;
`;

const ImageContainer = styled.div`
	margin-right: 10px;
`;

const filmes = [
	{
		name: "filme 1",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 2",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 3",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 4",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 5",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 6",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 7",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 8",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	}
];

class Home extends Component {
	render() {
		return (
			<Container>
				<Lane>
					<span>Filmes</span>
					<Line />
					<Inline>
						{filmes.map((filme, index) => (
							<ImageContainer key={index}>
								<Image src={filme.image} size="medium" />
							</ImageContainer>
						))}
					</Inline>
				</Lane>
				<Lane>
					<span>Séries</span>
					<Line />
					<Inline>
						{filmes.map((filme, index) => (
							<ImageContainer key={index}>
								<Image src={filme.image} size="medium" />
							</ImageContainer>
						))}
					</Inline>
				</Lane>
				<Lane>
					<span>Animes</span>
					<Line />
					<Inline>
						{filmes.map((filme, index) => (
							<ImageContainer key={index}>
								<Image src={filme.image} size="medium" />
							</ImageContainer>
						))}
					</Inline>
				</Lane>
			</Container>
		);
	}
}

export default Home;
