import { UserMenuMasterService } from './theme/pages/default/settings/user-menu-master/user-menu-master.service';
import { EndPoint } from './../Endpoints';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleMasterService } from './theme/pages/default/settings/module-master/module-master.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './_services/common.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
    ],
    providers: [ScriptLoaderService, ModuleMasterService, UserMenuMasterService, EndPoint, CommonService],
    bootstrap: [AppComponent]
})
export class AppModule { }