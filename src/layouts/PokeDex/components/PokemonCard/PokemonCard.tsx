import { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import Pokemon from '../../../../models/Pokemon';

const PokemonCard: React.FC<{ pokemon: Pokemon; darkMode: boolean }> = (props) => {
  const [toggleShiny, setToggleShiny] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { pokemon, darkMode } = props;

  const iconStyle = {
    color: isHovered && '#ffcb05',
  };

  return (
    <div
      className={`flex__center flex-col py-5 px-2 border-4 border-solid border-gold
      md:hover:shadow-[0px_0px_25px_0px_rgba(255,203,5,1)] rounded-2xl transition duration-400
      cursor-pointer min-w-[250px] ${darkMode ? 'bg-black' : 'bg-dark-blue'}`}
    >
      <div>
        <h3 className="font-bold capitalize text-lg text-center">
          <span>{`#${pokemon.id} `}</span>
          {pokemon.name}
        </h3>
      </div>
      <div className="w-full">
        {!toggleShiny ? (
          <img className="object-contain w-full h-full" src={pokemon.img} alt={pokemon.name} />
        ) : (
          <img className="object-contain w-full h-full" src={pokemon.shinyImg} alt={pokemon.name} />
        )}
      </div>
      <div className="w-full flex items-center justify-between px-1">
        {pokemon.shinyImg !== null && (
          <button
            className="hover:fill-gold"
            type="button"
            onClick={() => setToggleShiny(!toggleShiny)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <BsStars size={27} color={toggleShiny ? '#ffcb05' : '#111111'} style={iconStyle} />
          </button>
        )}
        <div className="flex__center capitalize text-center w-full">
          <p>{`${pokemon.type} ${pokemon.weight}kg`}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
