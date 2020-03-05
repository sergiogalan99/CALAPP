import { TestBed } from '@angular/core/testing';

import { PuestoTrabajoService } from './puesto-trabajo.service';

describe('CreatePuestoTrabajoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuestoTrabajoService = TestBed.get(PuestoTrabajoService);
    expect(service).toBeTruthy();
  });
});
