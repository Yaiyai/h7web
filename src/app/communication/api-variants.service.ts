import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiVariantsService {
    url = 'https://cms-back-h7.up.railway.app/api';
    constructor(private http: HttpClient) { }

    getVariants(): Observable<any> {
        return this.http.get(`${this.url}/posts`);
    }

    getVariantByCategory(variantCategory: string): Observable<any> {
        let lang = 'ES';
        return this.http.get(`${this.url}/posts/category/${variantCategory}?language=${lang}`);
    }

}