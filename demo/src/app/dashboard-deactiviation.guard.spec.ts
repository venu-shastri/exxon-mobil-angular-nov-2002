import { TestBed } from '@angular/core/testing';

import { DashboardDeactiviationGuard } from './dashboard-deactiviation.guard';

describe('DashboardDeactiviationGuard', () => {
  let guard: DashboardDeactiviationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardDeactiviationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
