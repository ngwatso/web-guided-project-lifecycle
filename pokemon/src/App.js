import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Did Mount");
  }

  componentDidUpdate() {
    console.log("App: Component Did Update");
  }

  render() {
    console.log("App: Component Renders");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
