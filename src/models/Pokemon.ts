class Pokemon {
  id: number;
  name: string;
  type: string;
  weight: number;
  img: string;
  shinyImg: string;

  constructor(
    id: number,
    name: string,
    type: string,
    weight: number,
    img: string,
    shinyImg: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.img = img;
    this.shinyImg = shinyImg;
  }
}

export default Pokemon;
