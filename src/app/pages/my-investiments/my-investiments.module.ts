import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyInvestimentsComponent } from './my-investiments.component';
import { CustomComponentsModule } from '@shared/components/custom-components.module';


const routes: Routes = [
    {
        path: '',
        component: MyInvestimentsComponent
    }
]

@NgModule({
    declarations: [
        MyInvestimentsComponent
    ],
    imports: [
        CommonModule,
        CustomComponentsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MyInvestimentsComponent,
        RouterModule
    ]
})
export class MyInvestimentsModule { }
