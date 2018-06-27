import { EndPoint } from './../../../../../../Endpoints';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserMenuModel } from './user-menu-model.model';
import { Injectable } from "@angular/core";
import { CommonService } from '../../../../../_services/common.service';


@Injectable()
export class UserMenuMasterService {

    constructor(private httpClient: HttpClient, private ep: EndPoint, private commonService: CommonService) {

    }

    getUserListByHelp() {
        var helpCode = "ADUSERHELP~ and u.op_branch_mst_id = 11";
        return this.commonService.getHelpList(helpCode);
    }

    getUserBranchList(userId) {
        var postParameters = {
            "userId": userId
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient.post(this.ep.getUserBranchListEP, postParameters, httpOptions);
    }



}