import { Entity } from './../../../../../_models/entity.model';
import { ModuleMenu } from './module-menu.model';
import { ModuleMasterService } from './module-master.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { CommonService } from '../../../../../_services/common.service';
import { ToastrService } from 'ngx-toastr';

//declare var $:JQueryStatic;

@Component({
    selector: "module-master",
    templateUrl: "./module-master.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./module-master.component.css"]
})
export class ModuleMasterComponent implements OnInit, AfterViewInit {
    listOfEntity: any;
    listOfModules: any[];
    selectedModule: ModuleMenu;

    showTable: boolean;
    showForm: boolean;
    formTitle: string;
    submitBtnName: string;
    flagVal: string;
    dataId: any;
    statusArry:any[]=[
        {
            value:"Y",
            name:"Active"
        },
        {
            value:"N",
            name:"Inactive"
        }
    ];

    ngForm : FormGroup;
    
    
    constructor(private _script: ScriptLoaderService,
        private moduleMasterService: ModuleMasterService,
        private commonService: CommonService,
        private toastr: ToastrService,
        private formBuilder : FormBuilder) {
        this.showTable = true;
        this.showForm = false;

        this.ngForm = formBuilder.group({
            MODULE_NAME : new FormControl('', Validators.required),
            ENTITY_ID : new FormControl('', Validators.required),
            STATUS : new FormControl('', Validators.required),
            MODULE_NAME_OL: "",
            MODULE_SOURCE: "",
            SEQ_NO: "",
        });
        
    }
    ngOnInit() {
        this.resetForm();
    }
    ngAfterViewInit() {
        this._script.loadScripts('module-master', //this parameter is always same as selector name in @component decorator
            ['assets/vendors/custom/datatables/datatables.bundle.js']);
        this.initData();
    }

    loadScriptFiles() {

    }

    initData() {
        //code for getting Module list from commonService
        this.commonService.getCodeList("null", 7).subscribe((res) => {
            if (JSON.parse(res["codeList"]) == null || JSON.parse(res["codeList"]) == "") {
                this.toastr.error('Failed', 'Unable to load Module list', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                });
            } else {
                this.listOfModules = JSON.parse(res["codeList"]) as ModuleMenu[];
            }
            //console.log("listOfModules :"+this.listOfModules);
        })
        this.moduleMasterService.getModuleList().subscribe((res => {
            // this.listOfModuleMenu = res["modules"] as ModuleMenu[];
            //console.log("ModuleLit : " + JSON.stringify(res["modules"]));
        }));
        this.moduleMasterService.getEntityList().subscribe((res => {
            if (JSON.parse(res["entityList"]) == null || JSON.parse(res["entityList"]) == "") {
                this.toastr.error('Failed', 'Unable to load Entity list', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right'
                });
            } else {
                this.listOfEntity = JSON.parse(res["entityList"]) as Entity[];
            }
        }));

        this._script.loadScripts('module-master', //this parameter is always same as selector name in @component decorator
            ['assets/app/theme/pages/default/settings/module-master-script.js']);
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
                this.flagVal = 'M';
                this.showTable = false;
                this.showForm = true;
                this.selectedModule = module;
                this.selectedModule.OP_FLAG = this.flagVal;
                this.selectedModule.IMG_DATA = "";
            } else if (module != null && opFlag == 'D') {
                this.formTitle = 'Delete Module';
                this.submitBtnName = 'Delete Module';
                this.flagVal = 'D';
                this.showTable = false;
                this.showForm = true;
                this.selectedModule = module;
                this.selectedModule.OP_FLAG = this.flagVal;
                this.selectedModule.IMG_DATA = "";
            }
        } else {
            this.selectedModule = null;
            this.initData();
            this.showTable = true;
            this.showForm = false;
        }
    }

    saveUpdateDeleteModule(form: NgForm) {
        if (form) {
            this.moduleMasterService.saveUpdateDeleteModule(this.selectedModule).subscribe((res) => {
                console.log("responseObj :" + JSON.parse(res["responseObj"]));
                console.log("responseObj status :" + JSON.parse(res["responseObj"]).status);
                if (JSON.parse(res["responseObj"]).status=="success") {
                    this.resetForm();
                    this.toastr.success('Success', JSON.parse(res["responseObj"]).msg, {
                        closeButton: true,
                        positionClass: 'toast-top-right'
                    });
                } else {
                    this.toastr.error('Failed', JSON.parse(res["responseObj"]).msg, {
                        closeButton: true,
                        positionClass: 'toast-top-right'
                    });
                }
            });
        } else {
            this.toastr.error('Failed', 'You have form errors.', {
                closeButton: true
            });
        }


    }

    resetForm() {
        this.formTitle = 'Create New Module';
        this.submitBtnName = 'Save Module';
        this.flagVal = 'N';
        this.selectedModule = {
            MODULE_ID: "0",
            MODULE_NAME: "",
            MODULE_NAME_OL: "",
            STATUS: "",
            ENTITY_ID: "",
            ENTITY_NAME: "",
            MODULE_SOURCE: "",
            SEQ_NO: "",
            MODULE_ICON: "",
            OP_FLAG: this.flagVal,
            IMG_DATA: ""
        }
        this.ngForm.markAsUntouched();
    }

    onEdit(moduleMenu: ModuleMenu) {

    }

}