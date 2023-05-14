import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArmarioService {

  constructor(private http: HttpClient) { }

  public getAllSneakers(): Observable<any> {
    return this.http.get("https://sneakers-api.vercel.app/sneakers");
  };
  public getAllAdidas(): Observable<any> {
    return this.http.get("https://sneakers-api.vercel.app/sneakers/brand/Adidas");
  };
  public getAllNike(): Observable<any> {
    return this.http.get("https://sneakers-api.vercel.app/sneakers/brand/Nike");
  };
  public getAllBalenciaga(): Observable<any> {
    return this.http.get("https://sneakers-api.vercel.app/sneakers/brand/Balenciaga");
  };

  public getAllHoodies(): Observable<any> {
    return this.http.get("https://sneakers-api.vercel.app/hoodies");
  };
}
