import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebKundaliPage } from './web-kundali.page';

describe('WebKundaliPage', () => {
  let component: WebKundaliPage;
  let fixture: ComponentFixture<WebKundaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebKundaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebKundaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
