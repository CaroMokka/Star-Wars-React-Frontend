import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import bobaImage from "../../img/bobaFett.png";
import "../../styles/demo.scss";
import { useParams } from "react-router-dom";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	return (
		<div className="container p-5 mt-5 text-center">
			<div className="row">
				<div className="col-12">
					<h1 className="text-warning">CHARACTERS</h1>
					<hr className="my-4 text-light" />
				</div>
				<div className="row">
					{store.personajes.map((item, index) => {
						return (
							<div
								key={index}
								className="col-sm-12 col-md-6 col-lg-4 text-center text-light p-2 border border-1 border-warning">
								<img
									className="img-fluid"
									src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
								/>
								<h4 className="p-2">{item.name}</h4>
								<hr className="my-4 text-light" />
								<div className="d-flex justify-content-between">
									<Link to={`/detallePersonaje/${index + 1}`}>
										<button type="button" className="btn btn-outline-warning my-2 rounded-0">
											<span className="detalle">Details</span>
										</button>
									</Link>
									<Link to={`/detallePersonaje/${index + 1}`}>
										<button className="btn btn-outline-warning my-2 rounded-0">
											<span className="me-gusta ms-2">
												<i className="far fa-heart" />
											</span>
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
