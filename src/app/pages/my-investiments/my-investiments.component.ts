import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Investiment } from '@models/investiment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StorageAdapter } from 'src/app/adapters/storage.service';

@Component({
    selector: 'app-my-investiments',
    templateUrl: './my-investiments.component.html',
    styleUrls: ['./my-investiments.component.scss'],
})
export class MyInvestimentsComponent {

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

    public investiments$: Observable<Investiment[]>;

    constructor(
        private navCtrl: NavController,
        private storage: StorageAdapter
    ) { }

    ionViewWillEnter() {
        // this.storage.retrieve().subscribe();
        this.investiments$ = this.storage.retrieve()
            .pipe(take(1));
    }

    public navigate(event) {
        this.navCtrl.navigateForward(`/${event}`);
    }

    public investimentDetails(investiment) {
        this.navCtrl.navigateForward('/investiment-details', { state: investiment });
    }
}
