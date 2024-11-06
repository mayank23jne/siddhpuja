import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubMenuPagePage } from './sub-menu-page.page';

describe('SubMenuPagePage', () => {
  let component: SubMenuPagePage;
  let fixture: ComponentFixture<SubMenuPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenuPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
