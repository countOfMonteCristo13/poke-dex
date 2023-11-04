import './pagination.css';

type PaginationProps = {
  firstPokemon: number;
  lastPokemon: number;
  regionSize: number;
  showLess: () => void;
  showMore: () => void;
  darkMode: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  firstPokemon,
  lastPokemon,
  regionSize,
  showLess,
  showMore,
  darkMode,
}) => {
  return (
    <div className="flex__center p-1">
      <div className={`pokedex-pagination ${darkMode ? 'dark-mode' : ''}`}>
        <button
          disabled={firstPokemon <= 0}
          type="button"
          onClick={showLess}
        >{`< Previous`}</button>
        <p>{`Showing ${firstPokemon + 1} to ${lastPokemon}`}</p>
        <button
          disabled={lastPokemon === regionSize}
          type="button"
          onClick={showMore}
        >{`Next >`}</button>
      </div>
    </div>
  );
};

export default Pagination;
