import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  render() {
    return (
      <div className="App">
        {
          ((this.state.pokemon.length === 0)?<h1>Loading data</h1>:<Pokemon pokemon={this.state.pokemon} />)
        }
      </div>
    );
  }
}

export default App;
