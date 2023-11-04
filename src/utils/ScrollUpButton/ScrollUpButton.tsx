import { useEffect, useState } from 'react';
import './scrollUpButton.css';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const HandleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button type="button" className="scroll-up-btn" onClick={HandleButtonClick}>
      {showButton && <TbArrowBigUpLinesFilled size={32} color="#ffcb05" />}
    </button>
  );
};

export default ScrollUpButton;
