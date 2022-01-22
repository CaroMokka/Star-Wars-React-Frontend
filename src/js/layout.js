import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
{
	/*COMPONENTES ------------->>>>>>>>>> */
}
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
{
	/*VIEWS ------------->>>>>>>>>> */
}

import { Planetas } from "./views/planetas";
import { DetallePlaneta } from "./views/detallePlaneta";
import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { DetallePersonaje } from "./views/detallePersonaje";
import { Registro } from "./views/registro";
import { Login } from "./views/login";
import { Naves } from "./views/naves";
import { DetalleNave } from "./views/detalleNave";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/naves">
							<Naves />
						</Route>

						<Route exact path="/detallePersonaje/:id">
							<DetallePersonaje />
						</Route>
						<Route exact path="/detallePlaneta/:id">
							<DetallePlaneta />
						</Route>
						<Route exact path="/detalleNave/:id">
							<DetalleNave />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
