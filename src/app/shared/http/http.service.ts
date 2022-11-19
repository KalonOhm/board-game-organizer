import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootUrl: string =
    'https://board-game-organizer-e0f6a-default-rtdb.firebaseio.com/games.json';

  constructor(
    private http: HttpClient,
    private gameLibraryService: GameLibraryService
  ) {
    console.log(this.firebaseRootUrl);
  }

  saveGamesToFirebase() {
    const games = this.gameLibraryService.getGames();
    return this.http.put(this.firebaseRootUrl, games).subscribe((res: any) => {
      console.log('Firebase DB Response', res);
    });
  }

  fetchGamesFromFirebase() {
    return (
      this.http.get < Game ||
      null >
        (this.firebaseRootUrl, {}).pipe(
          tap((games) => {
            this.gameLibraryService.setGames(games ?? []);
          })
        )
    );
  }
}
