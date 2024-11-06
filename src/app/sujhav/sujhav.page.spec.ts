import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SujhavPage } from './sujhav.page';

describe('SujhavPage', () => {
  let component: SujhavPage;
  let fixture: ComponentFixture<SujhavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SujhavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SujhavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
