import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookNowPage } from './book-now.page';

describe('BookNowPage', () => {
  let component: BookNowPage;
  let fixture: ComponentFixture<BookNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
