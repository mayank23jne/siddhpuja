import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveDarshanVideoPage } from './live-darshan-video.page';

describe('LiveDarshanVideoPage', () => {
  let component: LiveDarshanVideoPage;
  let fixture: ComponentFixture<LiveDarshanVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDarshanVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveDarshanVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
