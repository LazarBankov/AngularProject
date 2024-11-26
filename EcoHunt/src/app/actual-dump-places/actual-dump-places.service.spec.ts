import { TestBed } from '@angular/core/testing';

import { ActualDumpPlacesService } from './actual-dump-places.service';

describe('ActualDumpPlacesService', () => {
  let service: ActualDumpPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualDumpPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
