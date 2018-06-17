import { ModuleMenu } from './module-menu.model';
import { ModuleMasterService } from './module-master.service';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { NgForm,FormsModule } from '@angular/forms';


@Component({
    selector: "app-basic-basic",
    templateUrl: "./module-master.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ModuleMasterComponent implements OnInit, AfterViewInit {

    showTable:boolean;
    showForm:boolean;
    formTitle:string;
    submitBtnName:string;
    flagVal:string;
    dataId:any;

    constructor(private _script: ScriptLoaderService, private moduleMasterService : ModuleMasterService) {
        this.showTable=true;
        this.showForm=false;
    }
    ngOnInit() {
        this.resetForm();
        this.initTable();
    }
    ngAfterViewInit() {
        this.loadScriptFiles();
    }

    loadScriptFiles(){
        this._script.loadScripts('app-basic-basic',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/app/theme/pages/default/settings/module-master-script.js']);
    }

    initTable(){
        this.moduleMasterService.allModules=this.moduleMasterService.getModuleList();
    }

    toggleTableAndForm(opFlag,id){
        this.dataId=id;
        if(this.showTable && !this.showForm){
            if(id==0&&opFlag=='N'){
                this.formTitle='Create New Module';
                this.submitBtnName='Save Module';
                this.flagVal='N';
                this.showTable=false;
                this.showForm=true;
            }else if(id!=0&&opFlag=='E'){
                this.formTitle='Edit Module';
                this.submitBtnName='Update Module';
                this.flagVal='E';
                this.showTable=false;
                this.showForm=true;
            }else if(id!=0&&opFlag=='D'){
                this.formTitle='Delete Module';
                this.submitBtnName='Delete Module';
                this.flagVal='D';
                this.showTable=false;
                this.showForm=true;
            }
        }else{
            this.loadScriptFiles();
            this.showTable=true;
            this.showForm=false;
        }
    }

    saveUpdateDeleteEntry(form:NgForm){
        if(this.flagVal=='N'){
            this.saveNewEntry(form);
        }else if(this.flagVal=='E'){
            this.updateEntry(form);
        }else if(this.flagVal=='D'){
            this.deleteEntry(form);
        }
        
    }

    saveNewEntry(form:NgForm){
        //alert('u click me for save, and data id is ::'+this.dataId);
        this.moduleMasterService.saveModule(form.value).subscribe((res)=>{
            this.resetForm();
        });
    }

    updateEntry(form:NgForm){
        this.moduleMasterService.updateModule(form.value).subscribe((res)=>{
            this.resetForm();
        });
    }

    deleteEntry(form:NgForm){
        this.moduleMasterService.deleteModule(form.value).subscribe((res)=>{
            this.resetForm();
        });
    }


    resetForm(form?:NgForm){
        if(form){
            form.reset();
        }else{
            this.moduleMasterService.selectedModule={
                id: 0,
                menuName: "",
                hasSubmenu: false,
                topMenuId:0,
                routerLink: "",
                componentName: "",
                modulePath: "",
                errorPath: "",
                notificationbBadgeNum: 0,
                iconClass: "",
                isDashboard: false,
                createDate:null,
                lastUpdateDate:null,
                status:"",
                sumMenus: null
            }
        }
    }

    onEdit(moduleMenu:ModuleMenu){
        this.moduleMasterService.selectedModule=moduleMenu;
    }

}