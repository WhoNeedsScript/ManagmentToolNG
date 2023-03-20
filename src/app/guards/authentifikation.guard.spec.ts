import { TestBed } from '@angular/core/testing';

import { AuthentifikationGuard } from './authentifikation.guard';

describe('AuthentifikationGuard', () => {
  let guard: AuthentifikationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentifikationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
