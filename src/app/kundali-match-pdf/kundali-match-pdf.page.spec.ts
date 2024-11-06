import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliMatchPdfPage } from './kundali-match-pdf.page';

describe('KundaliMatchPdfPage', () => {
  let component: KundaliMatchPdfPage;
  let fixture: ComponentFixture<KundaliMatchPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliMatchPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliMatchPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
