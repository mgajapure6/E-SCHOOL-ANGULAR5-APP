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
    listOfEntity: any;
    listOfModules: any[];
    listOfMenus: any[];
    selectedModules: any[];
    selectedMenus: any[];

    showTable: boolean;
    showForm: boolean;
    formTitle: string;
    submitBtnName: string;
    
    
    constructor(private _script: ScriptLoaderService,
        private userMenuMasterService: UserMenuMasterService,
        private commonService: CommonService,
        private toastr: ToastrService) {
        this.showTable = true;
        this.showForm = false;
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

    toggleTableAndForm(opFlag, module) {
        //this.dataId = module.MODULE_ID;
        if (this.showTable && !this.showForm) {
            if (module == null && opFlag == 'N') {
                this.showTable = false;
                this.showForm = true;
                this.resetForm();
            } else if (module != null && opFlag == 'M') {
                this.formTitle = 'Edit Module';
                this.submitBtnName = 'Update Module';
                this.showTable = false;
                this.showForm = true;
            } else if (module != null && opFlag == 'D') {
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

    saveUpdateDeleteModule(form: NgForm) {
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