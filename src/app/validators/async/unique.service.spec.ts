import { TestBed, inject } from '@angular/core/testing';

import { UniqueService } from './unique.service';

describe('UniqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniqueService]
    });
  });

  it('should be created', inject([UniqueService], (service: UniqueService) => {
    expect(service).toBeTruthy();
  }));
});
