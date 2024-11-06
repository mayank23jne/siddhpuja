import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KundaliMatchPage } from './kundali-match.page';

describe('KundaliMatchPage', () => {
  let component: KundaliMatchPage;
  let fixture: ComponentFixture<KundaliMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliMatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KundaliMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
