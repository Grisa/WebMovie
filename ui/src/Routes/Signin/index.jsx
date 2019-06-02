import React, { Component } from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

import Logo from "../../Components/Logo";

import Api from "../../Services/Api";

const Container = styled.div`
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

	verifyUser = async () => {
		const { data } = await Api.post("actionrequest.php", {
			restType: "validUser",
			username: "China",
			password: 111111
		});

		console.log(data);
	};

	render() {
		return (
			<Container>
				<Box>
					<Logo variant="outline" alignItems="center" />
					<InputLabel>
						<span>Login</span>
						<Input />
					</InputLabel>
					<InputLabel>
						<span>Senha</span>
						<Input />
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
						<span>Não possui conta?</span>
						<span>Esqueceu a senha?</span>
					</ButtonLabel>
					<Label>
						<span style={{ width: "140px" }}>Voltar para a home</span>
						<span style={{ width: "140px", textAlign: "right" }}>Duvidas?</span>
					</Label>
				</Box>
			</Container>
		);
	}
}

export default Signin;
