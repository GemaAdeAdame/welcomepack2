// info.js

const apiURL = "https://pokeapi.co/api/v2/pokemon/";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`No se pudo obtener los datos de ${url}.`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPokemonList = async () => {
  const url = `${apiURL}?limit=1000`;
  return await fetchData(url);
};

export { getPokemonList };
