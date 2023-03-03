export function fetchPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon/?')
    .then(response => response.json())
    .then(data => {
      let results = data.results;
      localStorage.setItem('pokemons', JSON.stringify(results));
    });
}
