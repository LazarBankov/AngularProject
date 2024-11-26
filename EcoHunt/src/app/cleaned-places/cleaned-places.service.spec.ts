import { TestBed } from '@angular/core/testing';

import { CleanedPlacesService } from './cleaned-places.service';

describe('CleanedPlacesService', () => {
  let service: CleanedPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanedPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
