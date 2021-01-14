import { Pipe, PipeTransform } from '@angular/core';
import { BrMaskDirective, BrMaskModel } from 'br-mask';

@Pipe({
    name: 'money'
})
export class MoneyPipe implements PipeTransform {

    constructor(
        private readonly brMask: BrMaskDirective
    ) { }

    transform(value: any, ...args: string[]): string {
        const config: BrMaskModel = new BrMaskModel();

        config.money = true;
        config.thousand = '.';
        config.decimalCaracter = ',';
        config.decimal = 2;

        return this.brMask.writeValueMoney(this.formatNumber(value), config);
    }

    private formatNumber(param: any): any {
        if (typeof (param) == 'string') {
            return Number(param.replace(/[.]/g, '').replace(/[,]/g, '.')).toFixed(2);
        }

        return param.toFixed(2);
    }

}
