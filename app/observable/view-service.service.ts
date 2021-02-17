import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../model/User";

const baseUrl = "http://localhost:8080/api/tutorials";

@Injectable({
  providedIn: "root",
})
export class ViewServiceService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
