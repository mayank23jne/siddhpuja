import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VratPage } from './vrat.page';

describe('VratPage', () => {
  let component: VratPage;
  let fixture: ComponentFixture<VratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
