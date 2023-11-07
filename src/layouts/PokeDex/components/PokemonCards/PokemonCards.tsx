import Pokemon from '../../../../models/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

type PokemonCardsProps = {
  darkMode: boolean;
  pokemons: Pokemon[];
};

const PokemonCards: React.FC<PokemonCardsProps> = ({ darkMode, pokemons }) => {
  return (
    <section className="gap-4 p-4 md:gap-8 md:p-8 w-full grid__cards">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="flex__center ">
          <PokemonCard pokemon={pokemon} darkMode={darkMode} />
        </div>
      ))}
    </section>
  );
};

export default PokemonCards;
