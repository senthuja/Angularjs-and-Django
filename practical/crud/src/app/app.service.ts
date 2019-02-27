import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    baseurl ="http://127.0.0.1:8000";
    httpHeaders =new HttpHeaders({'Content-Type':'application/json'})

    constructor(private http: HttpClient){}
    getAllInventorys(): Observable<any>{
        return this.http.get(this.baseurl + '/inventorys/',
        { headers : this.httpHeaders });
    }
    getOneInventory(id): Observable<any>{
        return this.http.get(this.baseurl + '/inventorys/' + id + '/',
        { headers : this.httpHeaders });
    }
    updateInventory(inventory): Observable<any>{
        const body = {title:inventory.title, desc:inventory.desc, year:inventory.year};
        return this.http.put(this.baseurl + '/inventorys/' + inventory.id + '/'+ body,
        { headers : this.httpHeaders });
    }
    createInventory(inventory): Observable<any>{
        const body = {title:inventory.title, desc:inventory.desc, year:inventory.year};
        return this.http.post(this.baseurl + '/inventorys/' , body,
        { headers : this.httpHeaders });
    }
    deleteInventory(id): Observable<any>{
        return this.http.delete(this.baseurl + '/inventorys/' + id + '/',
        { headers : this.httpHeaders });
    }
}