import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanedPlacesComponent } from './cleaned-places.component';

describe('CleanedPlacesComponent', () => {
  let component: CleanedPlacesComponent;
  let fixture: ComponentFixture<CleanedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanedPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
