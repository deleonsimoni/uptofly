import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'my-investiments',
        pathMatch: 'full'
    },
    {
        path: 'my-investiments',
        loadChildren: () => import('@pages/my-investiments/my-investiments.module').then(m => m.MyInvestimentsModule)
    },
    {
        path: 'add-investiment',
        loadChildren: () => import('@pages/add-investiment/add-investiment.module').then(m => m.AddInvestimentModule)
    },
    {
        path: 'investiment-details',
        loadChildren: () => import('@pages/investiment-details/investiment-details.module').then(m => m.InvestimentDetailsModule)
    },
    {
        path: 'edit-investiment',
        loadChildren: () => import('@pages/edit-investiment/edit-investiment.module').then(m => m.EditInvestimentModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
