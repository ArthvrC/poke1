import React from 'react';
import PokemonContext from '../Context';
import Pokemon from './Pokemon';
import Filter from './Filter';

function PokemonList() {
  const { selectedPokemon } = useContext(PokemonContext);

  return (
    <div>
      <Filter />
      {selectedPokemon.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
