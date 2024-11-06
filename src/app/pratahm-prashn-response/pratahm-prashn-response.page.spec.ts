import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PratahmPrashnResponsePage } from './pratahm-prashn-response.page';

describe('PratahmPrashnResponsePage', () => {
  let component: PratahmPrashnResponsePage;
  let fixture: ComponentFixture<PratahmPrashnResponsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratahmPrashnResponsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PratahmPrashnResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
