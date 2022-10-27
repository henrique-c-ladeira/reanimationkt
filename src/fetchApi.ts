export const fetchApi = async (limit: number, offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const jsonResponse = await response.json();
  const convertedResponse = jsonResponse.results.map(elem => ({
    id: (elem.url as string).match(/\/\d+\//g)?.[0].split('/')[1],
    name: elem.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/${
      (elem.url as string).match(/\/\d+\//g)?.[0].split('/')[1]
    }.png`,
  }));
  return convertedResponse;
};
