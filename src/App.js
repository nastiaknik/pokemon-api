import { Component } from 'react';
import { ToastContainer /*  toast */ } from 'react-toastify';
import { Layout } from './components/Layout/Layout';
import { PokemonList } from './components/PokemonList/PokemonList';
import { PokemonFilter } from './components/PokemonFilter/PokemonFilter';

export default class App extends Component {
  state = {
    pokemons: [],
    filter: '',
  };

  componentDidMount() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => response.json())
      .then(data => {
        let results = data.results;
        localStorage.setItem('pokemons', JSON.stringify(results));
        this.setState({ pokemons: results });
      })
      .catch(error => console.log(error));
  }

  handleSetFilterValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFilterPokemon = () => {
    return this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim());
    });
  };

  render() {
    /*  const { pokemons } = this.state; */
    return (
      <Layout>
        <PokemonFilter
          value={this.state.filter}
          onFilter={this.handleSetFilterValue}
        />
        <PokemonList
          /* pokemons={pokemons} */ pokemons={this.handleFilterPokemon()}
        />
        <ToastContainer limit={1} />
      </Layout>
    );
  }
}
