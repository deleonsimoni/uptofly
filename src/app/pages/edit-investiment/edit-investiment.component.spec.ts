import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInvestimentComponent } from './edit-investiment.component';

describe('EditInvestimentComponent', () => {
  let component: EditInvestimentComponent;
  let fixture: ComponentFixture<EditInvestimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvestimentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInvestimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
