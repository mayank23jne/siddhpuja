import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliPaymentPage } from './kundali-payment.page';

describe('KundaliPaymentPage', () => {
  let component: KundaliPaymentPage;
  let fixture: ComponentFixture<KundaliPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
