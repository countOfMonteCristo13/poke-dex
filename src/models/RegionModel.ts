class RegionModel {
  indexOfFirstPokemon: number;
  indexOfLastPokemon: number;
  regionSize: number;
  title: string;

  constructor(
    indexOfFirstPokemon: number,
    indexOfLastPokemon: number,
    regionSize: number,
    title: string
  ) {
    this.indexOfFirstPokemon = indexOfFirstPokemon;
    this.indexOfLastPokemon = indexOfLastPokemon;
    this.regionSize = regionSize;
    this.title = title;
  }
}

export default RegionModel;
