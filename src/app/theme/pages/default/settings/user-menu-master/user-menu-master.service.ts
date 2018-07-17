import { MENU, MODULE } from './user-menu-master.component';
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

    saveUpdateDeleteUserMenuRight(user,listOfMenus:MENU[],listOfModules:MODULE[],defaultBranchId:any){
        let userId : any = user.prop2;
        let menuId: any = "";
        let addRight: any = "";
        let modifyRight: any = "";
        let deleteRight: any = "";
        let viewRight: any = "";
        let printRight: any = "";
        let spclRight: any = "";
        let moduleId: any = "";
        let modId: any = "";

        // listOfMenus.sort((a,b)=>{
        //     if (a.MODULE_NAME < b.MODULE_NAME){
        //         return -1;
        //     }
        //     if (a.MODULE_NAME > b.MODULE_NAME){
        //         return 1;
        //     }
        //     return 0;
        // });
        

        listOfMenus.forEach(menu => {

            menuId = menuId+"~"+menu.MENU_MST_ID;

            if(menu.IS_ADURM_ADD){
                addRight = addRight+"~Y";
            }else{
                addRight = addRight+"~N";
            }
            if(menu.IS_ADURM_MOD){
                modifyRight = modifyRight+"~Y";
            }else{
                modifyRight = modifyRight+"~N";
            }
            if(menu.IS_ADURM_DEL){
                deleteRight = deleteRight+"~Y";
            }else{
                deleteRight = deleteRight+"~N";
            }
            if(menu.IS_ADURM_VIEW){
                viewRight = viewRight+"~Y";
            }else{
                viewRight = viewRight+"~N";
            }
            if(menu.IS_ADURM_PRINT){
                printRight = printRight+"~Y";
            }else{
                printRight = printRight+"~N";
            }
            if(menu.IS_ADURM_SPECIAL){
                spclRight = spclRight+"~Y";
            }else{
                spclRight = spclRight+"~N";
            }
            
            modId = modId+"~"+menu.MODULE_ID;
        });

        listOfModules.forEach(module => {
            if(module.IS_CHECKED){
                moduleId = moduleId+"~"+module.MODULE_ID;
            }
        });

        var postParameters = {
            "userId": userId,
            "branchMstId": defaultBranchId,
            "menuId":menuId,
            "addRight":addRight,
            "modifyRight":modifyRight,
            "deleteRight":deleteRight,
            "viewRight":viewRight,
            "printRight":printRight,
            "spclRight":spclRight,
            "moduleId":moduleId,
            "modId":modId
        };

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient.post(this.ep.saveUpdateDeleteUserMenuRight, postParameters, httpOptions);
    }



}