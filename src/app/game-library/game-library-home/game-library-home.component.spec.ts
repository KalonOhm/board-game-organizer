import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLibraryHomeComponent } from './game-library-home.component';

describe('GameLibraryHomeComponent', () => {
  let component: GameLibraryHomeComponent;
  let fixture: ComponentFixture<GameLibraryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLibraryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLibraryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
