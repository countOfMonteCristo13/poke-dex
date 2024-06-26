import { useState } from 'react';
import Header from './layouts/Header/Header';
import Navbar from './layouts/Navbar/Navbar';
import PokeDex from './layouts/PokeDex/PokeDex';
import pokemonRegions from './data/pokemonRegions';
import RegionModel from './models/RegionModel';
import DarkModeButton from './utils/DarkModeButton/DarkModeButton';
import ScrollUpButton from './utils/ScrollUpButton/ScrollUpButton';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(pokemonRegions[0]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSetRegion = (region: RegionModel) => {
    setSelectedRegion(region);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark-black' : 'bg-pale-blue'}`}>
      <ScrollUpButton />
      <DarkModeButton setDarkMode={handleDarkMode} darkMode={darkMode} />
      <Header darkMode={darkMode} />
      <Navbar setRegion={handleSetRegion} darkMode={darkMode} />
      <PokeDex selectedRegion={selectedRegion} darkMode={darkMode} />
    </div>
  );
}

export default App;
