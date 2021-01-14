import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestimentComponent } from './add-investiment.component';
import { CustomComponentsModule } from '@shared/components/custom-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        CustomComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule,
        AddInvestimentComponent
    ]
})
export class AddInvestimentModule { }
