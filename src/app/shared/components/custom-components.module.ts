import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardInvestimentComponent } from './card-investiment/card-investiment.component';
import { CustomPipesModule } from '@pipes/custom-pipes.module';

@NgModule({
    declarations: [
        CardInvestimentComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomPipesModule
    ],
    exports: [
        CardInvestimentComponent
    ]
})
export class CustomComponentsModule { }
