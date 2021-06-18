import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FeatureBModuleState } from "projects/core/src/public-api";
import { addItem, deleteItem } from "./feature-b.actions";

@Injectable()
export class FeatureBStateCommand {//implements ITodoStateCommand {
    constructor(private store: Store<{ todo: FeatureBModuleState }>) {
    }
    setA(): void {
        this.store.dispatch(addItem({ item: {} }));
    }

    setB(): void {
        this.store.dispatch(deleteItem({ item: 1}));
    }
}