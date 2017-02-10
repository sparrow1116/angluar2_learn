/**
 * Created by zhangyj on 2017/2/9.
 */
import {Hero} from './hero';
import {HEROS} from './mock.heros';

export class HeroService{
    getHeros(){
        return Promise.resolve(HEROS);
    }

    getHerosSlowly(){
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROS),2000)
        );
    }
}