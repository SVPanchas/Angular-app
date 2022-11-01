import { TestBed } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';

describe('ProductDetailGuard', () => {
  let guard: ProductGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductGuardService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});