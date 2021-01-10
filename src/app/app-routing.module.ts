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
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
