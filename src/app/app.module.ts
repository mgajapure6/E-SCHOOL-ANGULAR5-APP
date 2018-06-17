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
        ReactiveFormsModule
    ],
    providers: [ScriptLoaderService,ModuleMasterService],
    bootstrap: [AppComponent]
})
export class AppModule { }