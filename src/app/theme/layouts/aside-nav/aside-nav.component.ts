import { AsideNavService } from './../../../_services/aside-nav.service';
import { AsideNavModel } from './aside-nav.model';
import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav",
    templateUrl: "./aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {


    listOfModuleMenu: AsideNavModel[];

    constructor(private asideNavService: AsideNavService) {
        this.listOfModuleMenu = asideNavService.getModuleMenuList();
    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();

    }

}