import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  create(data:any) {
    console.log(data);    
    return this.http.post(baseUrl, data);
  }

  getAll() {
    return this.http.get(baseUrl);
  }

  delete(id: any) {    
    return this.http.delete(`${baseUrl}/${id}`);
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id:any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

}