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
    <div className="flex__center p-4">
      <div
        className={`flex flex-col xs:flex-row items-center font-bold ${
          darkMode ? 'dark-mode' : ''
        }`}
      >
        <button
          disabled={firstPokemon <= 0}
          type="button"
          onClick={showLess}
          className="py-2 px-4 underline font-semibold text-dark-blue disabled:opacity-50"
        >{`< Previous`}</button>
        <p>{`Showing ${firstPokemon + 1} to ${lastPokemon}`}</p>
        <button
          disabled={lastPokemon === regionSize}
          type="button"
          onClick={showMore}
          className="py-2 px-4 underline font-semibold text-dark-blue disabled:opacity-50"
        >{`Next >`}</button>
      </div>
    </div>
  );
};

export default Pagination;
