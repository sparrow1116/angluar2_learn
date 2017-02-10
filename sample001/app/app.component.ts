/**
 * Created by zhangyj on 2017/2/3.
 */
import {Component} from 'angular2/core';
import {HeroDetailsComponent} from './hero-details-component';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    directives:[HeroDetailsComponent],
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
    `
})
export class AppComponent {
    public title='war crarft';
    public heros = HEROS;
    public selectHero: Hero ={name:'archmage',id:1};
    chooseHero(hero){
        this.selectHero = hero;
    }
}

var HEROS: Hero[] = [
    { "id": 1, "name": "archmage" },
    { "id": 2, "name": "Mountain King" },
    { "id": 3, "name": "paladin" },
    { "id": 4, "name": "Blood mage " },
    { "id": 5, "name": "blademaster" },
    { "id": 6, "name": "foresight" },
    { "id": 7, "name": "Tauren chieftain" },
    { "id": 8, "name": "shadow hunter " }
];