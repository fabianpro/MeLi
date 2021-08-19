import { TestBed } from '@angular/core/testing';

import { ProductUsecaseService } from './product-usecase.service';

describe('ProductUsecaseService', () => {
  let service: ProductUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
