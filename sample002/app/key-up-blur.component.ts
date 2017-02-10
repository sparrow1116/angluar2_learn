/**
 * Created by zhangyj on 2017/2/9.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'key-up',
    template:`
        <input #box
            (keyup.enter)="values=box.value"
            (blur)="values=box.value">
        {{values}}
    `
})
export class KeyupEnterComponent{
    public values = '';
}