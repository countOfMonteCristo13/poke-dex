import './fliterPageSize.css';

type FliterPageSizeProps = {
  setPageSize: (size: number) => void;
  regionSize: number;
  darkMode: boolean;
  pageSize: number;
};

const FliterPageSize: React.FC<FliterPageSizeProps> = ({
  setPageSize,
  regionSize,
  darkMode,
  pageSize,
}) => {
  const pageSizes = [1, 10, 20, 50, regionSize];

  return (
    <section className="flex__center filter-section">
      <h3>Pokemons per page: </h3>
      <div className={`flex__center filter-options ${darkMode ? 'dark-mode' : ''}`}>
        {pageSizes.map((pageLength) => {
          return (
            <button
              key={pageLength}
              type="button"
              className={`page-size ${pageSize === pageLength && 'active-btn'}`}
              onClick={() => setPageSize(pageLength)}
            >
              {pageLength === regionSize ? 'All' : pageLength}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FliterPageSize;
