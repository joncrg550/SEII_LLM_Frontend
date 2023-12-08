import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { disableRouteGuard } from './disable-route.guard';

describe('disableRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => disableRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
