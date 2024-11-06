import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnKundaliPage } from './own-kundali.page';

describe('OwnKundaliPage', () => {
  let component: OwnKundaliPage;
  let fixture: ComponentFixture<OwnKundaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnKundaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnKundaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
