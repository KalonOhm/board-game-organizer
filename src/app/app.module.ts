import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameDetailsComponent } from './game-library/game-details/game-details.component';
import { GameListComponent } from './game-library/game-list/game-list.component';
import { GameLibraryComponent } from './game-library/game-library.component';
import { GameLibraryHomeComponent } from './game-library/game-library-home/game-library-home.component';
import { GameFormReactiveComponent } from './game-library/game-form-reactive/game-form-reactive.component';
import { GameLibraryEditorComponent } from './game-library/game-library-editor/game-library-editor.component';
import { BggApiIntegrationComponent } from './bgg-api-integration/bgg-api-integration.component';
import { GameSearchComponent } from './bgg-api-integration/game-search/game-search.component';
import { GameResultsComponent } from './bgg-api-integration/game-results/game-results.component';
import { AuthComponent } from './auth/auth.component';
import { GameComponent } from './shared/game/game.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameListComponent,
    GameLibraryComponent,
    GameLibraryHomeComponent,
    GameFormReactiveComponent,
    GameLibraryEditorComponent,
    BggApiIntegrationComponent,
    GameSearchComponent,
    GameResultsComponent,
    AuthComponent,
    GameComponent,
    NavigationComponent,
    NotificationComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
