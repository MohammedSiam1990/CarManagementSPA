/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarCardServiceService } from './carCardService.service';

describe('Service: CarCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarCardServiceService]
    });
  });

  it('should ...', inject([CarCardServiceService], (service: CarCardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
