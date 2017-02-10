/**
 * Created by zhangyj on 2017/2/10.
 */
import {Component,  OnInit}  from 'angular2/core';
import {Mobile, MobileService}   from './mobile.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    template:`
        <h2>Mobile Details</h2>
        <div    *ngIf="mobile">
            <h3>"{{mobile.name}}"</h3>
            <div>
                <label>Id:</label>
                {{mobile.id}}
            </div>

            <div>
                <label>Name:</label>
                <input [(ngModel)]="mobile.name" placeholder="name"/>
            </div>
            <button (click)="gotoMobiles()">Back</button>
        </div>
    `
})
export class MobileDetailComponent implements OnInit{
    mobile: Mobile;
    constructor(
        private _router:Router,
        private _routeParams: RouteParams,
        private _service: MobileService
    ){

    }
    ngOnInit(){
        let id = this._routeParams.get('id');
        this._service.getMobile(id).then(mobile => this.mobile = mobile);
    }
    gotoMobiles(){
        let mId = this.mobile ? this.mobile.id : null;
        this._router.navigate(['MobileList',{id:mId,foo:'foo'}]);
    }
}