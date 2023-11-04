import pokemonLogo from '../../assets/logo.png';

type DarkModeProp = {
  darkMode: boolean;
};

const Header: React.FC<DarkModeProp> = ({ darkMode }) => {
  return (
    <header className={`flex__center header-bg ${darkMode ? 'dark-mode' : ''}`}>
      <img src={pokemonLogo} alt="pokemon logo" />
    </header>
  );
};

export default Header;
