import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLibraryEditorComponent } from './game-library-editor.component';

describe('GameLibraryEditorComponent', () => {
  let component: GameLibraryEditorComponent;
  let fixture: ComponentFixture<GameLibraryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLibraryEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLibraryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
