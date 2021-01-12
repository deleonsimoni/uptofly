import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Investiment } from '@models/investiment';

@Component({
    selector: 'app-edit-investiment',
    templateUrl: './edit-investiment.component.html',
    styleUrls: ['./edit-investiment.component.scss'],
})
export class EditInvestimentComponent implements OnInit {

    public investimentForm: FormGroup;
    private investimentParams: Investiment;
    public type: string = 'money';

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly navCtrl: NavController,
        private readonly router: Router
    ) {
        this.investimentParams = this.router.getCurrentNavigation().extras.state as Investiment;
    }

    ngOnInit() {
        this.investimentForm = this.createForm();

        for (const key in this.investimentParams) {
            if (this.investimentParams.hasOwnProperty(key)) {
                this.fillForm(key, this.investimentParams[key]);
            }
        }
    }

    public createForm(): FormGroup {
        return this.formBuilder.group({
            operation: [null],
            ticket: [null],
            date: [null],
            qtd: [null],
            quota: [null],
            total1: [null],
            averageQuota: [null],
            total2: [null],
            segment: [null],
            currentQuota: [null],
            targetQuota: [null],
            upside1: [null],
            upside2: [null],
            total3: [null],
            balance: [null]
        })
    }

    public fillForm(fieldName: string, value: any): void {
        this.investimentForm.patchValue({
            [fieldName]: value
        });
    }

    public editInvestiment(): void {
        const investiment: Investiment = this.investimentForm.getRawValue();


    }

    private calculateTotal(qtd: number, quota: number) {
        return qtd * quota;
    }

    public goBack(): void {
        this.navCtrl.pop();
    }
}
