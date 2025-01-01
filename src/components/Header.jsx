import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export default function Header({ name }) {
	return (
		<header className="nav-bar">
			<img src={logo} className="nav-logo" />
			<span>{name}</span>
		</header>
	);
}
