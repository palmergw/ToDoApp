import { Component, OnInit, Input } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoItem } from '../../models/todoItem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input() todo: TodoItem;

  constructor(public todoService: TodoService) { }

  ngOnInit() { }

}
