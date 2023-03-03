import { Component } from 'react';
/* import { fetchPokemons } from 'services/pokemon-api';
 */ import { PokemonList } from './components/PokemonList/PokemonList';

export default class App extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
      .then(response => response.json())
      .then(data => {
        let results = data.results;
        localStorage.setItem('pokemons', JSON.stringify(results));
        this.setState({ pokemons: results });
      });
  }

  render() {
    const { pokemons } = this.state;
    return <div>{pokemons && <PokemonList pokemons={pokemons} />}</div>;
  }
}
