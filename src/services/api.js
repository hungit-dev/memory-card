const fetchData = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    return pokemonSprite;
  } catch (error) {
    console.log(error);
  }
};
export default fetchData;
