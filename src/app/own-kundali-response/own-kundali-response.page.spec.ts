import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnKundaliResponsePage } from './own-kundali-response.page';

describe('OwnKundaliResponsePage', () => {
  let component: OwnKundaliResponsePage;
  let fixture: ComponentFixture<OwnKundaliResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnKundaliResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnKundaliResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
