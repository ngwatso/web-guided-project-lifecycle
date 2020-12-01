import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  useEffect(()=>{
    console.log("Pokemon: Component Mounted.");
  }, []);

  console.log("Pokemon: Component Rendered.");
  return (
    <>
      {props.pokemon.map(pokemon => (
        <div key={pokemon.id} className="pokemon">
          <img src={pokemon.img} alt={pokemon.name} />
          <div>
            <h3>{pokemon.name}</h3>
            {pokemon.next_evolution &&
              pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
          </div>
        </div>
      ))}
    </>
  );
}

export default Pokemon;
