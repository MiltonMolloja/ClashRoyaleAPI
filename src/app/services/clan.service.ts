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
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmMjFmOGI1LTQ1M2EtNDZjOC04NmU0LTNkYTM0ZDIwMmM1MSIsImlhdCI6MTU2NjMwNzc2MCwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.MCgZOqcknt2ecvqPE3D0-NjW2Z5HxU6_AVUiyGLnyghxWZa2aEYOsD5sGCpxIkrJtfXHAQx2XjKEpSJVaVPK1Q"
      })
    };
    return this._http.get(this.baseUrl + tag, httpOptions);
  }

}
