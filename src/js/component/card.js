import React from "react";

import bobaImage from "../../img/bobaFett.png";

export const Card = () => {
	return (
		<div className="card text-center text-light mt-3">
			<img src={bobaImage} />
			<h2>Boba Fett</h2>

			<a href="#" className="btn3 btn-dark">
				<p className="text-center">See more...</p>
			</a>
		</div>
	);
};
