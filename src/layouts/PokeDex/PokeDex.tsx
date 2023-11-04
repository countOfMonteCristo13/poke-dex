import { useCallback, useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard/PokemonCard';
import './pokeDex.css';
import Pokemon from '../../models/Pokemon';
import RegionModel from '../../models/RegionModel';
import Pagination from './components/Pagination/Pagination';
import FliterPageSize from './components/FliterPageSize/FliterPageSize';
import Loader from '../../utils/Loader/Loader';

type PokeDexProps = {
  selectedRegion: RegionModel;
  darkMode: boolean;
};

const PokeDex: React.FC<PokeDexProps> = ({ selectedRegion, darkMode }) => {
  const { indexOfLastPokemon, indexOfFirstPokemon, regionSize, title } = selectedRegion;
  const [fetchLimit, setFetchLimit] = useState(20);
  const [firstPokemonPosition, setFirstPokemonPosition] = useState(indexOfFirstPokemon);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const [forLimit, setForLimit] = useState(indexOfFirstPokemon + fetchLimit);

  const [firstPokemon, setFirstPokemon] = useState(0);
  const [lastPokemon, setLastPokemon] = useState(fetchLimit);

  useEffect(() => {
    setFirstPokemonPosition(indexOfFirstPokemon);
    setPokemons([]);
    setIsLoading(true);
    setHttpError(null);

    if (fetchLimit !== 50 && fetchLimit !== 1 && fetchLimit !== 10 && fetchLimit !== 20) {
      setFetchLimit(regionSize);
      setForLimit(indexOfLastPokemon);
      setLastPokemon(regionSize);
      // console.log(fetchLimit, 'fetch limit vece');
    } else {
      setForLimit(indexOfFirstPokemon + fetchLimit);
      setLastPokemon(fetchLimit);
      // console.log(fetchLimit, 'fetch limit manje');
      // console.log(indexOfFirstPokemon);
      // console.log(indexOfLastPokemon);
      // console.log(forLimit);
    }

    setFirstPokemon(0);
  }, [selectedRegion, indexOfFirstPokemon, fetchLimit, regionSize, indexOfLastPokemon]);

  const fetchPokemons = useCallback(async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const loadedPokemons: Pokemon[] = [];
    for (let i = firstPokemonPosition; i < forLimit; i++) {
      // eslint-disable-next-line no-await-in-loop
      await fetch(url + (i + 1))
        .then((response) => response.json())
        .then((data) => {
          const pokemonTypes: string[] = data.types.map((pokemonType: any) => {
            return pokemonType.type.name;
          });
          const pokemonType: string = pokemonTypes.join(' / ');
          loadedPokemons.push({
            id: data.id,
            name: data.name,
            type: pokemonType,
            weight: data.weight,
            img: data.sprites.front_default,
            shinyImg: data.sprites.front_shiny,
          });
        });
    }
    setPokemons(loadedPokemons);
    setIsLoading(false);
  }, [forLimit, firstPokemonPosition]);

  useEffect(() => {
    fetchPokemons().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [fetchPokemons]);

  const showMore = () => {
    window.scrollTo(0, 0);
    if (lastPokemon < regionSize) {
      setFirstPokemon(firstPokemon + fetchLimit);
      setFirstPokemonPosition(firstPokemonPosition + fetchLimit);
      if (lastPokemon + fetchLimit > regionSize) {
        setForLimit(indexOfLastPokemon);
        setLastPokemon(regionSize);
      } else {
        setForLimit(forLimit + fetchLimit);
        setLastPokemon(lastPokemon + fetchLimit);
      }
      setIsLoading(true);
    }
  };

  const showLess = () => {
    window.scrollTo(0, 0);
    if (firstPokemon > 0) {
      setFirstPokemonPosition(firstPokemonPosition - fetchLimit);
      setFirstPokemon(firstPokemon - fetchLimit);
      if (lastPokemon === regionSize) {
        setForLimit(firstPokemonPosition);
        setLastPokemon(firstPokemon);
      } else {
        setForLimit(forLimit - fetchLimit);
        setLastPokemon(lastPokemon - fetchLimit);
      }
      setIsLoading(true);
    }
  };

  const setPageSize = (pageSize: number) => {
    setFetchLimit(pageSize);
  };

  if (httpError) {
    return (
      <div className="flex__center mt-2">
        <h2>{httpError}</h2>
      </div>
    );
  }

  return (
    <section className="pokedex">
      <div className="pokedex-title flex__center" id="#pokedex">
        <h2>{title}</h2>
      </div>
      <FliterPageSize
        setPageSize={setPageSize}
        regionSize={regionSize}
        darkMode={darkMode}
        pageSize={fetchLimit}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="pokedex-pokemons">
            {pokemons.map((pokemon) => (
              <div key={pokemon.name}>
                <PokemonCard pokemon={pokemon} darkMode={darkMode} />
              </div>
            ))}
          </div>
          <Pagination
            firstPokemon={firstPokemon}
            lastPokemon={lastPokemon}
            regionSize={regionSize}
            showLess={showLess}
            showMore={showMore}
            darkMode={darkMode}
          />
        </>
      )}
    </section>
  );
};

export default PokeDex;
