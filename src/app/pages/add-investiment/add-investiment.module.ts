import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestimentComponent } from './add-investiment.component';

const routes: Routes = [
    {
        path: '',
        component: AddInvestimentComponent
    }
]

@NgModule({
    declarations: [
        AddInvestimentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        AddInvestimentComponent
    ]
})
export class AddInvestimentModule { }
