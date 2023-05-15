import { TestBed } from '@angular/core/testing';

import { CreatemoduleService } from './createmodule.service';

describe('CreatemoduleService', () => {
  let service: CreatemoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatemoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
