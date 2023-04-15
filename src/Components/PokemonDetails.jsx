import React, { useContext } from 'react';
import PokemonContext from '../Context';

function PokemonDetails(props) { /*pokemonPage*/
  const { selectedPokemon } = useContext(PokemonContext);
  const pokemon = selectedPokemon.find(p => p.id === parseInt(props.match.params.id));

  return (
    <div>
      {pokemon ? (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>Type: {pokemon.type}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </>
      ) : (
        <p>Pokemon not found.</p>
      )}
    </div>
  );
}

export default PokemonDetails;
