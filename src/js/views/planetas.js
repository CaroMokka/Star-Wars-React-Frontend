import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-5 text-center">
			<div className="row">
				<div className="col-12">
					<h1 className="text-warning">PLANETS</h1>
					<hr className="my-4 text-light" />
				</div>
				<div className="row">
					{store.planetas.map((item, index) => {
						return (
							<div
								key={index}
								className="col-sm-12 col-md-6 col-lg-4 text-center text-light p-2 border border-1 border-warning">
								<img
									className="img-fluid"
									src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
								/>
								<h4>{item.name}</h4>
								<div className="d-flex justify-content-between">
									<Link to={`/detallePlaneta/${index + 1}`} style={{ textDecoration: "none" }}>
										<button type="button" className="btn btn-outline-warning my-2 rounded-0 ">
											<span className="detalle">Detail</span>
										</button>
									</Link>
									<button
										onClick={() => {
											actions.addFav(item.name);
											console.log(item.name);
										}}
										className="btn btn-outline-warning my-2 rounded-0">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
