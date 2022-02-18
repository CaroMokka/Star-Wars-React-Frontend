import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import swImage from "../../img/sw-logo.png";
import "../../styles/navbar.scss";
import { Dropdown } from "bootstrap";
import { Badge } from "bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<Link to="/">
				<div className="navbar-brand ms-3">
					<img className="swImage border border-warning border-1" src={swImage} />
				</div>
			</Link>

			<div className="d-flex justify-content-around">
				<Link to="/personajes" style={{ textDecoration: "none" }}>
					<span className="text-light mx-3">CHARACTERS</span>
				</Link>
				<Link to="/planetas" style={{ textDecoration: "none" }}>
					<span className="text-light mx-3">PLANETS</span>
				</Link>
				<Link to="/naves" style={{ textDecoration: "none" }}>
					<span className="text-light mx-3">STARSHIPS</span>
				</Link>
			</div>

			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle fs-6"
					type="button"
					id="dropdownMenu2"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					FAVORITES
					<span className="badge text-dark">{store.favoritos.length}</span>
				</button>
				<ul className="dropdown-menu bg-warning" aria-labelledby="dropdownMenu2">
					{store.favoritos.map((item, index) => {
						return (
							<li key={index} className="ms-2 d-flex justify-content-between p-2">
								<span>{item}</span>
								<span className="text-danger fw-bold ms-auto" onClick={() => actions.deleteFav(index)}>
									X
								</span>
								<hr />
							</li>
						);
					})}
				</ul>
			</div>

			<div className="ml-auto">
				<Link to="/registro">
					<button className="btn 1">
						<i className="fas fa-user-plus text-light" />
					</button>
				</Link>
				<Link to="/login">
					<button className="btn 2">
						<i className="fas fa-user text-light" />
					</button>
				</Link>
			</div>
		</nav>
	);
};
