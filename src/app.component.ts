import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteData } from '@angular/router-deprecated';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { Navbar } from './theme/navbar/navbar.component';
//import { Sidebar } from './theme/sidebar/sidebar.component';

@Component({
    selector: 'my-app',
    template: `
    <p>app component YO!</p>
    <tpl-tabs elements='[{"name" : "first", "link" : "https://www.google.de/?gws_rd=ssl"},
                    {"name" : "second", "link" : "https://www.google.de/maps/@48.752016,9.2965412,15z"},
                    {"name" : "third", "link" : "https://techcrunch.com"}]' active='not'>

    </tpl-tabs>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Navbar,
        PolymerElement('tpl-tabs')],
    providers: [
        ROUTER_PROVIDERS,
    ]
})

export class AppComponent {

    isInChildView = false;
    constructor(private _router: Router) { }

    ngOnInit() {
        this._router.subscribe(() => {
            let routeData:RouteData = this._router.currentInstruction.component.routeData;
            this.isInChildView = !routeData.get('root');
        });
    }
}