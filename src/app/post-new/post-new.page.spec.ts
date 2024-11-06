import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostNewPage } from './post-new.page';

describe('PostNewPage', () => {
  let component: PostNewPage;
  let fixture: ComponentFixture<PostNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
