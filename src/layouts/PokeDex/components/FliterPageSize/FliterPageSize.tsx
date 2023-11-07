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
    <section className="flex__center flex-col md:flex-row gap-4 py-4 text-gold">
      <h3>Pokemons per page: </h3>
      <div className={`flex__center gap-2  ${darkMode ? 'dark-mode' : ''}`}>
        {pageSizes.map((pageLength) => {
          return (
            <button
              key={pageLength}
              type="button"
              className={`h-10 w-10 font-bold hover:bg-gold border-[3px] border-solid rounded-[50%] border-gold  
              ${darkMode ? 'hover:text-dark-black' : 'hover:text-pale-blue'}
              ${
                pageSize === pageLength &&
                (darkMode ? 'bg-gold text-dark-black' : 'bg-gold text-pale-blue')
              }`}
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
