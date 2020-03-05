import { TestBed } from '@angular/core/testing';

import { CreateIncidenciaService } from './create-incidencia.service';

describe('CreateIncidenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateIncidenciaService = TestBed.get(CreateIncidenciaService);
    expect(service).toBeTruthy();
  });
});
