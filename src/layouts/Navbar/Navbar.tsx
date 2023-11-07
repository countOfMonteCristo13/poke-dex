import { useState } from 'react';
import './navbar.css';
import { TbMenuDeep } from 'react-icons/tb';
import pokemonRegions from '../../data/pokemonRegions';
import RegionModel from '../../models/RegionModel';
import pokemonLogo from '../../assets/logo.png';

type NavbarProps = {
  setRegion: (region: RegionModel) => void;
  darkMode: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ setRegion, darkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleRegionButtonClicked = (region: RegionModel) => {
    setRegion(region);
    if (window.innerWidth < 769) {
      setShowMenu(false);
    }
  };

  const closeWindow = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
  };
  window.addEventListener('resize', closeWindow);

  return (
    <nav className="relative">
      <ul
        className={`hidden bg-dark-blue w-full md:flex flex-row items-center ${
          darkMode ? 'dark-mode' : ''
        }`}
      >
        {pokemonRegions.map((region) => (
          <button
            className="w-full"
            type="button"
            onClick={() => handleRegionButtonClicked(region)}
          >
            <li className="cursor-pointer p-4 text-white text-center text-[18px] hover:text-gold">
              {region.title}
            </li>
          </button>
        ))}
      </ul>

      <button
        type="button"
        className="absolute top-[5px] right-[10px] block md:hidden"
        onClick={() => setShowMenu(true)}
      >
        <TbMenuDeep size={36} color="#ffcb05" strokeWidth={2.5} />
      </button>

      {showMenu && (
        <div
          className={`md:hidden fixed p-8 top-0 right-0 w-full h-screen bg-dark-blue z-[1000] 
          transition duration-500 ease-in slide-bottom flex flex-col justify-evenly items-start ${
            darkMode && 'dark-mode'
          }`}
        >
          <div className="w-full h-[140px] flex__center p-4">
            <img className="h-full w-[90%] object-contain" src={pokemonLogo} alt="pokemon logo" />
          </div>
          <ul className="flex flex-col justify-center items-start">
            {pokemonRegions.map((region) => (
              <button type="button" onClick={() => handleRegionButtonClicked(region)}>
                <li className="cursor-pointer p-[0.6rem] text-white text-[18px] hover:text-gold">
                  {region.title}
                </li>
              </button>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
