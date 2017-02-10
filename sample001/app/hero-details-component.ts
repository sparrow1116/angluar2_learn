/**
 * Created by zhangyj on 2017/2/7.
 */
import {Component,View} from 'angular2/core';
import {Hero} from './hero'
@Component({
    selector:'my-hero-details',
    inputs: ['hero']
})
@View({
    template:`
        <h2>{{hero.name}}</h2>
        <div><label>name:</label><input [(ngModel)]="hero.name" placeholder="name"></div>
        <div><label>id:</label>{{hero.id}}</div>
    `
})
export class HeroDetailsComponent {
    public hero: Hero;
}