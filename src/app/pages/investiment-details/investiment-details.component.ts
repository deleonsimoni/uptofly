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
    private documentKeys = {};

    constructor(
        private readonly navCtrl: NavController,
        private readonly router: Router
    ) {
        const investiment = this.router.getCurrentNavigation().extras.state;
        console.log(investiment);
        this.investiment = investiment.doc as Investiment;
        this.documentKeys['rev'] = investiment.value.rev;
        this.documentKeys['id'] = investiment.id;
    }

    ngOnInit() { }


    public goBack(): void {
        this.navCtrl.pop();
    }

    public getDate(date) {
        return moment(date).locale('pt_BR').format('L');
    }

    public edit() {
        this.navCtrl.navigateForward('/edit-investiment', { state: { investiment: this.investiment, keys: this.documentKeys } });
    }
}
