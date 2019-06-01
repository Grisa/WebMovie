import React from "react";
import { Dropdown, Input } from "semantic-ui-react";

const MenuList = ({ options, midia }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Dropdown
				button
				className="icon"
				floating
				labeled
				icon="th list"
				options={options}
				text="Menu"
				style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}
			/>
			<Input
				label={
					<Dropdown
						defaultValue="1"
						options={midia}
						style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}
					/>
				}
				labelPosition="left"
				placeholder="Pesquise algo..."
			/>
		</div>
	);
};

export default MenuList;
