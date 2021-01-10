import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardInvestimentComponent } from './card-investiment/card-investiment.component';
import { CustomPipesModule } from '@pipes/custom-pipes.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CardInvestimentComponent,
        CustomInputComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomPipesModule,
        ReactiveFormsModule
    ],
    exports: [
        CardInvestimentComponent,
        CustomInputComponent
    ]
})
export class CustomComponentsModule { }
