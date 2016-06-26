import {Component} from '@angular/core';
import { Navbar } from './theme/navbar/navbar.component';
import { Sidebar } from './theme/sidebar/sidebar.component';

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <sidebar></sidebar>
    `,
    directives: [Navbar, Sidebar]
})

export class AppComponent {
}