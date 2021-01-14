import { Injectable } from '@angular/core';
import { Investiment } from '@models/investiment';
import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StorageAdapter {

    private pdb;

    constructor() { }

    public ready() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this.pdb = new PouchDB('investiments.db', { adapter: 'cordova-sqlite' });
    }

    public create(investiment: Investiment) {
        return from(this.pdb.post(investiment));
    }

    public retrieve() {
        return from(this.pdb.allDocs({ include_docs: true }))
            .pipe(
                map((docs: any) => {
                    // docs.rows.map(row => {
                    //     this.pdb.remove(row.id, row.value.rev)
                    // })
                    return docs.rows;
                }),
                catchError(error => {
                    return error;
                })
            )
    }

    public update(keys: any, investiment: Investiment) {
        investiment['_rev'] = keys.rev;
        investiment['_id'] = keys.id;
        console.log(investiment);

        return from(this.pdb.put(investiment));
    }

    public delete(investiment: Investiment) {
        return from(this.pdb.delete(investiment));
    }

}