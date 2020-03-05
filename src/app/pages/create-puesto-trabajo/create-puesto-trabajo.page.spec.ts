import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePuestoTrabajoPage } from './create-puesto-trabajo.page';

describe('CreatePuestoTrabajoPage', () => {
  let component: CreatePuestoTrabajoPage;
  let fixture: ComponentFixture<CreatePuestoTrabajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePuestoTrabajoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePuestoTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
