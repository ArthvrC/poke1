import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      pokemonData: null,
      error: null,
      loading: false
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const pokemonName = this.state.searchText.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        const { stats } = data;
        const pokemonData = {
          hp: stats.find(stat => stat.stat.name === 'hp').base_stat,
          attack: stats.find(stat => stat.stat.name === 'attack').base_stat,
          defense: stats.find(stat => stat.stat.name === 'defense').base_stat,
          specialAttack: stats.find(stat => stat.stat.name === 'special-attack').base_stat,
          specialDefense: stats.find(stat => stat.stat.name === 'special-defense').base_stat,
          speed: stats.find(stat => stat.stat.name === 'speed').base_stat,
          sprite: data.sprites.front_default // URL de la imagen del Pokemon
        };
        this.setState({
          pokemonData: pokemonData,
          error: null,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: 'No se encontró el Pokemon buscado.',
          pokemonData: null,
          loading: false
        });
      });
  }

  render() {
    const { searchText, pokemonData, error, loading } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Buscar Pokémon:
          <input type="text" value={searchText} onChange={this.handleInputChange} />
        </label>
        <button type="submit">Buscar</button>
        {loading && <p>Cargando...</p>}
        {pokemonData && (
          <div className="result-container">
            <img src={pokemonData.sprite} alt={searchText} />
            <p>{searchText.toUpperCase()}</p>
            <p>HP: {pokemonData.hp}</p>
            <p>Ataque: {pokemonData.attack}</p>
            <p>Defensa: {pokemonData.defense}</p>
            <p>Ataque especial: {pokemonData.specialAttack}</p>
            <p>Defensa especial: {pokemonData.specialDefense}</p>
            <p>Velocidad: {pokemonData.speed}</p>
            <button className='back-button'>Volver</button>
          </div>
        )}
        {error && <p>{error}</p>}
      </form>
    );
  }
}

export default SearchBar;
