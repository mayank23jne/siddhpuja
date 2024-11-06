import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliPrintPage } from './kundali-print.page';

describe('KundaliPrintPage', () => {
  let component: KundaliPrintPage;
  let fixture: ComponentFixture<KundaliPrintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliPrintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
