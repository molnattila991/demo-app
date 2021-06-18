import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FeatureBModuleState } from "projects/core/src/public-api";
import { Observable } from "rxjs";

@Injectable()
export class FeatureBStateQuery {//implements ITodoStateQuery {
    constructor(private store: Store<{ featureA: FeatureBModuleState }>) {
    }

    getA(): Observable<any> {
        return this.store.select(item => item.featureA.stateA);
    }
    getB(): Observable<any> {
        return this.store.select(item => item.featureA.stateB);
    }
}