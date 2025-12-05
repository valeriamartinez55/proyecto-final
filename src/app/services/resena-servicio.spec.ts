import { TestBed } from '@angular/core/testing';

import { ResenaServicio } from './resena-servicio';

describe('ResenaServicio', () => {
  let service: ResenaServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenaServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
