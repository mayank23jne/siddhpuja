import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainMenuNewPage } from './main-menu-new.page';

describe('MainMenuNewPage', () => {
  let component: MainMenuNewPage;
  let fixture: ComponentFixture<MainMenuNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
