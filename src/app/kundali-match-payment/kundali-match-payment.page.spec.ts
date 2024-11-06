import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliMatchPaymentPage } from './kundali-match-payment.page';

describe('KundaliMatchPaymentPage', () => {
  let component: KundaliMatchPaymentPage;
  let fixture: ComponentFixture<KundaliMatchPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliMatchPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliMatchPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
