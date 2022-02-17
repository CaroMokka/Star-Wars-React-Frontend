const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			naves: [],
			planetas: [],
			detallePersonaje: {},
			detallePlaneta: {},
			detalleNave: {},
			favoritos: []
		},
		actions: {
			//---------------------------> GET Personajes
			getPersonajes: async () => {
				await fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(
						resultado => {
							//console.log(resultado.results);
							setStore({ personajes: resultado.results });
						}
						/*console.log(resultado)*/
					)
					.catch(error => console.log("error", error));
			},

			//---------------------------> GET Planetas

			getPlanetas: async () => {
				await fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(resultado => {
						//console.log(resultado.results);
						setStore({ planetas: resultado.results });
					})
					.catch(error => console.log("error", error));
			},

			//---------------------------> GET Naves

			getNaves: async () => {
				await fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(resultado => {
						//console.log(resultado.results);
						setStore({ naves: resultado.results });
					})
					.catch(error => console.log("error", error));
			},

			//----------> GET DETALLES Personajes , Planetas , Naves

			getDetallePersonaje: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then(resultado => {
						setStore({
							detallePersonaje: resultado.result.properties
						});
						//console.log(resultado);
					})
					.catch(error => console.log("error", error));
			},

			getDetallePlaneta: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then(resultado => {
						//console.log(resultado)
						setStore({ detallePlaneta: resultado.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			getDetalleNave: async id => {
				const store = getStore();
				await fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(response => response.json())
					.then(resultado => {
						//console.log(resultado);
						setStore({ detalleNave: resultado.result.properties });
					})
					.catch(error => console.log("error", error));
			}
			/* addFavPersonaje: id => {
				const store = getStore();
				setStore({ favoritos: [store.personajes[id], ...store.favoritos] })
			} */
		}
	};
};

export default getState;
