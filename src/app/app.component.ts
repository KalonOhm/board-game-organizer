import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'board-game-organizer';


  // ToDo: add auth service
  constructor() {}

  ngOnInit(): void {
    console.log("app root init")
  }





}
