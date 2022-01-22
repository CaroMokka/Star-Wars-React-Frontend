import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export const DetallePersonaje = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.getDetallePersonaje(id);
	}, []);

	return (
		<div className="container fw-light mt-5">
			<div className="row bg-dark bg-opacity-50 rounded-3">
				<div className="col-sm-12 col-md-6 p-2">
					<img
						className="img-fluid"
						src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
					/>
				</div>
				<div className="col-sm-12 col-md-6 p-2">
					<hr className="my-4 text-light" />
					<h3 className="display-6 text-light text-center text-uppercase">{store.detallePersonaje.name}</h3>
					<hr className="my-4 text-light" />
					<p className="text-light">Date of birth: {store.detallePersonaje.birth_year}</p>
					<hr className="my-2 text-light w-50" />
					<p className="text-light">Height: {store.detallePersonaje.height} cm</p>
					<hr className="my-2 text-light w-50" />
					<p className="text-light">Hair Color: {store.detallePersonaje.hair_color}</p>
					<hr className="my-2 text-light w-50" />
					<p className="text-light">Eyes Color: {store.detallePersonaje.eye_color}</p>
					<hr className="my-2 text-light w-50" />
					<p className="text-light">Skin Color: {store.detallePersonaje.skin_color}</p>
				</div>
			</div>

			<hr className="my-4 text-light" />
			<div className="d-flex justify-content-between">
				<Link to="/personajes">
					<span className="btn btn-outline-warning mt-2 fw-light">Back</span>
				</Link>

				<Link to="/">
					<span className="btn btn-outline-warning mt-2 fw-light">Home</span>
				</Link>
			</div>
		</div>
	);
};

DetallePersonaje.propTypes = {
	match: PropTypes.object
};
