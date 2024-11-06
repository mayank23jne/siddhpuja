import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DharmikNewsPage } from './dharmik-news.page';

describe('DharmikNewsPage', () => {
  let component: DharmikNewsPage;
  let fixture: ComponentFixture<DharmikNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DharmikNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DharmikNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
