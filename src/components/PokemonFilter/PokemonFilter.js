import { FiSearch } from 'react-icons/fi';
import { FilterContainer, FilterInput } from './PokemonFilter.styled';

export const PokemonFilter = ({ onFilter, value }) => {
  return (
    <FilterContainer>
      <label htmlFor="filter">
        <FiSearch size={20} />
      </label>
      <FilterInput
        id="filter"
        type="text"
        value={value}
        onChange={onFilter}
        name="filter"
        placeholder="Search pokemons"
      />
    </FilterContainer>
  );
};
