import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormReactiveComponent } from './game-form-reactive.component';

describe('GameFormReactiveComponent', () => {
  let component: GameFormReactiveComponent;
  let fixture: ComponentFixture<GameFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFormReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
