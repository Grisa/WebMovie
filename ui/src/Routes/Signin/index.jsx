import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

import Logo from "../../Components/Generic/Logo";

import Api from "../../Utils/Api";

const Container = styled.div`
	background-color: #7d4cdb;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled.div`
	color: #7d4cdb;
	font-weight: bold;
	background-color: #f4f4f4;
	width: 550px;
	height: 70%;
	padding: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const InputLabel = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
`;

const ButtonLabel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
`;

const Label = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 300px;
`;

class Signin extends Component {
	state = {
		login: "",
		password: ""
	};

	handleChange = field => ({ target }) => {
		this.setState({
			[field]: target.value
		});
	};

	validateField = () => {
		const { login, password } = this.state;

		let isOkay = true;

		if (!login) {
			isOkay = false;
		}

		if (!password) {
			isOkay = false;
		}

		if (!isOkay) {
			this.setState({
				step1: 2
			});
		}

		return isOkay;
	};

	verifyUser = async () => {
		const { password, login } = this.state;

		if (!this.validateField()) {
			return;
		}

		await Api.get("actionrequest.php", {
			params: {
				restType: "validUser",
				username: password,
				password: login
			}
		});

		// Fazer o login do usuário aqui
		console.log(1);

		this.goto("/home")();
	};

	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		const { login, password } = this.state;

		return (
			<Container>
				<Box>
					<Logo variant="outline" alignItems="center" />
					<InputLabel>
						<span>Login</span>
						<Input onChange={this.handleChange("login")} value={login} />
					</InputLabel>
					<InputLabel>
						<span>Senha</span>
						<Input onChange={this.handleChange("password")} value={password} />
					</InputLabel>
					<ButtonLabel>
						<Button
							style={{
								backgroundColor: "#7D4CDB",
								color: "#f4f4f4",
								width: "130px"
							}}
							onClick={this.verifyUser}>
							SUBMIT
						</Button>
						<span onClick={this.goto("/signup")}>Não possui conta?</span>
						<span>Esqueceu a senha?</span>
					</ButtonLabel>
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

export default withRouter(Signin);
