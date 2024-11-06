import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RasifalResponsePage } from './rasifal-response.page';

describe('RasifalResponsePage', () => {
  let component: RasifalResponsePage;
  let fixture: ComponentFixture<RasifalResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasifalResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RasifalResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
