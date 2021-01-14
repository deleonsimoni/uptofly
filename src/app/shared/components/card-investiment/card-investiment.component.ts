import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Investiment } from '@models/investiment';

@Component({
    selector: 'card-investiment',
    templateUrl: './card-investiment.component.html',
    styleUrls: ['./card-investiment.component.scss'],
})
export class CardInvestimentComponent implements OnInit, OnChanges {

    @Input() investiment: Investiment = null;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    public getColor(): string {
        if (this.investiment.upside2 > 0) {
            return 'content__data--positive';
        }

        return 'content__data--negative';
    }

}
