import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalImagenGrandePage } from './modal-imagen-grande.page';

describe('ModalImagenGrandePage', () => {
  let component: ModalImagenGrandePage;
  let fixture: ComponentFixture<ModalImagenGrandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImagenGrandePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalImagenGrandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
