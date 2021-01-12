import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Investiment } from '@models/investiment';
import * as moment from 'moment';

@Component({
    selector: 'app-investiment-details',
    templateUrl: './investiment-details.component.html',
    styleUrls: ['./investiment-details.component.scss'],
})
export class InvestimentDetailsComponent implements OnInit {

    public investiment: Investiment;

    constructor(
        private readonly navCtrl: NavController,
        private readonly router: Router
    ) {
        this.investiment = this.router.getCurrentNavigation().extras.state as Investiment;
    }

    ngOnInit() { }

    public goBack(): void {
        this.navCtrl.pop();
    }

    public getDate(date) {
        return moment(date).locale('pt_BR').format('L');
    }

    public edit() {

    }
}
