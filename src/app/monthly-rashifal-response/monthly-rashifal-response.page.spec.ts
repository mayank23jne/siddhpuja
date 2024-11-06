import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthlyRashifalResponsePage } from './monthly-rashifal-response.page';

describe('MonthlyRashifalResponsePage', () => {
  let component: MonthlyRashifalResponsePage;
  let fixture: ComponentFixture<MonthlyRashifalResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRashifalResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyRashifalResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
