/**
 * Created by zhangyj on 2017/2/20.
 */
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

const appRoutes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
