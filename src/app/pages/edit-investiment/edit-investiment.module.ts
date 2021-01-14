import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditInvestimentComponent } from './edit-investiment.component';
import { IonicModule } from '@ionic/angular';
import { CustomPipesModule } from '@pipes/custom-pipes.module';
import { CustomComponentsModule } from '@shared/components/custom-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: EditInvestimentComponent
    }
]

@NgModule({
    declarations: [
        EditInvestimentComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        CustomComponentsModule,
        CustomPipesModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        EditInvestimentComponent
    ]
})
export class EditInvestimentModule { }
