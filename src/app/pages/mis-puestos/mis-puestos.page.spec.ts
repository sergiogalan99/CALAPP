import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisPuestosPage } from './mis-puestos.page';

describe('MisPuestosPage', () => {
  let component: MisPuestosPage;
  let fixture: ComponentFixture<MisPuestosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPuestosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisPuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
