import React from "react";

import data from "../data";
import "./styles.scss";

import Pokemon from "./components/Pokemon";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			pokemon: data,
		};
	}

	componentDidMount() {
		console.log(`nw: App.js: componentDidMount`);
		// ! the DOM is rendered and available for us to query!!!
		// ! call an API and asynchronously update
		setTimeout(() => {
			this.setState({ pokemon: data });
		}, 4000);
	}

	componentDidUpdate(prevProps, prevState) {
		// ! DO NOT update state within CDU, it will cause an infinite loop!!!
		console.log(
			`nw: App.js: componentDidUpdate: prevProps, prevState`,
			prevProps,
			prevState
		);
		console.log(
			`nw: App.js: componentDidUpdate: prevProps, prevState`,
			this.state
		);
	}

	render() {
		console.log(`nw: App.js: render(): App renders`);
		return (
			<div className="App">
				<Pokemon pokemon={this.state.pokemon} />
			</div>
		);
	}
}

export default App;
