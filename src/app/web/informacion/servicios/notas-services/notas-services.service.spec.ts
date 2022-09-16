import { TestBed } from '@angular/core/testing';

import { NotasServicesService } from './notas-services.service';

describe('NotasServicesService', () => {
  let service: NotasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
