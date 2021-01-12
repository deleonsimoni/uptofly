import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CustomPipesModule } from '@pipes/custom-pipes.module';
import { CustomComponentsModule } from '@shared/components/custom-components.module';
import { InvestimentDetailsComponent } from './investiment-details.component';

const routes: Routes = [
    {
        path: '',
        component: InvestimentDetailsComponent
    }
]

@NgModule({
    declarations: [
        InvestimentDetailsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomComponentsModule,
        CustomPipesModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        InvestimentDetailsComponent
    ]
})
export class InvestimentDetailsModule { }
