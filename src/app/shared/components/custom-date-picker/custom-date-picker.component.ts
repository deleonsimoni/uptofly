import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'custom-date-picker',
    templateUrl: './custom-date-picker.component.html',
    styleUrls: ['./custom-date-picker.component.scss'],
})
export class CustomDatePickerComponent implements OnInit, OnChanges {

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

    ngOnInit(): void {
        this.field.valueChanges.subscribe(val => this.fieldOutput.emit(val));
    }

}
