import { Component, Input } from '@angular/core';
import { todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo: todo;
todoMutable : todo;

constructor() {

}

ngOnInit() : void {
    this.todoMutable = {...this.todo};
    this.todoMutable.completado = true;
}

}
