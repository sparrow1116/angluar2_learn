/**
 * Created by zhangyj on 2017/2/3.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import {MobileListComponent}   from './mobile-list.component';
import {CeoListComponent}     from './ceo-list.component';
import {MobileDetailComponent}   from './mobile-detail.component';
import {MobileService}           from './mobile.service';

@Component({
    selector:'my-app',
    template:`
        <h1>Componennt Router</h1>
        <nav>
            <a [routerLink]="['MobileList']">Mobile List</a>
            <a [routerLink]="['CeoList']">CEO List</a>
            <router-outlet></router-outlet>
        </nav>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[MobileService]
})
@RouteConfig([
    {
        path:'/mobiles',
        name:'MobileList',
        component:MobileListComponent,
        useAsDefault:true
    },{
        path:'/mobile/:id',
        name:'MobileDetail',
        component:MobileDetailComponent
    },{
        path:'/ceos',
        name:'CeoList',
        component:CeoListComponent
    }
])
export class AppComponent { }
