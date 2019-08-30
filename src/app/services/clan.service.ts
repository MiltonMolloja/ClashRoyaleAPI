import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  private baseUrl : string= "https://api.clashroyale.com/v1/clans";

  //private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVmMjFmOGI1LTQ1M2EtNDZjOC04NmU0LTNkYTM0ZDIwMmM1MSIsImlhdCI6MTU2NjMwNzc2MCwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.MCgZOqcknt2ecvqPE3D0-NjW2Z5HxU6_AVUiyGLnyghxWZa2aEYOsD5sGCpxIkrJtfXHAQx2XjKEpSJVaVPK1Q";
  private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZmYjNiZWU0LTI2NDYtNDM5Zi05NDdkLTk3NjRhMjMzOTU1OSIsImlhdCI6MTU2NzE5NjcwMCwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzQuNDEiXSwidHlwZSI6ImNsaWVudCJ9XX0.lF9WKJ8ZcOx2R9OPBiA8-NnSnT9S0x4zo-c_e6xICh5joJbwdnMriP8MK0O1WxI6p-Ty9p1BkGKs2fnEcgOSfA";
  //private authorization : string="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAxMjUyMTkxLTFlYTktNDUyMC1iNmY3LTI5ZjMwYTExZWRlNCIsImlhdCI6MTU2NjkyNDM2NSwic3ViIjoiZGV2ZWxvcGVyL2E4YTk3N2U4LTE0ZmEtNDdjNi00YmMxLTVmNTk2MjBlMmIwYiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNTIuMzYuMjM5Il0sInR5cGUiOiJjbGllbnQifV19.9aEZc-Vx5PWqngVteTIfPuDM7_pF43E-e7mo8_q7POcXvGeOtETHiHtQUPGDtbPjrWtkWOAZ0QNorQnMYjJUzA";


  constructor(private _http: HttpClient) { }

  public getAll(name?: string, locationId?:number, minMembers?:number, maxMembers?:number, minScore?:number, limit?:number, after?: string, before?:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };

    var consultUrl: string= "?";
    var moreOneParameter : boolean= false;

    if (name!=null) {
      consultUrl+="name="+name;
      moreOneParameter=true;
    }

    if (locationId!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="locationId="+locationId;
      moreOneParameter=true;
    }

    if (minMembers!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="minMembers="+minMembers;
      moreOneParameter=true;
    }

    if (maxMembers!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="maxMembers="+maxMembers;
      moreOneParameter=true;
    }
    if (minScore!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="minScore="+minScore;
      moreOneParameter=true;
    }
    if (limit!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="limit="+limit;
      moreOneParameter=true;
    }
    if (after!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="after="+after;
      moreOneParameter=true;
    }
    if (before!=null) {
      consultUrl+= moreOneParameter ? "&" : "";
      consultUrl+="before="+before;
      moreOneParameter=true;
    }
    consultUrl = consultUrl.replace("#", "%23");
    consultUrl = consultUrl.replace(" ", "%20");
    consultUrl = consultUrl.replace("}", "%7D");
    console.log(this.baseUrl + consultUrl);
    return this._http.get(this.baseUrl + consultUrl , httpOptions);
  }


  public getTag(clanTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    clanTag = clanTag.replace("#", "%23");
    return this._http.get(this.baseUrl + "/" + clanTag , httpOptions);
  }

  public getMembers(clanTag: string, limit?:number, after?: string, before?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };

    var consultUrl: string= "";
    var moreOneParameter : boolean= false;

    if (limit!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="limit="+limit;
      moreOneParameter=true;
    }
    if (after!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="after="+after;
      moreOneParameter=true;
    }
    if (before!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="before="+before;
      moreOneParameter=true;
    }
    clanTag = clanTag.replace("#", "%23");
    console.log(this.baseUrl + "/" + clanTag + "/members" + consultUrl);

    return this._http.get(this.baseUrl + "/" + clanTag + "/members" + consultUrl, httpOptions);
  }


  public getWarLog(clanTag: string, limit?:number, after?: string, before?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };

    var consultUrl: string= "";
    var moreOneParameter : boolean= false;

    if (limit!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="limit="+limit;
      moreOneParameter=true;
    }
    if (after!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="after="+after;
      moreOneParameter=true;
    }
    if (before!=null) {
      consultUrl+= moreOneParameter ? "&" : "?";
      consultUrl+="before="+before;
      moreOneParameter=true;
    }
    clanTag = clanTag.replace("#", "%23");
    console.log(this.baseUrl + "/" + clanTag + "/members" + consultUrl);

    return this._http.get(this.baseUrl + "/" + clanTag + "/warlog" + consultUrl, httpOptions);
  }

  public getCurrentWar(clanTag: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": this.authorization
      })
    };
    clanTag = clanTag.replace("#", "%23");
    //console.log(this.baseUrl + "/" + clanTag + "/currentwar" );
    return this._http.get(this.baseUrl + "/" + clanTag + "/currentwar", httpOptions);
  }
}
