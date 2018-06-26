import { EndPoint } from './../../Endpoints';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {

    constructor(private http: HttpClient, private ep: EndPoint) {

    }

    getCodeList(param, sqlMstId) {
        var postParameters = {
            "param": param,
            "sqlMstId": sqlMstId
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.ep.getCodeListEP, postParameters, httpOptions);
    }


    getHelpList(param) {
        var postParameters = {
            "param": param
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.ep.getHelpListEP, postParameters, httpOptions);
    }
}