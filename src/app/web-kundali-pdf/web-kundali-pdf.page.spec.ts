import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebKundaliPdfPage } from './web-kundali-pdf.page';

describe('WebKundaliPdfPage', () => {
  let component: WebKundaliPdfPage;
  let fixture: ComponentFixture<WebKundaliPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebKundaliPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebKundaliPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
