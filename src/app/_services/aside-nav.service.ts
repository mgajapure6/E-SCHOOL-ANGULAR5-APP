import { EndPoint } from './../../Endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsideNavModel } from "../theme/layouts/aside-nav/aside-nav.model";

@Injectable()
export class AsideNavService {

    constructor(private http: HttpClient, private ep: EndPoint) { }

    getModuleMenuList() {

        //return this.http.get(this.ep.getModuleMenuListEP);

        return [
            {
                id: 1,
                menuName: "Dashboard",
                hasSubmenu: false,
                topMenuId: null,
                routerLink: "/index",
                componentName: "AsideNavComponent",
                modulePath: ".\/pages\/default\/blank\/blank.module#BlankModule",
                errorPath: "",
                notificationbBadgeNum: 0,
                iconClass: "m-menu__link-icon flaticon-line-graph",
                routerLinkActive: "m-menu__item--active",
                isDashboard: true,
                sumMenus: null
            },
            {
                id: 2,
                menuName: "Settings",
                hasSubmenu: true,
                topMenuId: null,
                routerLink: "",
                componentName: "",
                modulePath: "",
                errorPath: "",
                notificationbBadgeNum: 0,
                iconClass: "m-menu__link-icon flaticon-settings",
                routerLinkActive: "",
                isDashboard: false,
                sumMenus: [
                    {
                        id: 3,
                        menuName: "Module Master",
                        hasSubmenu: false,
                        topMenuId: 2,
                        routerLink: "/settings/moduleMaster",
                        componentName: "ModuleMasterComponent",
                        modulePath: ".\/pages\/default\/settings\/module-master\/module-master.module#ModuleMasterModule",
                        errorPath: "",
                        notificationbBadgeNum: 0,
                        iconClass: "",
                        routerLinkActive: "",
                        isDashboard: false,
                        sumMenus: null
                    },
                    {
                        id: 3,
                        menuName: "Menu Master",
                        hasSubmenu: false,
                        topMenuId: 2,
                        routerLink: "/settings/menuMaster",
                        componentName: "MenuMasterComponent",
                        modulePath: ".\/pages\/default\/settings\/menu-master\/menu-master.module#MenuMasterModule",
                        errorPath: "",
                        notificationbBadgeNum: 0,
                        iconClass: "",
                        routerLinkActive: "",
                        isDashboard: false,
                        sumMenus: null
                    },
                    {
                        id: 4,
                        menuName: "User Master",
                        hasSubmenu: false,
                        topMenuId: 2,
                        routerLink: "/settings/userMaster",
                        componentName: "UserMasterComponent",
                        modulePath: ".\/pages\/default\/settings\/user-master\/user-master.module#UserMasterModule",
                        errorPath: "",
                        notificationbBadgeNum: 0,
                        iconClass: "",
                        routerLinkActive: "",
                        isDashboard: false,
                        sumMenus: null
                    },
                    {
                        id: 4,
                        menuName: "User Menu Master",
                        hasSubmenu: false,
                        topMenuId: 2,
                        routerLink: "/settings/userMenuMaster",
                        componentName: "UserMenuMasterComponent",
                        modulePath: ".\/pages\/default\/settings\/user-menu-master\/user-menu-master.module#UserMenuMasterModule",
                        errorPath: "",
                        notificationbBadgeNum: 0,
                        iconClass: "",
                        routerLinkActive: "",
                        isDashboard: false,
                        sumMenus: null
                    }
                ]
            },

        ];
    }

    getModuleSubMenuListByModuleId(moduleId) {

    }

    static getRouterChildObject() {
        return [
            {
                'path': 'index',
                'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule',
            },
            {
                'path': 'settings\/moduleMaster',
                'loadChildren': '.\/pages\/default\/settings\/module-master\/module-master.module#ModuleMasterModule',
            },
            {
                'path': 'settings\/menuMaster',
                'loadChildren': '.\/pages\/default\/settings\/menu-master\/menu-master.module#MenuMasterModule',
            },
            {
                'path': 'settings\/userMaster',
                'loadChildren': '.\/pages\/default\/settings\/user-master\/user-master.module#UserMasterModule',
            },
            {
                'path': 'settings\/userMenuMaster',
                'loadChildren': '.\/pages\/default\/settings\/user-menu-master\/user-menu-master.module#UserMenuMasterModule',
            },
            {
                "path": "crud\/forms\/controls\/base",
                "loadChildren": ".\/pages\/default\/crud\/forms\/controls\/controls-base\/controls-base.module#ControlsBaseModule"
            },
            {
                "path": "crud\/forms\/controls\/checkbox-radio",
                "loadChildren": ".\/pages\/default\/crud\/forms\/controls\/controls-checkbox-radio\/controls-checkbox-radio.module#ControlsCheckboxRadioModule"
            },
            {
                "path": "crud\/forms\/controls\/switch",
                "loadChildren": ".\/pages\/default\/crud\/forms\/controls\/controls-switch\/controls-switch.module#ControlsSwitchModule"
            },
            {
                "path": "crud\/forms\/controls\/input-group",
                "loadChildren": ".\/pages\/default\/crud\/forms\/controls\/controls-input-group\/controls-input-group.module#ControlsInputGroupModule"
            },
            {
                "path": "crud\/forms\/controls\/option",
                "loadChildren": ".\/pages\/default\/crud\/forms\/controls\/controls-option\/controls-option.module#ControlsOptionModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-datepicker",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-datepicker\/widgets-bootstrap-datepicker.module#WidgetsBootstrapDatepickerModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-datetimepicker",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-datetimepicker\/widgets-bootstrap-datetimepicker.module#WidgetsBootstrapDatetimepickerModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-timepicker",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-timepicker\/widgets-bootstrap-timepicker.module#WidgetsBootstrapTimepickerModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-daterangepicker",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-daterangepicker\/widgets-bootstrap-daterangepicker.module#WidgetsBootstrapDaterangepickerModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-touchspin",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-touchspin\/widgets-bootstrap-touchspin.module#WidgetsBootstrapTouchspinModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-maxlength",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-maxlength\/widgets-bootstrap-maxlength.module#WidgetsBootstrapMaxlengthModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-switch",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-switch\/widgets-bootstrap-switch.module#WidgetsBootstrapSwitchModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-multipleselectsplitter",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-multipleselectsplitter\/widgets-bootstrap-multipleselectsplitter.module#WidgetsBootstrapMultipleselectsplitterModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-select",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-select\/widgets-bootstrap-select.module#WidgetsBootstrapSelectModule"
            },
            {
                "path": "crud\/forms\/widgets\/select2",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-select2\/widgets-select2.module#WidgetsSelect2Module"
            },
            {
                "path": "crud\/forms\/widgets\/typeahead",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-typeahead\/widgets-typeahead.module#WidgetsTypeaheadModule"
            },
            {
                "path": "crud\/forms\/widgets\/nouislider",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-nouislider\/widgets-nouislider.module#WidgetsNouisliderModule"
            },
            {
                "path": "crud\/forms\/widgets\/form-repeater",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-form-repeater\/widgets-form-repeater.module#WidgetsFormRepeaterModule"
            },
            {
                "path": "crud\/forms\/widgets\/ion-range-slider",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-ion-range-slider\/widgets-ion-range-slider.module#WidgetsIonRangeSliderModule"
            },
            {
                "path": "crud\/forms\/widgets\/input-mask",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-input-mask\/widgets-input-mask.module#WidgetsInputMaskModule"
            },
            {
                "path": "crud\/forms\/widgets\/autosize",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-autosize\/widgets-autosize.module#WidgetsAutosizeModule"
            },
            {
                "path": "crud\/forms\/widgets\/clipboard",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-clipboard\/widgets-clipboard.module#WidgetsClipboardModule"
            },
            {
                "path": "crud\/forms\/widgets\/dropzone",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-dropzone\/widgets-dropzone.module#WidgetsDropzoneModule"
            },
            {
                "path": "crud\/forms\/widgets\/recaptcha",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-recaptcha\/widgets-recaptcha.module#WidgetsRecaptchaModule"
            },
            {
                "path": "crud\/forms\/widgets\/summernote",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-summernote\/widgets-summernote.module#WidgetsSummernoteModule"
            },
            {
                "path": "crud\/forms\/widgets\/bootstrap-markdown",
                "loadChildren": ".\/pages\/default\/crud\/forms\/widgets\/widgets-bootstrap-markdown\/widgets-bootstrap-markdown.module#WidgetsBootstrapMarkdownModule"
            },
            {
                "path": "crud\/forms\/layouts\/default-forms",
                "loadChildren": ".\/pages\/default\/crud\/forms\/layouts\/layouts-default-forms\/layouts-default-forms.module#LayoutsDefaultFormsModule"
            },
            {
                "path": "crud\/forms\/layouts\/multi-column-forms",
                "loadChildren": ".\/pages\/default\/crud\/forms\/layouts\/layouts-multi-column-forms\/layouts-multi-column-forms.module#LayoutsMultiColumnFormsModule"
            },
            {
                "path": "crud\/forms\/layouts\/action-bars",
                "loadChildren": ".\/pages\/default\/crud\/forms\/layouts\/layouts-action-bars\/layouts-action-bars.module#LayoutsActionBarsModule"
            },
            {
                "path": "crud\/forms\/validation\/states",
                "loadChildren": ".\/pages\/default\/crud\/forms\/validation\/validation-states\/validation-states.module#ValidationStatesModule"
            },
            {
                "path": "crud\/forms\/validation\/form-controls",
                "loadChildren": ".\/pages\/default\/crud\/forms\/validation\/validation-form-controls\/validation-form-controls.module#ValidationFormControlsModule"
            },
            {
                "path": "crud\/forms\/validation\/form-widgets",
                "loadChildren": ".\/pages\/default\/crud\/forms\/validation\/validation-form-widgets\/validation-form-widgets.module#ValidationFormWidgetsModule"
            },
            {
                "path": "crud\/wizard\/wizard-1",
                "loadChildren": ".\/pages\/default\/crud\/wizard\/wizard-wizard-1\/wizard-wizard-1.module#WizardWizard1Module"
            },
            {
                "path": "crud\/wizard\/wizard-2",
                "loadChildren": ".\/pages\/default\/crud\/wizard\/wizard-wizard-2\/wizard-wizard-2.module#WizardWizard2Module"
            },
            {
                "path": "crud\/wizard\/wizard-3",
                "loadChildren": ".\/pages\/default\/crud\/wizard\/wizard-wizard-3\/wizard-wizard-3.module#WizardWizard3Module"
            },
            {
                "path": "crud\/wizard\/wizard-4",
                "loadChildren": ".\/pages\/default\/crud\/wizard\/wizard-wizard-4\/wizard-wizard-4.module#WizardWizard4Module"
            },
            {
                "path": "crud\/wizard\/wizard-5",
                "loadChildren": ".\/pages\/default\/crud\/wizard\/wizard-wizard-5\/wizard-wizard-5.module#WizardWizard5Module"
            },
            {
                "path": "crud\/metronic-datatable\/base\/data-local",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-data-local\/base-data-local.module#BaseDataLocalModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/data-json",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-data-json\/base-data-json.module#BaseDataJsonModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/data-ajax",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-data-ajax\/base-data-ajax.module#BaseDataAjaxModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/record-selection",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-record-selection\/base-record-selection.module#BaseRecordSelectionModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/column-rendering",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-column-rendering\/base-column-rendering.module#BaseColumnRenderingModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/row-details",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-row-details\/base-row-details.module#BaseRowDetailsModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/column-width",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-column-width\/base-column-width.module#BaseColumnWidthModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/responsive-columns",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-responsive-columns\/base-responsive-columns.module#BaseResponsiveColumnsModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/translation",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-translation\/base-translation.module#BaseTranslationModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/local-sort",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-local-sort\/base-local-sort.module#BaseLocalSortModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/html-table",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-html-table\/base-html-table.module#BaseHtmlTableModule"
            },
            {
                "path": "crud\/metronic-datatable\/base\/auto-column-hide",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/base\/base-auto-column-hide\/base-auto-column-hide.module#BaseAutoColumnHideModule"
            },
            {
                "path": "crud\/metronic-datatable\/scrolling\/vertical",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/scrolling\/scrolling-vertical\/scrolling-vertical.module#ScrollingVerticalModule"
            },
            {
                "path": "crud\/metronic-datatable\/scrolling\/horizontal",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/scrolling\/scrolling-horizontal\/scrolling-horizontal.module#ScrollingHorizontalModule"
            },
            {
                "path": "crud\/metronic-datatable\/scrolling\/both",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/scrolling\/scrolling-both\/scrolling-both.module#ScrollingBothModule"
            },
            {
                "path": "crud\/metronic-datatable\/locked\/left",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/locked\/locked-left\/locked-left.module#LockedLeftModule"
            },
            {
                "path": "crud\/metronic-datatable\/locked\/right",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/locked\/locked-right\/locked-right.module#LockedRightModule"
            },
            {
                "path": "crud\/metronic-datatable\/locked\/both",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/locked\/locked-both\/locked-both.module#LockedBothModule"
            },
            {
                "path": "crud\/metronic-datatable\/locked\/html-table",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/locked\/locked-html-table\/locked-html-table.module#LockedHtmlTableModule"
            },
            {
                "path": "crud\/metronic-datatable\/child\/data-local",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/child\/child-data-local\/child-data-local.module#ChildDataLocalModule"
            },
            {
                "path": "crud\/metronic-datatable\/child\/data-ajax",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/child\/child-data-ajax\/child-data-ajax.module#ChildDataAjaxModule"
            },
            {
                "path": "crud\/metronic-datatable\/api\/methods",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/api\/api-methods\/api-methods.module#ApiMethodsModule"
            },
            {
                "path": "crud\/metronic-datatable\/api\/events",
                "loadChildren": ".\/pages\/default\/crud\/metronic-datatable\/api\/api-events\/api-events.module#ApiEventsModule"
            },
            {
                "path": "crud\/datatables\/basic\/basic",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/basic\/basic-basic\/basic-basic.module#BasicBasicModule"
            },
            {
                "path": "crud\/datatables\/basic\/headers",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/basic\/basic-headers\/basic-headers.module#BasicHeadersModule"
            },
            {
                "path": "crud\/datatables\/basic\/paginations",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/basic\/basic-paginations\/basic-paginations.module#BasicPaginationsModule"
            },
            {
                "path": "crud\/datatables\/basic\/scrollable",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/basic\/basic-scrollable\/basic-scrollable.module#BasicScrollableModule"
            },
            {
                "path": "crud\/datatables\/advanced\/column-rendering",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-column-rendering\/advanced-column-rendering.module#AdvancedColumnRenderingModule"
            },
            {
                "path": "crud\/datatables\/advanced\/multiple-controls",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-multiple-controls\/advanced-multiple-controls.module#AdvancedMultipleControlsModule"
            },
            {
                "path": "crud\/datatables\/advanced\/column-visibility",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-column-visibility\/advanced-column-visibility.module#AdvancedColumnVisibilityModule"
            },
            {
                "path": "crud\/datatables\/advanced\/row-callback",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-row-callback\/advanced-row-callback.module#AdvancedRowCallbackModule"
            },
            {
                "path": "crud\/datatables\/advanced\/row-grouping",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-row-grouping\/advanced-row-grouping.module#AdvancedRowGroupingModule"
            },
            {
                "path": "crud\/datatables\/advanced\/footer-callback",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/advanced\/advanced-footer-callback\/advanced-footer-callback.module#AdvancedFooterCallbackModule"
            },
            {
                "path": "crud\/datatables\/data-sources\/html",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/data-sources\/data-sources-html\/data-sources-html.module#DataSourcesHtmlModule"
            },
            {
                "path": "crud\/datatables\/data-sources\/javascript",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/data-sources\/data-sources-javascript\/data-sources-javascript.module#DataSourcesJavascriptModule"
            },
            {
                "path": "crud\/datatables\/data-sources\/ajax-client-side",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/data-sources\/data-sources-ajax-client-side\/data-sources-ajax-client-side.module#DataSourcesAjaxClientSideModule"
            },
            {
                "path": "crud\/datatables\/data-sources\/ajax-server-side",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/data-sources\/data-sources-ajax-server-side\/data-sources-ajax-server-side.module#DataSourcesAjaxServerSideModule"
            },
            {
                "path": "crud\/datatables\/extensions\/buttons",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-buttons\/extensions-buttons.module#ExtensionsButtonsModule"
            },
            {
                "path": "crud\/datatables\/extensions\/colreorder",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-colreorder\/extensions-colreorder.module#ExtensionsColreorderModule"
            },
            {
                "path": "crud\/datatables\/extensions\/keytable",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-keytable\/extensions-keytable.module#ExtensionsKeytableModule"
            },
            {
                "path": "crud\/datatables\/extensions\/responsive",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-responsive\/extensions-responsive.module#ExtensionsResponsiveModule"
            },
            {
                "path": "crud\/datatables\/extensions\/rowgroup",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-rowgroup\/extensions-rowgroup.module#ExtensionsRowgroupModule"
            },
            {
                "path": "crud\/datatables\/extensions\/rowreorder",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-rowreorder\/extensions-rowreorder.module#ExtensionsRowreorderModule"
            },
            {
                "path": "crud\/datatables\/extensions\/scroller",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-scroller\/extensions-scroller.module#ExtensionsScrollerModule"
            },
            {
                "path": "crud\/datatables\/extensions\/select",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/extensions\/extensions-select\/extensions-select.module#ExtensionsSelectModule"
            },
            {
                "path": "crud\/datatables\/search-options\/column-search",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/search-options\/search-options-column-search\/search-options-column-search.module#SearchOptionsColumnSearchModule"
            },
            {
                "path": "crud\/datatables\/search-options\/advanced-search",
                "loadChildren": ".\/pages\/default\/crud\/datatables\/search-options\/search-options-advanced-search\/search-options-advanced-search.module#SearchOptionsAdvancedSearchModule"
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
        ];
    }
}