import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl : string= "https://api.clashroyale.com/v1/players";

  //private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmMjFmOGI1LTQ1M2EtNDZjOC04NmU0LTNkYTM0ZDIwMmM1MSIsImlhdCI6MTU2NjMwNzc2MCwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.MCgZOqcknt2ecvqPE3D0-NjW2Z5HxU6_AVUiyGLnyghxWZa2aEYOsD5sGCpxIkrJtfXHAQx2XjKEpSJVaVPK1Q";
  private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAxMjUyMTkxLTFlYTktNDUyMC1iNmY3LTI5ZjMwYTExZWRlNCIsImlhdCI6MTU2NjkyNDM2NSwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzYuMjM5Il0sInR5cGUiOiJjbGllbnQifV19.9aEZc-Vx5PWqngVteTIfPuDM7_pF43E-e7mo8_q7POcXvGeOtETHiHtQUPGDtbPjrWtkWOAZ0QNorQnMYjJUzA";


  constructor(private _http: HttpClient) { }

  public getTag(playerTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    playerTag = playerTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + playerTag , httpOptions);
  }

  public getUpComingChests(playerTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    playerTag = playerTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + playerTag + "/upcomingchests", httpOptions);
  }


  public getBattleLog(playerTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    playerTag = playerTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + playerTag + "/battlelog", httpOptions);
  }

}
