import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HindiCalendarPage } from './hindi-calendar.page';

describe('HindiCalendarPage', () => {
  let component: HindiCalendarPage;
  let fixture: ComponentFixture<HindiCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HindiCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
