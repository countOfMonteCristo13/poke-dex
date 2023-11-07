import pokemonLogo from '../../assets/logo.png';

type DarkModeProp = {
  darkMode: boolean;
};

const Header: React.FC<DarkModeProp> = ({ darkMode }) => {
  return (
    <header className={`flex__center h-[150px] px-8 py-4 bg-gold ${darkMode ? 'dark-mode' : ''}`}>
      <img className="w-full h-full object-contain" src={pokemonLogo} alt="pokemon logo" />
    </header>
  );
};

export default Header;
