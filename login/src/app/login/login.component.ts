/**
 * Created by zhangyj on 2017/2/15.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {LoginService} from './login.service'
import {ResultData} from '../service.model'

@Component({
  providers:[LoginService],
  selector:'login',
  styleUrls:['./login.component.css'],
  templateUrl:'./login.component.html'
})
export class LoginComponent{
  private _userName:string = '';
  private _password:string = '';
  private _captcha:string = '';

  private _nameError: string = '';
  private _passwordError: string = '';
  private _captchaError: string = '';

  private _nameChecked: boolean;
  private _passwordChecked: boolean;
  private _captchaChecked: boolean;

  constructor(private _loginService: LoginService){
    this._nameChecked = true;
    this._passwordChecked = true;
    this._captchaChecked = true;
  }
  checkUser(){
    this._nameChecked = true;
    this._nameError = '';
    this._loginService.checkUser(this._userName)
        .subscribe((data:ResultData)=>{
          if(data.status !== 0){
            this._nameError = data.msg;
            return;
          }
          this._nameChecked = false;
        });
  }
  checkPassword(){
    this._passwordChecked = true;
    this._passwordError = ''
    this._loginService.checkPasswordFront(this._password)
        .subscribe((data:ResultData) =>{
            if(data.status !== 0){
              this._passwordError = data.msg;
              return;
            }
            this._passwordChecked = false;
        });
  }
  checkCaptcha(){
    this._captchaChecked = true;
    this._captchaError = ''
    this._loginService.checkCaptcha(this._captcha)
        .subscribe((data:ResultData) =>{
          if(data.status !== 0){
            this._captchaError = data.msg;
            return;
          }
          this._captchaChecked = false;
        });
  }

  onSubmit(){

    this._loginService.login(this._userName,this._password,this._captcha)
        .subscribe((data:ResultData)=>{
            if(data.status !== 0){

            }
            //TODO add navigator
        });
  }
}
