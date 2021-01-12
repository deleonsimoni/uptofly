import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Investiment } from '@models/investiment';

@Component({
    selector: 'app-add-investiment',
    templateUrl: './add-investiment.component.html',
    styleUrls: ['./add-investiment.component.scss'],
})
export class AddInvestimentComponent implements OnInit {

    public investimentForm: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly navCtrl: NavController
    ) { }

    ngOnInit() {
        this.investimentForm = this.createForm();

        this.investimentForm.valueChanges.subscribe(console.log);
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

    public addInvestiment(): void {
        const investiment: Investiment = this.investimentForm.getRawValue();

        investiment.total1 = this.calculateTotal(Number(investiment.qtd), Number(investiment.quota));
        investiment.total3 = this.calculateTotal(Number(investiment.qtd), Number(investiment.currentQuota));

        console.log(investiment);
    }

    private calculateTotal(qtd: number, quota: number) {
        return qtd * quota;
    }

    public goBack(): void {
        this.navCtrl.pop();
    }
}
