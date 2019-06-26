import React, { Component } from "react";
import styled from "styled-components";
import { Button, Card, Radio, Form, TextArea, Input } from "semantic-ui-react";
import { FaArrowRight } from "react-icons/fa";

import api from "../../../Utils/Api";

const Container = styled.div`
	height: 100vmax;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	animation-delay: 3s;
	display: grid;
	overflow: hidden;
	grid-template-columns: repeat(16, 1fr);
	grid-template-rows: repeat(32, 50px);
`;
const InputLabel = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

/**
 * Nome
 * Descrição
 * Genero
 * Data
 * Duração
 */

class EditableWave extends Component {
	constructor(props) {
		super(props);

		console.log(props);

		this.state = {
			name: props.data.name || "",
			desc: props.data.description || "",
			type: props.data.type || 1,
			duration: props.data.duration || 0,
			genre: props.data.genre || ""
		};
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

	handleChange = (field, value) => ({ target }) => {
		this.setState({
			[field]: value || target.value
		});
	};

	handleTime = ({ target }) => {
		const stringData = target.value || "";
		const [hour, minute, seconds] = stringData.split(":");

		const duration =
			parseInt(hour, 10) * 3600 +
			parseInt(minute, 10) * 60 +
			parseInt(seconds, 10);

		this.setState({
			duration: duration === "NaN:NaN:NaN" || isNaN(duration) ? 0 : duration
		});
	};

	handleSubmit = () => {
		const { data } = this.props;
		const { name, desc, type, duration, genre } = this.state;

		if (data.edit) {
			api.post("movie/update", {
				name,
				update: {
					name,
					description: desc,
					type,
					duration,
					genre
				}
			});
		} else if (data.create) {
			api.post("movie/create", {
				name,
				description: desc,
				type,
				duration,
				genre
			});
		}
	};

	render() {
		const { handleClose, data } = this.props;
		const { name, desc, type, genre, duration } = this.state;

		return (
			<Container>
				<Button
					style={{
						borderRadius: "15em",
						height: "50px",
						width: "50px",
						gridArea: "2 / 15 / auto / auto",
						justifySelf: "end"
					}}
					circular
					icon="x"
					onClick={handleClose()}
				/>
				<Card style={{ gridArea: "2 / 2 / 15 / 15" }} fluid>
					<Card.Header style={{ fontSize: "13pt", padding: 10 }}>
						{data.name}
					</Card.Header>
					<Card.Content>
						<InputLabel>
							<span>Nome</span>
							<Input value={name} onChange={this.handleChange("name")} />
						</InputLabel>
						<InputLabel>
							<span>Descrição</span>
							<Form>
								<TextArea value={desc} onChange={this.handleChange("desc")} />
							</Form>
						</InputLabel>
						<InputLabel>
							<span>Genero</span>
							<Input value={genre} onChange={this.handleChange("genre")} />
						</InputLabel>
						<InputLabel>
							<span>Genero</span>
							<Radio
								label="Filme"
								checked={type === 1}
								onClick={this.handleChange("type", 1)}
								defaultChecked
							/>
							<Radio
								label="Série"
								checked={type === 2}
								onClick={this.handleChange("type", 2)}
							/>
							<Radio
								label="Anime"
								checked={type === 3}
								onClick={this.handleChange("type", 3)}
							/>
						</InputLabel>
						<InputLabel>
							<span>Duração</span>
							<Input
								value={this.returnHour(duration)}
								onChange={this.handleTime}
							/>
						</InputLabel>
						<Button animated onClick={this.handleSubmit}>
							<Button.Content visible>Salvar</Button.Content>
							<Button.Content hidden>
								<FaArrowRight />
							</Button.Content>
						</Button>
					</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default EditableWave;
