import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {

    @Input() label: string = '';
    @Input() data: any = '';

    constructor() { }
}
