import React from "react";
import { Link } from "react-router-dom";
import swImage from "../../img/sw-logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
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
			<div className="favoritos text-light">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
						<span className="badge bg-warning text-dark fw-3">4</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
					</ul>
				</div>
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
