import { Pipe, PipeTransform } from '@angular/core';
import { BrMaskDirective, BrMaskModel } from 'br-mask';

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {

    constructor(
        private readonly brMask: BrMaskDirective
    ) { }

    transform(value: number, ...args: string[]): string {
        const config: BrMaskModel = new BrMaskModel();

        config.money = true;
        config.thousand = '.';
        config.decimalCaracter = ',';
        config.decimal = 2;

        return this.brMask.writeValueMoney(value.toFixed(2), config);
    }

}
