import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit, OnChanges {

    @Input() label: string = '';
    @Input() type: string = '';
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

    applyMask() {
        if (this.type == 'money') {
            return {
                money: true
            }
        }

        return {};
    }

}
