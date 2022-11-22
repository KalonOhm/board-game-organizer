import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed = true;
  show: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    private httpService: HttpService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveGamesToFirebase();
  }

  onFetchData() {
    this.httpService.fetchGamesFromFirebase().subscribe();
  }
}
