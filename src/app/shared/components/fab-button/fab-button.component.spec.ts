import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabButtonComponent } from './fab-button.component';

describe('FabButtonComponent', () => {
    let component: FabButtonComponent;
    let fixture: ComponentFixture<FabButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FabButtonComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(FabButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
