import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardInvestimentComponent } from './card-investiment.component';

describe('CardInvestimentComponent', () => {
  let component: CardInvestimentComponent;
  let fixture: ComponentFixture<CardInvestimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInvestimentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardInvestimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
