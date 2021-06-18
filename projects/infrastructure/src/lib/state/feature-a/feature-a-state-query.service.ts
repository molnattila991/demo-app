import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FeatureAModuleState } from "projects/core/src/public-api";
import { Observable } from "rxjs";

@Injectable()
export class FeatureAStateQuery {//implements ITodoStateQuery {
    constructor(private store: Store<{ featureA: FeatureAModuleState }>) {
    }

    getA(): Observable<any> {
        return this.store.select(item => item.featureA.stateA);
    }
    getB(): Observable<any> {
        return this.store.select(item => item.featureA.stateB);
    }
}