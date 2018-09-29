import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAdderComponent } from './components/todo-adder/todo-adder.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAdderComponent,
    TodoDetailComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
