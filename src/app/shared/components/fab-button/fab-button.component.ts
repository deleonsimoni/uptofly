import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fab-button',
    templateUrl: 'fab-button.component.html'
})

export class FabButtonComponent implements OnInit {

    @Input() boundary: string = '';
    @Output() navigateTo: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    public navigate(pageTitle: string) {
        this.navigateTo.emit(pageTitle);
    }
}