import { IApiService } from "./i-api-service.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseApiService<T> implements IApiService<T> {
    constructor(protected http: HttpClient, protected api: string) {

    }
    getById(id: number): Observable<T> {
        return this.http.get<T>(`${this.api}/${id}`);
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.api);
    }

    create(item: T): Observable<T> {
        return this.http.post<T>(
            this.api,
            item
        );
    }

    update(item: T): Observable<T> {
        return this.http.put<T>(
            this.api,
            item
        );
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(this.api + "/" + id);
    }
}