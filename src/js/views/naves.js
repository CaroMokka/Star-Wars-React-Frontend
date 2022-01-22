import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import bobaImage from "../../img/bobaFett.png";

export const Naves = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<div className="row">
				<div className="col-12">
					<h1 className="text-warning">STARSHIPS</h1>
					<hr className="my-4 text-light" />
				</div>
				<div className="row">
					{store.naves.map((item, index) => {
						return (
							<div
								key={index}
								className="col-sm-12 col-md-6 col-lg-4 text-center text-light p-2 border border-1 border-warning">
								<img
									className="img-fluid"
									src={`https://starwars-visualguide.com/assets/img/starships/${index + 2}.jpg`}
								/>
								<h4>{item.name}</h4>
								<div className="d-flex justify-content-between">
									<Link to={`/detalleNave/${index + 2}`} style={{ textDecoration: "none" }}>
										<button type="button" className="btn btn-outline-warning my-2 rounded-0 ">
											<span className="detalle">Detail</span>
										</button>
									</Link>
									<Link to={`/detalleNave/${index + 1}`}>
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
