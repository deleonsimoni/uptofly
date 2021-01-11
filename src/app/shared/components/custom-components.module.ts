import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardInvestimentComponent } from './card-investiment/card-investiment.component';
import { CustomPipesModule } from '@pipes/custom-pipes.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
    declarations: [
        CardInvestimentComponent,
        CustomInputComponent,
        CustomDatePickerComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomPipesModule,
        BrMaskerModule,
        ReactiveFormsModule
    ],
    exports: [
        CardInvestimentComponent,
        CustomInputComponent,
        CustomDatePickerComponent
    ]
})
export class CustomComponentsModule { }
