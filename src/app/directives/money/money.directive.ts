import { Directive, ElementRef, HostListener } from '@angular/core';
import { MoneyPipe } from '@pipes/money/money.pipe';
import { BrMaskDirective, BrMaskModel } from 'br-mask';

@Directive({
    selector: '[appMoney]'
})
export class MoneyDirective {
    private config: BrMaskModel = new BrMaskModel();

    @HostListener('keyup') onKeyUp() {
        const value = Number(this.el.nativeElement.value);
        console.log(value);

        this.config.money = true;
        this.config.thousand = '.';
        this.config.decimalCaracter = ',';
        this.config.decimal = 2;

        console.log(this.brMask.writeValueMoney(value.toFixed(2), this.config));
    }

    constructor(
        private readonly el: ElementRef,
        private readonly brMask: BrMaskDirective
    ) { }

}
