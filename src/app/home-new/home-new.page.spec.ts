import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeNewPage } from './home-new.page';

describe('HomeNewPage', () => {
  let component: HomeNewPage;
  let fixture: ComponentFixture<HomeNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
