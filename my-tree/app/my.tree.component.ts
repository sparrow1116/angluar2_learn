/**
 * Created by zhangyj on 2017/2/13.
 */
import {Component} from 'angular2/core';

//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    //directives:[ROUTER_DIRECTIVES],
    selector:'my-tree',
    styleUrls:['./app/tree.css'],
    templateUrl:'/app/my-tree.html'
})
export class MyTreeComponent{

    private activeRouter: Object = null;

    choseLevel(header,selectedTree){
        this.activeRouter = selectedTree;
        header.open = !header.open;

        setTimeout(()=>{
            if(header.open){
                header.timeout = true;
            }else{
                header.timeout = false;
            }
        },700);

    }


    public myTreeJson = [{
        icon : 'icon/wxb-user.png',
        title:'人员管理',
        children:[{
            icon:'icon/register-user.png',
            title:'S人员管理',
            children:[
                {title:'S1人员',tag:'20'},
                {title:'S2人员'},
                {title:'S3人员'},
                {title:'S4人员'}
            ]
        },{
            icon:'icon/account.png',
            title:'测试',
            tag:'10'
        }]

    }];
}