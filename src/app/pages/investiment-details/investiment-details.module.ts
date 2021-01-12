import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
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
        RouterModule.forChild(routes)
    ],
    exports: [
        InvestimentDetailsComponent
    ]
})
export class InvestimentDetailsModule { }
