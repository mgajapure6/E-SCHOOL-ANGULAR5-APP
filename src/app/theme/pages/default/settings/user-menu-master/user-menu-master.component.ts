import { Entity } from './../../../../../_models/entity.model';
import { UserMenuModel } from './user-menu-model.model';
import { UserMenuMasterService } from './user-menu-master.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { CommonService } from '../../../../../_services/common.service';
import { ToastrService } from 'ngx-toastr';

//declare var $:JQueryStatic;

@Component({
    selector: "user-menu-master",
    templateUrl: "./user-menu-master.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./user-menu-master.component.css"]
})
export class UserMenuMasterComponent implements OnInit, AfterViewInit {
    
    listOfUsers:any[];
    listOfModules: any[];
    listOfMenus: any[];
    listOfUserBranchDetail : any[];
    selectedModules: any[];
    selectedMenus: any[];
    selectedUser: any;

    showTable: boolean;
    showForm: boolean;
    formTitle: string;
    submitBtnName: string;

    ngForm : FormGroup;
    
    
    constructor(private _script: ScriptLoaderService,
        private userMenuMasterService: UserMenuMasterService,
        private commonService: CommonService,
        private toastr: ToastrService) {
        this.showTable = true;
        this.showForm = false;
        this.userMenuMasterService.getUserListByHelp().subscribe((res)=>{
            //console.log("User list :"+res["helpList"]);
            this.listOfUsers = res["helpList"];
        });
    }
    ngOnInit() {
        this.resetForm();
    }

    ngAfterViewInit() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/vendors/custom/datatables/datatables.bundle.js']);
        this.initData();
    }


    initData() {
        this._script.loadScripts('user-menu-master', //this parameter is always same as selector name in @component decorator
            ['assets/app/theme/pages/default/settings/user-menu-master-script.js']);
    }

    toggleTableAndForm(opFlag, user) {
        if (this.showTable && !this.showForm) {
            if (user == null && opFlag == 'N') {
                this.showTable = false;
                this.showForm = true;
                this.resetForm();
            } else if (user != null && opFlag == 'M') {
                this.formTitle = 'Rights for '+user.prop3;
                this.submitBtnName = 'Update Rights';
                this.showTable = false;
                this.showForm = true;
                this.selectedUser = user;//listOfUserBranchDetail
                this.userMenuMasterService.getUserBranchList(user.prop2).subscribe((res)=>{
                    //console.log("User list :"+res["helpList"]);
                    this.listOfUserBranchDetail = JSON.parse(res["branchList"]);
                });
            } else if (user != null && opFlag == 'D') {
                this.formTitle = 'Delete Module';
                this.submitBtnName = 'Delete Module';
                this.showTable = false;
                this.showForm = true;
            }
        } else {
            this.initData();
            this.showTable = true;
            this.showForm = false;
        }
    }

    saveUpdateDeleteUserMenuRight(form: NgForm) {
        if (form) {
            
        } else {
            this.toastr.error('Failed', 'You have form errors.', {
                closeButton: true
            });
        }
    }

    resetForm() {
        
    }

   

}