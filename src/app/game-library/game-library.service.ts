import { Injectable } from "@angular/core";
import { Game } from "../shared/game/game.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class GameLibraryService {

  private myGames: Game[] = [
    new Game(
      'TestTitle',
      'Pandasaurus',
      'image',
      12,
      'Jake Bledsoe',
      1996,
      'Area Control',
    ),
    new Game(
      'SecondTestTitle',
      'Fantasty Flight',
      'image2',
      120,
      'Dinosaur Jack',
      2016,
      'Worker Placement',
    )
  ];

  gameSelected = new Subject<Game>();
  gameLibraryChanged = new Subject<Game[]>();

  //Create game instance in Games array
  saveGame(game: Game) {
    this.myGames.push(game);
    this.gameSelected.next(game);
    this.gameLibraryChanged.next(this.getGames());
  }

  //Read list of games
  getGames() {
    return this.myGames.slice();
  }

  //Update a game
  getGame(idx: number) {
    return this.getGames()[idx]
  }

  //Delete game from games list array
  removeGame(idx: number) {
    if (idx >= 0) {
      this.gameSelected.next(this.myGames[idx]);
      this.myGames.splice(idx, 1);
      this.gameLibraryChanged.next(this.getGames());
    }
  }

  addGame(game: Game) {
    this.myGames.push(game);
    this.gameLibraryChanged.next(this.getGames());
  }

  updateGame(idx: number, modifiedGame: Game) {
    this.myGames[idx] = modifiedGame;
    this.gameLibraryChanged.next(this.getGames())
  }

  setGames(games: Game[]) {
    this.myGames = games;
    this.gameLibraryChanged.next(this.getGames());
  }
}
