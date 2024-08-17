import { TestBed } from '@angular/core/testing';

import { ValorxServiceService } from './valorx-service.service';

describe('ValorxServiceService', () => {
  let service: ValorxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
