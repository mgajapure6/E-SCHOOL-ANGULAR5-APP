import { EndPoint } from './../../Endpoints';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {

    constructor(private http: HttpClient, private ep: EndPoint) {

    }

    getCodeList(param, sqlMstId) {
        var postParam = {
            "param": param,
            "sqlMstId": sqlMstId
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.ep.getCodeListEP, { "param": param, "sqlMstId": sqlMstId }, httpOptions);
    }


    getHelpList(param) {

    }
}