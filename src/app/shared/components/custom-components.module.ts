import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardInvestimentComponent } from './card-investiment/card-investiment.component';
import { CustomPipesModule } from '@pipes/custom-pipes.module';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { BrMaskerModule } from 'br-mask';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { NgxMaterialModule } from 'src/app/utils/ngx-material.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        CardInvestimentComponent,
        CustomInputComponent,
        CustomDatePickerComponent,
        FabButtonComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomPipesModule,
        BrMaskerModule,
        ReactiveFormsModule,
        NgxMaterialModule
    ],
    exports: [
        CardInvestimentComponent,
        CustomInputComponent,
        CustomDatePickerComponent,
        FabButtonComponent,
        DetailsComponent
    ]
})
export class CustomComponentsModule { }
