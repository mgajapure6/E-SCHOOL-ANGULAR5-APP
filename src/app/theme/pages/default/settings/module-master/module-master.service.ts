import { EndPoint } from './../../../../../../Endpoints';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModuleMenu } from './module-menu.model';
import { Injectable } from "@angular/core";
import { CommonService } from '../../../../../_services/common.service';


@Injectable()
export class ModuleMasterService {
    selectedModule: ModuleMenu;
    allModules: ModuleMenu[];

    constructor(private httpClient: HttpClient, private ep: EndPoint, private commonService: CommonService) {

    }

    getModuleList() {

        return this.httpClient.get(this.ep.getModuleMenuListEP);
        //new ModuleMenu(1, "String", false, 0, "String", "String", "String", "String", 0, "String", false, "18-06-2018", "18-06-2018", "string", null );
        // return [
        //     {
        //         id: 1,
        //         menuName: "String",
        //         hasSubmenu: false,
        //         topMenuId: 0,
        //         routerLink: "String",
        //         componentName: "String",
        //         modulePath: "String",
        //         errorPath: "String",
        //         notificationbBadgeNum: 0,
        //         iconClass: "String",
        //         isDashboard: false,
        //         createDate: "18-06-2018",
        //         lastUpdateDate: "18-06-2018",
        //         status: "string",
        //         sumMenus: null
        //     }
        // ] as ModuleMenu[];
    }

    getEntityList() {
        return this.httpClient.get(this.ep.getEntityListEP);
    }

    getModuleById(id: Number) {
        return this.httpClient.post(this.ep.getModuleMenuByIdEP, id);
    }

    saveUpdateDeleteModule(moduleMenu) {
        console.log("ModuleMenu:"+JSON.stringify(moduleMenu));
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient.post(this.ep.saveUpdateDeleteModuleEP, JSON.stringify(moduleMenu), httpOptions);
    }


}