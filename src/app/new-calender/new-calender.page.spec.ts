import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCalenderPage } from './new-calender.page';

describe('NewCalenderPage', () => {
  let component: NewCalenderPage;
  let fixture: ComponentFixture<NewCalenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCalenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
