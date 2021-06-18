import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FeatureAModuleState } from "projects/core/src/public-api";
import { addItem, deleteItem } from "./feature-a.actions";

@Injectable()
export class FeatureAStateCommand {//implements ITodoStateCommand {
    constructor(private store: Store<{ todo: FeatureAModuleState }>) {
    }
    setA(): void {
        this.store.dispatch(addItem({ item: {} }));
    }

    setB(): void {
        this.store.dispatch(deleteItem({ item: 1}));
    }
}