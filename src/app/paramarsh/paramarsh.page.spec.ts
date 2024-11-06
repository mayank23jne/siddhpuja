import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParamarshPage } from './paramarsh.page';

describe('ParamarshPage', () => {
  let component: ParamarshPage;
  let fixture: ComponentFixture<ParamarshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamarshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParamarshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
