import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string = "https://api.spaceXdata.com/v3/launches?limit=100"
  constructor(private http: HttpClient) { }

  public get(){
    return this.http.get<any[]>(this.API_URL);
  }
}
