import { EndPoint } from './../../../../../../Endpoints';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserMenuModel } from './user-menu-model.model';
import { Injectable } from "@angular/core";
import { CommonService } from '../../../../../_services/common.service';


@Injectable()
export class UserMenuMasterService {

    constructor(private httpClient: HttpClient, private ep: EndPoint, private commonService: CommonService) {

    }

    getModuleList() {
        return this.httpClient.get(this.ep.getModuleMenuListEP);
    }

 

}