/**
 * Created by zhangyj on 2017/2/9.
 */
import {Component} from 'angular2/core'
import {NgForm} from 'angular2/common'
import {Student} from './student'

@Component({
    selector:'student-form',
    templateUrl:'app/student-form.component.html'
})
export class StudentFormComponent{
    names=['archmage','Mountain King','paladin','Blood mage'];
    model = new Student(1880,'archmage', 25,"软件大道66号");
    submitted = false;
    onSubmit() { this.submitted = true; }
}