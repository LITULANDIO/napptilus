import { TestBed } from '@angular/core/testing';

import { LoompaService } from './loompa.service';

describe('LoompaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoompaService = TestBed.get(LoompaService);
    expect(service).toBeTruthy();
  });
});
