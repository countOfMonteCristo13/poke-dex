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
    <nav>
      <ul className={`regions ${darkMode ? 'dark-mode' : ''}`}>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.kanto)}>
          <li className="region" id="kanto">
            Kanto
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.johto)}>
          <li className="region" id="johto">
            Johto
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.hoenn)}>
          <li className="region" id="hoenn">
            Hoenn
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.sinnoh)}>
          <li className="region" id="sinnoh">
            Sinnoh
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.unova)}>
          <li className="region" id="unova">
            Unova
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.kalos)}>
          <li className="region" id="kalos">
            Kalos
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.alola)}>
          <li className="region" id="alola">
            Alola
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.hisui)}>
          <li className="region" id="hisui">
            Hisui
          </li>
        </button>
        <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.paldea)}>
          <li className="region" id="paldea">
            Paldea
          </li>
        </button>
      </ul>

      <button type="button" className="burger-btn" onClick={() => setShowMenu(true)}>
        <TbMenuDeep size={36} color="#ffcb05" strokeWidth={2.5} />
      </button>

      {showMenu && (
        <div className={`regions-menu__wrapper slide-bottom ${darkMode && 'dark-mode'}`}>
          <div className="regions-menu__img flex__center">
            <img src={pokemonLogo} alt="pokemon logo" />
          </div>
          <ul className="regions-menu">
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.kanto)}>
              <li className="region" id="kanto">
                Kanto
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.johto)}>
              <li className="region" id="johto">
                Johto
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.hoenn)}>
              <li className="region" id="hoenn">
                Hoenn
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.sinnoh)}>
              <li className="region" id="sinnoh">
                Sinnoh
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.unova)}>
              <li className="region" id="unova">
                Unova
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.kalos)}>
              <li className="region" id="kalos">
                Kalos
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.alola)}>
              <li className="region" id="alola">
                Alola
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.hisui)}>
              <li className="region" id="hisui">
                Hisui
              </li>
            </button>
            <button type="button" onClick={() => handleRegionButtonClicked(pokemonRegions.paldea)}>
              <li className="region" id="paldea">
                Paldea
              </li>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
