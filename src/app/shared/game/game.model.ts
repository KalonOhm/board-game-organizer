export class Game {
  constructor (
    public title: string,
    public publisher: string,
    public boxImage: string,
    public retailPrice: number,
    public author?: string,
    public firstPublished?: number,
    public genre?: string,
  ) {

  }
}
