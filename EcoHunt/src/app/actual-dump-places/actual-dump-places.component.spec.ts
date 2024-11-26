import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDumpPlacesComponent } from './actual-dump-places.component';

describe('ActualDumpPlacesComponent', () => {
  let component: ActualDumpPlacesComponent;
  let fixture: ComponentFixture<ActualDumpPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualDumpPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualDumpPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
