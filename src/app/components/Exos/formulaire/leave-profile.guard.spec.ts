import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { leaveProfileGuard } from './leave-profile.guard';

describe('leaveProfileGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => leaveProfileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
