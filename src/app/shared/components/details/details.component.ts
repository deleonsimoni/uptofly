import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

    @Input() label: string = '';
    @Input() data: any = '';

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
    }

}
