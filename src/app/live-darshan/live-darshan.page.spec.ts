import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveDarshanPage } from './live-darshan.page';

describe('LiveDarshanPage', () => {
  let component: LiveDarshanPage;
  let fixture: ComponentFixture<LiveDarshanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDarshanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveDarshanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
