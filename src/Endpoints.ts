import { Injectable } from "@angular/core";

@Injectable()
export class EndPoint {
    baseEP = "http://localhost:888/eSchool/api/";
    //common api
    getCodeListEP = this.baseEP + "common/getCodeList";
    getHelpListEP = this.baseEP + "common/getHelpList";

    //module master api
    getEntityListEP = this.baseEP + "module/entityList";
    saveUpdateDeleteModuleEP = this.baseEP + "module/saveUpdateDeleteModule";
    getModuleMenuListEP = this.baseEP + "module/moduleList";

    //user-menu master api
    getUserBranchListEP = this.baseEP+"userMenu/getUserBranchListByUserId";
}