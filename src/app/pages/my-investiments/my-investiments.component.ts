import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Investiment } from '@models/investiment';

@Component({
    selector: 'app-my-investiments',
    templateUrl: './my-investiments.component.html',
    styleUrls: ['./my-investiments.component.scss'],
})
export class MyInvestimentsComponent implements OnInit {

    public investiments: Investiment[] = [
        {
            operation: "C",
            ticket: "AALR3",
            date: "2020-06-26T00:00:00-03:00",
            qtd: "500",
            quota: 10.47,
            total1: 5235.00,
            averageQuota: 0,
            total2: 0,
            segment: "medicina diagnóstico",
            currentQuota: 11.29,
            targetQuota: 17,
            upside1: 60,
            upside2: 7.83,
            total3: 5645.00,
            balance: 410.00
        },
        {
            operation: "C",
            ticket: "AALR3",
            date: "2020-06-26T00:00:00-03:00",
            qtd: "500",
            quota: 10.47,
            total1: 5235.00,
            averageQuota: 0,
            total2: 0,
            segment: "medicina diagnóstico",
            currentQuota: 11.29,
            targetQuota: 17,
            upside1: 60,
            upside2: -7.83,
            total3: 5645.00,
            balance: 410.00
        }
    ]

    constructor(
        private navCtrl: NavController
    ) { }

    ngOnInit() { }

    public navigate(event) {
        this.navCtrl.navigateForward(`/${event}`);
    }

    public investimentDetails(investiment) {
        this.navCtrl.navigateForward('/investiment-details', { state: investiment });
    }
}
