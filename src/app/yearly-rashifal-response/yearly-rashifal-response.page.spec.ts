import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YearlyRashifalResponsePage } from './yearly-rashifal-response.page';

describe('YearlyRashifalResponsePage', () => {
  let component: YearlyRashifalResponsePage;
  let fixture: ComponentFixture<YearlyRashifalResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyRashifalResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YearlyRashifalResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
