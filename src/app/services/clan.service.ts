import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  private baseUrl = "https://api.clashroyale.com/v1/clans?name=";

  constructor(private _http: HttpClient) { }

  public get(tag: string): Observable<any> {
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.baseUrl + tag, httpOptions);
  }

}
