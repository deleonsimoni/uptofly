import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyInvestimentsComponent } from './my-investiments.component';
import { CustomComponentsModule } from '@shared/components/custom-components.module';
import { NgxMaterialModule } from 'src/app/utils/ngx-material.module';


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
        NgxMaterialModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MyInvestimentsComponent,
        RouterModule
    ]
})
export class MyInvestimentsModule { }
