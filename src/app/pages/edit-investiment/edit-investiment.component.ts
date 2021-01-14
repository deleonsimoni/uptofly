import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Investiment } from '@models/investiment';
import { StorageAdapter } from 'src/app/adapters/storage.service';

@Component({
    selector: 'app-edit-investiment',
    templateUrl: './edit-investiment.component.html',
    styleUrls: ['./edit-investiment.component.scss'],
})
export class EditInvestimentComponent implements OnInit {

    public investimentForm: FormGroup;
    private investimentParams: Investiment;
    private documentKeys = {};

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly navCtrl: NavController,
        private readonly router: Router,
        private readonly storageAdapter: StorageAdapter,
        private alertCtrl: AlertController
    ) {
        const { keys, investiment } = this.router.getCurrentNavigation().extras.state;
        this.investimentParams = investiment;
        this.documentKeys = keys;
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
            operation: [null, Validators.required],
            ticket: [null, Validators.required],
            date: [null, Validators.required],
            qtd: [null, Validators.required],
            quota: [null, Validators.required],
            total1: [null],
            averageQuota: [null],
            total2: [null],
            segment: [null],
            currentQuota: [null, Validators.required],
            targetQuota: [null, Validators.required],
            upside1: [null, Validators.required],
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

        if (this.investimentForm.invalid) {
            this.showAlert('Atenção', 'Preencha os obrigatórios!');
            return;
        }

        investiment.total1 = this.calculateTotal(Number(investiment.qtd), this.formatNumber(investiment.quota));
        investiment.total3 = this.calculateTotal(Number(investiment.qtd), this.formatNumber(investiment.currentQuota));
        investiment.upside2 = this.calculateUpside2(investiment.total3, investiment.total1);
        investiment.balance = investiment.total3 - investiment.total1;

        this.storageAdapter.update(this.documentKeys, investiment)
            .subscribe(_ => {
                this.showAlert('', 'Seu investimento foi atualizado com sucesso!', true)
            });
    }

    private formatNumber(param: any): any {
        return Number(param.replace(/[.]/g, '').replace(/[,]/g, '.')).toFixed(2);
    }

    private calculateUpside2(total3, total1) {
        return Math.round((((total3 / total1) - 1) * 100) * 100) / 100;
    }

    private calculateTotal(qtd: number, quota: number) {
        return qtd * quota;
    }

    public goBack(): void {
        this.navCtrl.pop();
    }

    private async showAlert(title: string, message: string, success: boolean = false) {
        const alert = await this.alertCtrl.create({
            header: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        if (success) {
                            this.navCtrl.navigateRoot('/my-investiments');
                        }
                    }
                }
            ]
        });

        await alert.present();
    }
}
