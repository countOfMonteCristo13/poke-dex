import './darkModeButton.css';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

type DarkModeButtonProps = {
  setDarkMode: () => void;
  darkMode: boolean;
};

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ setDarkMode, darkMode }) => {
  return (
    <button type="button" className="dark-mode-btn" onClick={setDarkMode}>
      {darkMode ? (
        <BsFillSunFill size={24} color="#ffcb05" />
      ) : (
        <BsFillMoonFill size={20} color="#1043b4" />
      )}
    </button>
  );
};

export default DarkModeButton;
