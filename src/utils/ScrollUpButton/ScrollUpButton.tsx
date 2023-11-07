import { useEffect, useState } from 'react';
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
    <button
      type="button"
      className="p-1 hover:scale-110 transition duration-200 ease-in-out  fixed bottom-[10px] right-[10px]"
      onClick={HandleButtonClick}
    >
      {showButton && <TbArrowBigUpLinesFilled size={32} color="#ffcb05" />}
    </button>
  );
};

export default ScrollUpButton;
