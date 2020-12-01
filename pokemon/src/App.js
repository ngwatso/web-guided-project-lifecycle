import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Mounted");
    setTimeout(()=>{
      this.setState({
        pokemon: data
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App: Component updated");
    
    console.log("-----------");
    console.log("old props: ", prevProps);
    console.log("new props: ", this.props);

    console.log("-----------");
    console.log("old state: ", prevState);
    console.log("new state: ", this.state);

    if (this.state.pokemon.length > 0) {
      console.log("New add to pokemon state data!!!");
    }
  }

  render() {
    console.log("App: Component Rendered");
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
