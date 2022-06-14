import { TestBed } from '@angular/core/testing';

import { DaneSipsaService } from './dane-sipsa.service';

describe('DaneSipsaService', () => {
  let service: DaneSipsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaneSipsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
