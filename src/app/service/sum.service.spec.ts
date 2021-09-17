import { TestBed } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  let service: SumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should return the sum of two number`, () => {
    const sum = service.sum(10, 20);
    expect(sum).toBe(30);
  });
  it(`should return filtered Data`, () => {
    const routes: any = service.filteraccordingtoServiceTime('D');
    expect(routes[0].service).toBe('D');
  });
});
