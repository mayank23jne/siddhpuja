import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RashiPage } from './rashi.page';

describe('RashiPage', () => {
  let component: RashiPage;
  let fixture: ComponentFixture<RashiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RashiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RashiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
