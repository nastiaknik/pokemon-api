import { StyledPokemonList } from './PokemonList.styled';
import { PokemonItem } from 'components/PokemonItem/PokemonItem';
import { Component } from 'react';

export class PokemonList extends Component {
  render() {
    return (
      <StyledPokemonList>
        {this.props.pokemons.map(pokemon => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </StyledPokemonList>
    );
  }
}
