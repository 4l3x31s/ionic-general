import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FingerAuthPage } from './finger-auth.page';

describe('FingerAuthPage', () => {
  let component: FingerAuthPage;
  let fixture: ComponentFixture<FingerAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FingerAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
