import { Entity } from './../../../../../_models/entity.model';
import { UserMenuModel } from './user-menu-model.model';
import { UserMenuMasterService } from './user-menu-master.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import * as $ from 'jquery';
import { CommonService } from '../../../../../_services/common.service';
import { ToastrService } from 'ngx-toastr';

//declare var $:any;
//declare var jquery: any;

@Component({
    selector: "user-menu-master",
    templateUrl: "./user-menu-master.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./user-menu-master.component.css"]
})
export class UserMenuMasterComponent implements OnInit, AfterViewInit, OnDestroy {


    listOfUsers: any[];
    listOfModules: any[];
    listOfMenus: MENU[] = [];
    listOfUserBranchDetail: any[];
    selectedModules: any[];
    selectedMenus: any[];
    selectedUser: any;

    showTable: boolean;
    showForm: boolean;
    formTitle: string;
    submitBtnName: string;

    ngForm: FormGroup;

    defaultBranchId: any;

    constructor(private _script: ScriptLoaderService,
        private userMenuMasterService: UserMenuMasterService,
        private commonService: CommonService,
        private toastr: ToastrService) {
        this.showTable = true;
        this.showForm = false;
        this.userMenuMasterService.getUserListByHelp().subscribe((res) => {
            //console.log("User list :"+res["helpList"]);
            this.listOfUsers = res["helpList"];
        });
    }
    ngOnInit() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/vendors/custom/datatables/datatables.bundle.js']);
        this.resetForm();
    }

    ngAfterViewInit() {
        this.initUserDt();
    }

    ngOnDestroy(): void {

    }


    initUserDt() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/app/theme/pages/default/settings/user-menu-master/userDatatable.js']);
    }

    initModuleDt() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/app/theme/pages/default/settings/user-menu-master/moduleDatatable.js']);
    }

    initMenuDt() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/app/theme/pages/default/settings/user-menu-master/menuDatatable.js']);
    }

    toggleTableAndForm(opFlag, user) {
        if (this.showTable && !this.showForm) {
            if (user == null && opFlag == 'N') {
                this.showTable = false;
                this.showForm = true;
                this.resetForm();
            } else if (user != null && opFlag == 'M') {
                this.formTitle = 'Rights for ' + user.prop3;
                this.submitBtnName = 'Update Rights';
                this.showTable = false;
                this.showForm = true;
                this.selectedUser = user;
                this.userMenuMasterService.getUserBranchList(user.prop2).subscribe((res) => {
                    //console.log("User list :"+res["helpList"]);
                    this.listOfUserBranchDetail = JSON.parse(res["branchList"]);
                    this.defaultBranchId = JSON.parse(res["branchList"])[0].BRANCH_MST_ID;
                    console.log("defaultBranchId :" + this.defaultBranchId);
                    this.listOfMenus = new Array();
                    this.getModuleList();
                });
            } else if (user != null && opFlag == 'D') {
                this.formTitle = 'Delete Module';
                this.submitBtnName = 'Delete Module';
                this.showTable = false;
                this.showForm = true;
            }
        } else {
            this.resetForm();
            this.initUserDt();
            this.showTable = true;
            this.showForm = false;
        }
    }

    getModuleList() {
        var param = this.selectedUser.prop2 + "~" + this.defaultBranchId;
        console.log("module param :" + param);
        this.commonService.getCodeList(param, "384").subscribe((res) => {
            //console.log("module list :"+res["codeList"]);
            this.listOfModules = JSON.parse(res["codeList"]) as MODULE[];
            //this.initModuleDt();
            console.log("module list :" + this.listOfModules);
            for (let i = 0; i <= this.listOfModules.length - 1; i++) {
                let module: MODULE = this.listOfModules[i];
                if (module.MODULE_CHKED == "Y") {
                    this.listOfModules[i].IS_CHECKED = true;
                    this.getMenuList(module);
                    //console.log("only checked "+JSON.stringify(module));
                } else {
                    //console.log("only unchecked "+JSON.stringify(module));
                }
            }
        });
    }

    getMenuList(module: MODULE) {
        //branchId+"~"+moduleId+"~"+user;
        var param = this.defaultBranchId + "~" + module.MODULE_ID + "~" + this.selectedUser.prop2;
        console.log("menu param :" + param);
        this.commonService.getCodeList(param, "236").subscribe((res) => {
            //console.log("menu list :"+res["codeList"]);
            let localListOfMenus = JSON.parse(res["codeList"]) as MENU[];
            // console.log("module list :"+this.listOfModules);
            for (let i = 0; i <= localListOfMenus.length - 1; i++) {
                let menu: MENU = localListOfMenus[i];
                // for(module of this.listOfModules){
                //     if(module.MODULE_ID==menu.MODULE_ID){
                //         menu.module=module;
                //     }
                // }
                if (menu.ADURM_ADD == "Y") {
                    menu.IS_ADURM_ADD = true;
                }
                if (menu.ADURM_DEL == "Y") {
                    menu.IS_ADURM_DEL = true;
                }
                if (menu.ADURM_MOD == "Y") {
                    menu.IS_ADURM_MOD = true;
                }
                if (menu.ADURM_PRINT == "Y") {
                    menu.IS_ADURM_PRINT = true;
                }
                if (menu.ADURM_SPECIAL == "Y") {
                    menu.IS_ADURM_SPECIAL = true;
                }
                if (menu.ADURM_VIEW == "Y") {
                    menu.IS_ADURM_VIEW = true;
                }
                this.listOfMenus.push(menu);
            }

            this.listOfMenus.sort((a,b)=>{
                if (a.MODULE_NAME < b.MODULE_NAME){
                    return -1;
                }
                if (a.MODULE_NAME > b.MODULE_NAME){
                    return 1;
                }
                return 0;
            });
        });
    }

    onModuleRightChange(event,module:MODULE){
        console.log("isChecked :"+event.target.checked);
        console.log("event module :"+JSON.stringify(module));
        if(event.target.checked){
            this.getMenuList(module);
        }else{
            let count = 0;
            var i = this.listOfMenus.length;
            while (i--) {
                if(this.listOfMenus[i].MODULE_ID==module.MODULE_ID){
                    count=count+1;
                    // console.log("count :"+count) ;
                    // console.log("menu :"+JSON.stringify(this.listOfMenus[i])) ;
                    this.listOfMenus.splice(i,1);
                }
            }
        }
    }

    saveUpdateDeleteUserMenuRight() {
        this.userMenuMasterService.saveUpdateDeleteUserMenuRight(this.selectedUser,this.listOfMenus,this.listOfModules,this.defaultBranchId).subscribe((res)=>{
            console.log("res"+JSON.stringify(res));
            console.log("msg"+res["msg"]);
            if(res["msg"]=="Ok"){
                console.log("res"+JSON.stringify(res));
                this.toastr.success('Success', 'Record Saved Successfully.', {
                    closeButton: true
                });
            }else{
                this.toastr.error('Failed', res["msg"], {
                    closeButton: true
                });
            }
        });
    }

    resetForm() {
        this.defaultBranchId=null;
        this.listOfMenus=null;
        this.listOfModules=null;
        this.listOfUserBranchDetail=null;
        this.selectedMenus=null;
        this.selectedModules=null;
    }

}


export class MODULE {
    MODULE_ID: number;
    MODULE_NAME: any;
    MODULE_CHKED: any;
    IS_CHECKED: boolean = false;
}

export class MENU {
    module ?: MODULE;

    BRANCH_MST_ID: any;
    MODULE_ID: number;
    MODULE_NAME: any;
    MENU_MST_ID: number;
    MENU_NAME: any;
    USER_MENU_ID: any;
    USERID: any;
    USER_NAME: any;
    PARENT_MENU_MST_ID: any;
    PARENT_MENU: any;
    MENU_APPLI_DATE: any;

    ADURM_ADD: any;
    ADURM_MOD: any;
    ADURM_DEL: any;
    ADURM_VIEW: any;
    ADURM_PRINT: any;
    ADURM_SPECIAL: any;
    IS_ADURM_ADD: boolean = false;
    IS_ADURM_MOD: boolean = false;
    IS_ADURM_DEL: boolean = false;
    IS_ADURM_VIEW: boolean = false;
    IS_ADURM_PRINT: boolean = false;
    IS_ADURM_SPECIAL: boolean = false;
}