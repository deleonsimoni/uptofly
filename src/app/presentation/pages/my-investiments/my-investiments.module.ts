import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInvestimentsComponent } from './my-investiments.component';
import { RouterModule, Routes } from '@angular/router';

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
        RouterModule.forChild(routes)
    ],
    exports: [
        MyInvestimentsComponent,
        RouterModule
    ]
})
export class MyInvestimentsModule { }
