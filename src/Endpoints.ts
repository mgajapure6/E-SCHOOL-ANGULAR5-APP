import { Injectable } from "@angular/core";

@Injectable()
export class EndPoint {
    baseEP = "http://localhost:888/eSchool/api/";

    getCodeListEP = this.baseEP + "module/getCodeList";
    getEntityListEP = this.baseEP + "module/entityList";

    saveUpdateDeleteModuleEP = this.baseEP + "module/saveUpdateDeleteModule";
    getModuleMenuByIdEP = this.baseEP + "";
    getModuleMenuListEP = this.baseEP + "module/moduleList";

}