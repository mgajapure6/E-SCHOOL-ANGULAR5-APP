import { EndPoint } from './../../../../../../Endpoints';
import { HttpClient } from '@angular/common/http';
import { ModuleMenu } from './module-menu.model';
import { Injectable } from "@angular/core";


@Injectable()
export class ModuleMasterService {
    selectedModule: ModuleMenu;
    allModules: ModuleMenu[];

    private endPoint: EndPoint;

    constructor(private httpClient: HttpClient) {

    }

    getModuleList() {
        new ModuleMenu(1, "String", false, 0, "String", "String", "String", "String", 0, "String", false, "18-06-2018", "18-06-2018", "string", null );
        return [
            {
                id: 1,
                menuName: "String",
                hasSubmenu: false,
                topMenuId: 0,
                routerLink: "String",
                componentName: "String",
                modulePath: "String",
                errorPath: "String",
                notificationbBadgeNum: 0,
                iconClass: "String",
                isDashboard: false,
                createDate: "18-06-2018",
                lastUpdateDate: "18-06-2018",
                status: "string",
                sumMenus: null
            }
        ] as ModuleMenu[];
    }

    getModuleById(id: Number) {
        return this.httpClient.post(this.endPoint.getModuleMenuByIdEP, id);
    }

    saveModule(moduleMenu: ModuleMenu) {
        return this.httpClient.post(this.endPoint.saveModuleMenuEP, moduleMenu);
    }

    updateModule(moduleMenu: ModuleMenu) {
        return this.httpClient.post(this.endPoint.updateModuleMenuEP, moduleMenu);
    }

    deleteModule(moduleMenu: ModuleMenu) {
        return this.httpClient.post(this.endPoint.deleteModuleMenuEP, moduleMenu);
    }
}