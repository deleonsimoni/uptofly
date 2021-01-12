import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

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

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.initialValue) {
            this.field.setValue(changes.initialValue.currentValue);
        }
    }

    ngOnInit() {
        this.field.valueChanges.subscribe(val => this.fieldOutput.emit(val))
    }

}
