import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FestivalDetailPage } from './festival-detail.page';

describe('FestivalDetailPage', () => {
  let component: FestivalDetailPage;
  let fixture: ComponentFixture<FestivalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
