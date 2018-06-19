export class ModuleMenu {
    id: Number;
    menuName: String;
    hasSubmenu: boolean;
    topMenuId: Number;
    routerLink: String;
    componentName: String;
    modulePath: String;
    errorPath: String;
    notificationbBadgeNum: Number;
    iconClass: String;
    isDashboard: boolean;
    createDate: any;
    lastUpdateDate: any;
    status: string;
    sumMenus: ModuleMenu[];

    constructor(
        id: Number,
        menuName: String,
        hasSubmenu: boolean,
        topMenuId: Number,
        routerLink: String,
        componentName: String,
        modulePath: String,
        errorPath: String,
        notificationbBadgeNum: Number,
        iconClass: String,
        isDashboard: boolean,
        createDate: any,
        lastUpdateDate: any,
        status: string,
        sumMenus: ModuleMenu[]
    ){
        this.id = id;
        this.menuName=menuName;
        this.hasSubmenu=hasSubmenu;
        this.topMenuId=topMenuId;
        this.routerLink=routerLink;
        this.componentName=componentName;
        this.modulePath=modulePath;
        this.errorPath=errorPath;
        this.notificationbBadgeNum=notificationbBadgeNum;
        this.iconClass=iconClass;
        this.isDashboard=isDashboard;
        this.createDate=createDate;
        this.lastUpdateDate=lastUpdateDate;
        this.status=status;
        this.sumMenus=sumMenus;
    }
}
