/**
 * Created by zhangyj on 2017/2/3.
 */
import {Component, View, OnInit} from 'angular2/core';
import {HeroDetailsComponent} from './hero-details-component';
import {HeroService} from './hero.service';
import {Hero} from './hero';

import {KeyupEnterComponent} from './key-up-blur.component'

@Component({
    selector: 'my-app',
    directives:[HeroDetailsComponent,KeyupEnterComponent],
    providers:[HeroService],
    template: `
        <h1>{{title}}</h1>
        <my-hero-details [hero]="selectHero"></my-hero-details>
        <h1>hero list:</h1>
        <ul class="hero_block">
            <li *ngFor="#hero of heros #i=index" (click)="chooseHero(hero)">
                <div>{{i+1}}</div>
                <div><label>name:</label>{{hero.name}}</div>
                <div><label>id:</label>{{hero.id}}</div>
            </li>
        </ul>
        <key-up></key-up>
    `
})
export class AppComponent implements OnInit{
    public title='war crarft';
    public heros: Hero[];
    public selectHero: Hero ={name:'archmage',id:1};

    constructor(private _heroService: HeroService){}

    getHeros(){
        this._heroService.getHerosSlowly().then(heros=> this.heros = heros);
    }
    chooseHero(hero: Hero){
        this.selectHero = hero;
    }
    ngOnInit(){
        this.getHeros();
    }
}
