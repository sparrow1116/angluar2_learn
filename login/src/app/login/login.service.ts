/**
 * Created by zhangyj on 2017/2/16.
 */
//import { Http, Response} from '@angular/http';
//import { Injectable } from '@angular/core';

import {Injectable} from "@angular/core";
import {Response, Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

import {Observable} from "rxjs/Observable";
import {ResultData} from '../service.model'
import { Subject } from 'rxjs/Subject';

import * as Const from '../../const';

var resultData={
  status : 0,
  msg: '',
  data:{}
};

@Injectable()
export class LoginService{

  private _checkUserUrl = Const.usingDomain +'/api/login/check-user';
  private _checkCaptchaUrl = Const.usingDomain + '/api/login/check-captcha';
  private _loginUrl   = Const.usingDomain + '/api/login';

  public observable: Observable<ResultData>;

  public subject: Subject<ResultData> = new Subject<ResultData>();

  constructor(private http:Http) {
  }


  checkUserFront(username):Observable<ResultData>{
    if(username == ''){
      resultData.status = 100;
      resultData.msg = 'x 登录账号不能为空';

      this.observable = new Observable(observer =>{
          setTimeout(()=>observer.next(resultData),10);
      })

      return this.observable
    }
    if(username.length > 30 || username.length < 3){
      resultData.status = 101;
      resultData.msg = 'x 账号错误，请输入正确的登录账号';

      this.observable = new Observable(observer =>{
        setTimeout(()=>observer.next(resultData),10);
      })
      return this.observable
    }
    return this.checkUserFromServer(username);
  }
  checkUserFromServer(username):Observable<ResultData>{

    return this.http.get(this._checkUserUrl).map((response: Response) => {

                      return  response.json();
                    //this.subject.next(Object.assign(resultData,response.json()));
                 });
  }
  checkUser(username):Observable<ResultData>{
    this.observable = new Observable();
    return this.checkUserFront(username)
  }

  checkPasswordFront(password):Observable<ResultData>{
    this.observable = new Observable();
    if(password == ''){
      resultData.status = 100;
      resultData.msg = 'x 登录密码不能为空';

      this.observable = new Observable(observer =>{
        setTimeout(()=>observer.next(resultData),10);
      })
      return this.observable
    }
    if(password.length > 30 || password.length < 6){
      resultData.status = 101;
      resultData.msg = 'x 密码错误';

      this.observable = new Observable(observer =>{
        setTimeout(()=>observer.next(resultData),10);
      })
      return this.observable
    }
    resultData.status = 0;
    resultData.msg = '';
    this.observable = new Observable(observer =>{
      setTimeout(()=>observer.next(resultData),10);
    })
    return this.observable
  }

  checkCaptchaFront(captcha):Observable<ResultData>{
    if(captcha == ''){
      resultData.status = 100;
      resultData.msg = 'x 验证码不能为空';

      this.observable = new Observable(observer =>{
        setTimeout(()=>observer.next(resultData),10);
      })
      return this.observable
    }
    if(captcha.length != 4){
      resultData.status = 101;
      resultData.msg = 'x 验证码错误';

      this.observable = new Observable(observer =>{
        setTimeout(()=>observer.next(resultData),10);
      })
      return this.observable
    }

    return this.checkCaptchaServer(captcha)
  }
  checkCaptchaServer(captcha):Observable<ResultData>{

    return this.http.get(this._checkCaptchaUrl)
       .map((response: Response) => {
            return response.json();
       })
  }
  checkCaptcha(user):Observable<ResultData>{
    var captcha = user.captcha;
    this.observable = new Observable();
    return this.checkCaptchaFront(captcha)
  }

  login(name,password,captcha){
    return this.http.get(this._loginUrl)
      .map((response: Response) => {
          return response.json();
      })
  }

}
