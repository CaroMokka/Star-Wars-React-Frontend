import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";

export const Registro = () => {
	return (
		<div className="container mt-5">
			<div className="formularioRegistro">
				<form className="formulario d-flex flex-column align-items-center">
					<h2 className="titulo text-warning p-2 mt-3"> Registro</h2>
					<h4 className="titulo text-warning p-2 mt-3"> Nombre</h4>
					<input placeholder="Ingrese su nombre" />
					<h4 className="titulo text-warning p-2 mt-3"> Apellido</h4>
					<input placeholder="Ingrese su apellido" />
					<h4 className="titulo text-warning p-2 mt-3"> Email</h4>
					<input placeholder="Ingrese su email" />
					<Link to="/single">
						<button type="submit" className="btn3 btn-dark m-3">
							Submit
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
