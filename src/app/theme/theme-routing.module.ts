import { AsideNavService } from './../_services/aside-nav.service';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const childObjs = AsideNavService.getRouterChildObject();
const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': childObjs
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations:[]
})
export class ThemeRoutingModule { }