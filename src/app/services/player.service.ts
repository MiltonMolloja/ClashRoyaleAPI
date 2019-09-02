import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl : string= "https://api.clashroyale.com/v1/players";


  //private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZmYjNiZWU0LTI2NDYtNDM5Zi05NDdkLTk3NjRhMjMzOTU1OSIsImlhdCI6MTU2NzE5NjcwMCwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.lF9WKJ8ZcOx2R9OPBiA8-NnSnT9S0x4zo-c_e6xICh5joJbwdnMriP8MK0O1WxI6p-Ty9p1BkGKs2fnEcgOSfA";
  private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAzM2YxZWU0LTZkODItNDFiNC04MDk0LTM2Y2U5MmNjZjZkZiIsImlhdCI6MTU2NzQ1NTU5Mywic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.BH0Yc3OykGbt03UVmDvpNq4bNjVLuB3J6bt3iypHeue0Q6yenjh5D76RPMcGJSWZDdCcbSZnI5z1EC0Je7AUiw";


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
