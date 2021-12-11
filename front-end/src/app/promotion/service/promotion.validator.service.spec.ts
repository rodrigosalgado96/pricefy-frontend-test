/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Promotion.validatorService } from './promotion.validator.service';

describe('Service: Promotion.validator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Promotion.validatorService]
    });
  });

  it('should ...', inject([Promotion.validatorService], (service: Promotion.validatorService) => {
    expect(service).toBeTruthy();
  }));
});
