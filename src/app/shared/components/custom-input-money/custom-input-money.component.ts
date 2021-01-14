import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoneyPipe } from '@pipes/money/money.pipe';

@Component({
    selector: 'custom-input-money',
    templateUrl: './custom-input-money.component.html',
    styleUrls: ['./custom-input-money.component.scss'],
})
export class CustomInputMoneyComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() initialValue: any = '';

    @Output() fieldOutput: EventEmitter<any> = new EventEmitter();

    public field = new FormControl(null);

    constructor(
        private readonly moneyPipe: MoneyPipe
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes.initialValue?.currentValue);
        if (changes.initialValue?.currentValue) {
            this.field.setValue(this.moneyPipe.transform(changes.initialValue.currentValue));
        }
    }

    ngOnInit() {
        this.field.valueChanges.subscribe(val => this.fieldOutput.emit(val))
    }

}
