import { TestBed } from '@angular/core/testing';

import { FirebaseConectionService } from './firebase-conection.service';

describe('FirebaseConectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseConectionService = TestBed.get(FirebaseConectionService);
    expect(service).toBeTruthy();
  });
});
