/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import Pokemon from '../../../../models/Pokemon';
import './pokemonCard.css';

const PokemonCard: React.FC<{ pokemon: Pokemon; darkMode: boolean }> = (props) => {
  const [toggleShiny, setToggleShiny] = useState(false);

  const { pokemon, darkMode } = props;

  return (
    <div className="pokemon-card__wrapper">
      <div className={`pokemon-card ${darkMode ? 'dark-mode' : ''}`}>
        <div className="pokemon-card__title">
          <h3>
            <span>{`#${pokemon.id} `}</span>
            {pokemon.name}
          </h3>
        </div>
        <div className="pokemon-card__img">
          {!toggleShiny ? (
            <img src={pokemon.img} alt={pokemon.name} />
          ) : (
            <img src={pokemon.shinyImg} alt={pokemon.name} />
          )}
        </div>
        <div className="pokemon-card__desc">
          {pokemon.shinyImg !== null && (
            <button type="button" onClick={() => setToggleShiny(!toggleShiny)}>
              {!toggleShiny ? <BsStars size={30} /> : <BsStars size={30} color="#ffcb05" />}
            </button>
          )}
          <div className="flex__center">
            <p>{`${pokemon.type} ${pokemon.weight}kg`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
