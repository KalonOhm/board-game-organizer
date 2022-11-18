import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BggApiIntegrationComponent } from './bgg-api-integration.component';

describe('BggApiIntegrationComponent', () => {
  let component: BggApiIntegrationComponent;
  let fixture: ComponentFixture<BggApiIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BggApiIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BggApiIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
