import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/gameshelf', pathMatch: 'full' },
  { path: 'authpage', component: AuthComponent },
  { path: 'gameshelf', loadChildren: () => import ("./game-library/game-library.module").then((module) => module.GameLibraryModule) },
  { path: 'wishlist', loadChildren: () => import ("./wishlist/wishlist.module").then((module) => module.WishlistModule) },
  { path: 'bgglibrary', loadChildren: () => import ("./bgg-api-integration/bgg-api-integration.module").then((module) => module.BggApiIntegrationModule) },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: "enabledNonBlocking",
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
