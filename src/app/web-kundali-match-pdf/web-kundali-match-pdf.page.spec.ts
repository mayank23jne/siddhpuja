import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebKundaliMatchPdfPage } from './web-kundali-match-pdf.page';

describe('WebKundaliMatchPdfPage', () => {
  let component: WebKundaliMatchPdfPage;
  let fixture: ComponentFixture<WebKundaliMatchPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebKundaliMatchPdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebKundaliMatchPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
