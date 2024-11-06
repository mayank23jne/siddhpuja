import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebKundaliMatchPage } from './web-kundali-match.page';

describe('WebKundaliMatchPage', () => {
  let component: WebKundaliMatchPage;
  let fixture: ComponentFixture<WebKundaliMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebKundaliMatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebKundaliMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
