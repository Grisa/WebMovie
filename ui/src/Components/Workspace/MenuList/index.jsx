import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown, Input } from "semantic-ui-react";
import SearchWave from "../../Wave/SearchWave";

const options = [
	{ key: "1", text: "Home", value: "/home", onlyLogged: false },
	{ key: "2", text: "Ranking", value: "/ranking", onlyLogged: false },
	{ key: "3", text: "Minha lista", value: "/mylist", onlyLogged: true }
];

class MenuList extends Component {
	advancedHandleClose = () => {
		const { handleClose } = this.props;

		handleClose()();
	};

	advancedHandleOpen = () => {
		const { handleOpen } = this.props;

		handleOpen(SearchWave, {})();
	};

	focusSearchInput = () => {
		const searchInput = this.refs.searchInput;

		searchInput.focus();
	};

	goto = route => () => {
		const { handleClose, history } = this.props;

		handleClose()();
		history.push(route);
	};

	isLogged = () => {
		return !!localStorage.getItem("token");
	};

	render() {
		const { midia } = this.props;
		const isLogged = this.isLogged();

		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gridColumn: "5 / 12"
				}}>
				<Dropdown
					button
					className="icon"
					floating
					labeled
					icon="th list"
					text="Menu"
					style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}>
					<Dropdown.Menu>
						{options
							.filter(
								option => !option.onlyLogged || option.onlyLogged === isLogged
							)
							.map(option => (
								<Dropdown.Item
									key={option.key}
									text={option.text}
									value={option.value}
									onClick={this.goto(option.value)}
								/>
							))}
					</Dropdown.Menu>
				</Dropdown>
				<Input
					label={
						<Dropdown
							defaultValue="1"
							options={midia}
							style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}
							onFocus={this.advancedHandleOpen}
							onChange={this.advancedHandleOpen}
							onBlur={this.focusSearchInput}
						/>
					}
					ref="searchInput"
					labelPosition="left"
					placeholder="Pesquise algo..."
					onFocus={this.advancedHandleOpen}
					onBlur={this.advancedHandleClose}
				/>
			</div>
		);
	}
}

export default withRouter(MenuList);
