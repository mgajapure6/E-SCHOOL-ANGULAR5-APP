import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserMenuMasterComponent } from './user-menu-master.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": UserMenuMasterComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        UserMenuMasterComponent
    ]
})
export class UserMenuMasterModule {



}