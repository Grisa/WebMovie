import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

import {
	NOT_INITIALIZED,
	INITIALIZED,
	SUCCESS,
	FAILED,
	WARNING,
	LOADING
} from "../../Utils/Constants";

import Logo from "../../Components/Generic/Logo";

import Api from "../../Utils/Api";

import StepButton from "../../Components/Generic/StepButton";

const Container = styled.div`
	color: #7d4cdb;
	font-weight: bold;
	background-color: #7d4cdb;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled.div`
	background-color: #f4f4f4;
	width: 550px;
	height: 70%;
	padding: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

const InputLabel = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
`;

const Label = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 300px;
`;

const FirstStep = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	height: 50%;
`;

const SecondStep = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	height: 50%;
`;

class Signup extends Component {
	state = {
		login: "",
		email: "",
		password: "",
		name: "",
		lastName: "",
		birthday: "",
		step1: INITIALIZED,
		step2: NOT_INITIALIZED
	};

	handleChange = field => ({ target }) => {
		this.setState({
			[field]: target.value
		});
	};

	goto = route => () => {
		this.props.history.push(route);
	};

	verifyUser = async () => {
		const { login, password, email } = this.state;

		this.setState({
			step1: LOADING
		});

		if (!this.validateField(1)) {
			return;
		}

		try {
			const response = await Api.post("user/validate", {
				login,
				password,
				email
			});

			this.setState({
				step1: SUCCESS,
				step2: INITIALIZED
			});

			console.log(response);
		} catch (e) {
			this.setState({
				step1: FAILED
			});
		}
	};

	createUser = async () => {
		const { login, password, birthday, email, name, lastName } = this.state;

		this.setState({
			step2: LOADING
		});

		if (!this.validateField(2)) {
			return;
		}

		try {
			await Api.post("user/create", {
				login,
				password,
				email,
				name,
				sobrenome: lastName,
				idade: birthday
			});

			this.setState({
				step2: SUCCESS
			});

			const { data } = await Api.post("user/authenticate", {
				...this.state
			});

			if (data.token) {
				localStorage.setItem("token", data.token);
			}

			// Fazer o login do usuário aqui
			this.props.history.push("/home");
		} catch (e) {
			this.setState({
				step2: FAILED
			});
			console.warn(e);
		}
	};

	validateField = step => {
		const { login, email, password } = this.state;
		const { name, lastName, birthday } = this.state;

		let isOkay = true;

		if (step === 1) {
			if (!login) {
				isOkay = false;
			}

			if (!email) {
				isOkay = false;
			}

			if (!password) {
				isOkay = false;
			}

			if (!isOkay) {
				this.setState({
					step1: WARNING
				});
			}
		} else {
			if (!name) {
				isOkay = false;
			}

			if (!lastName) {
				isOkay = false;
			}

			if (!birthday) {
				isOkay = false;
			}

			if (!isOkay) {
				this.setState({
					step2: WARNING
				});
			}
		}

		return isOkay;
	};

	renderFirstStep() {
		const { login, email, password } = this.state;

		return (
			<FirstStep>
				<InputLabel>
					<span>Login</span>
					<Input
						onChange={this.handleChange("login")}
						value={login}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
				<InputLabel>
					<span>Email</span>
					<Input
						onChange={this.handleChange("email")}
						value={email}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
				<InputLabel>
					<span>Senha</span>
					<Input
						onChange={this.handleChange("password")}
						value={password}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
			</FirstStep>
		);
	}

	renderSecondStep() {
		const { name, lastName, birthday } = this.state;

		return (
			<SecondStep>
				<InputLabel>
					<span>Nome</span>
					<Input
						onChange={this.handleChange("name")}
						value={name}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
				<InputLabel>
					<span>Sobrenome</span>
					<Input
						onChange={this.handleChange("lastName")}
						value={lastName}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
				<InputLabel>
					<span>Data de nascimento</span>
					<Input
						onChange={this.handleChange("birthday")}
						value={birthday}
						label={{ icon: "asterisk" }}
						labelPosition="right corner"
					/>
				</InputLabel>
			</SecondStep>
		);
	}

	render() {
		const { step1, step2 } = this.state;

		return (
			<Container>
				<Box>
					<Logo variant="outline" alignItems="center" />
					{step1 !== SUCCESS ? this.renderFirstStep() : null}
					{step1 === SUCCESS && step2 !== SUCCESS
						? this.renderSecondStep()
						: null}
					<StepButton
						steps={[
							{ onClick: this.verifyUser, stepState: step1 },
							{ onClick: this.createUser, stepState: step2 }
						]}
					/>
					<Label>
						<span onClick={this.goto("/home")} style={{ width: "140px" }}>
							Voltar para a home
						</span>
						<span style={{ width: "140px", textAlign: "right" }}>Duvidas?</span>
					</Label>
				</Box>
			</Container>
		);
	}
}

export default withRouter(Signup);
