import { Observable } from "rxjs";

export interface IRootStateQuery {
    getSidebarState(): Observable<boolean>;
}