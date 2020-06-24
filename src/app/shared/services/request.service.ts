import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
    constructor(
        private client: HttpClient
    ) {}

    get<T>(url: string): Observable<T> {
        return this.client.get<T>(url);
    }
}