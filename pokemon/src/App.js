import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: data
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
