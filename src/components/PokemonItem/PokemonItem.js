import { Component } from 'react';
import { StyledPokemonItem } from './PokemonItem.styled';

export class PokemonItem extends Component {
  state = { pokemon: {} };

  componentDidMount() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ pokemon: data });
      });
  }

  render() {
    const { pokemon } = this.state;
    return (
      <StyledPokemonItem>
        {/*  <p>{pokemon.id}. </p> */}

        {pokemon.sprites && (
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="240"
            height="100"
            loading="lazy"
            alt={pokemon.name}
          />
        )}
        <p>{pokemon.name}</p>
        {pokemon.stats && (
          <ul>
            {pokemon.stats.map(entry => (
              <li key={entry.stat.name}>
                {entry.stat.name}: {entry.base_stat}
              </li>
            ))}
          </ul>
        )}
      </StyledPokemonItem>
    );
  }
}
