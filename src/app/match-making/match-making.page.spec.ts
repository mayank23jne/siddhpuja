import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchMakingPage } from './match-making.page';

describe('MatchMakingPage', () => {
  let component: MatchMakingPage;
  let fixture: ComponentFixture<MatchMakingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchMakingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchMakingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
