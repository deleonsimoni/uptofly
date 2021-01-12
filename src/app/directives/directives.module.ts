import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyDirective } from './money/money.directive';

@NgModule({
    declarations: [
        MoneyDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoneyDirective
    ]
})
export class DirectivesModule { }
