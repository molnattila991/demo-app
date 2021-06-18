import { Observable } from "rxjs";

export interface IApiService<T>{
    getAll(): Observable<T[]>;
    getById(id: number): Observable<T>;
    create(item: T): Observable<T>;
    update(item: T): Observable<T>;
    delete(id: number): Observable<void>
}