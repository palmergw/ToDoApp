import { Injectable, Component } from '@angular/core';
import { TodoItem } from '../models/todoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public activeTodo: TodoItem;
  private todoList: TodoItem[];
  constructor() {
    this.todoList = [];
  }

  public getTodos(): TodoItem[] {
    return this.todoList;
  }

  public add(todo: TodoItem) {
    console.log('Added item to todoList');

    // fix recursive parenthood, or items will disappear from list
    if (todo.parentId) {
      let parentObject = this.todoList.find(item => item.id === todo.parentId);
      if (parentObject.parentId = todo.id) {
        parentObject.parentId = undefined;
      }
    }

    if (!todo.id) {
      todo.id = (this.todoList[this.todoList.length - 1] || { id: 0 }).id + 1;
      this.todoList.push(todo);
    } else {
      let listMatch = this.todoList.find((t) => t.id === todo.id);
      if (listMatch) {
        listMatch = todo;
      } else {
        this.todoList.push(todo);
      }
    }
    this.todoList.sort((a, b) => a.id - b.id);
  }

  public getTodoChildren(id: number): Array<TodoItem> {
    return this.todoList.filter(todo => todo.parentId === id);
  }

  public getTodoOrphans(): Array<TodoItem> {
    console.log(this.todoList);

    // console.log('INDEX', this.todoList.findIndex(todo2 => todo2.id === 1));
    // return this.todoList.filter(todo => (this.todoList.findIndex(todo2 => todo2.id === todo.parentId) === -1));
    return this.todoList.filter(todo => todo.parentId == null || (this.todoList.findIndex(todo2 => todo2.id === todo.parentId) === -1));
  }

  public isParent(id: number): boolean {
    return this.getTodoChildren(id).length > 0;
  }
}
