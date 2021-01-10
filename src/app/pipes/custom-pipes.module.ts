import { NgModule } from '@angular/core';
import { MoneyPipe } from './money/money.pipe';
import { BrMaskDirective, BrMaskerModule } from 'br-mask';

@NgModule({
    declarations: [
        MoneyPipe
    ],
    imports: [
        BrMaskerModule
    ],
    exports: [
        MoneyPipe
    ],
    providers: [
        BrMaskDirective
    ]
})
export class CustomPipesModule { }
