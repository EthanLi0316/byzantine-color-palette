import React from "react";
import initialBoard from "./utils/board.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
	const [board, setBoard] = React.useState(initialBoard);

	function toggle(id) {
		setBoard(prevBoard =>
			prevBoard.map(item => {
				return item.id === id ? { ...item, on: !item.on } : item;
			})
		);
	}

	const buttonElements = board.map(button => (
		<Button
			toggle={toggle}
			id={button.id}
			key={button.id}
			color={button.color}
			on={button.on}
		/>
	));

	return (
		<div className="container">
			<Header name="Byzantine Color Palette" />
			<main>
				<div className="board">{buttonElements}</div>
			</main>
			<Footer creatorName="created by Ethan Li" />
		</div>
	);
}