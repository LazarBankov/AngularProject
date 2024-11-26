import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDumpPlaceComponent } from './create-dump-place.component';

describe('CreateDumpPlaceComponent', () => {
  let component: CreateDumpPlaceComponent;
  let fixture: ComponentFixture<CreateDumpPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDumpPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDumpPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
