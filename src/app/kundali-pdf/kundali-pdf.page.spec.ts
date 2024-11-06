import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliPdfPage } from './kundali-pdf.page';

describe('KundaliPdfPage', () => {
  let component: KundaliPdfPage;
  let fixture: ComponentFixture<KundaliPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
