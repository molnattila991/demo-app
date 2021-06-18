import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppUiState, IRootStateCommand } from "projects/core/src/public-api";
import { closeSideNav, openSideNav } from "./ui.actions";

@Injectable()
export class RootStateCommand implements IRootStateCommand {
    constructor(private store: Store<{ ui: AppUiState }>) {
    }
    openSidebar(): void {
        this.store.dispatch(openSideNav());
    }
    closeSidebar(): void {
        this.store.dispatch(closeSideNav());
    }


}