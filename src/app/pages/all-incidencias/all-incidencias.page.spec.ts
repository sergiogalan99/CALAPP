import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllIncidenciasPage } from './all-incidencias.page';

describe('AllIncidenciasPage', () => {
  let component: AllIncidenciasPage;
  let fixture: ComponentFixture<AllIncidenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIncidenciasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllIncidenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
