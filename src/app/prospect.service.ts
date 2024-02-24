import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Prospect } from "./prospect";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProspectService {
    private prospectUrl = "http://localhost:8080/prospects";
    httpOptions: any = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    constructor(private http: HttpClient) { }
    getProspects(): Observable<any> {
        return this.http.get<any>(this.prospectUrl);
    }
    postProspect(prospect: Prospect): Observable<any> {
        return this.http.post(this.prospectUrl, prospect, this.httpOptions);
    }
    putProspect(prospect: Prospect): Observable<any> {
        return this.http.put(this.prospectUrl+"/"+prospect.id, prospect, this.httpOptions);
    }
    getProspect(id: number) {
        return this.http.get<any>(this.prospectUrl+"/"+id);
    }
    deleteProspect(id: number) {
        return this.http.delete<any>(this.prospectUrl+"/"+id);
    }
}