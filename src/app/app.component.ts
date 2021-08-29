import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './state/state.interface';
import { completeToDos, incompleteToDos } from './state/todo';
import { AddToDo, CompleteToDo, IncompleteToDo } from './state/todo/todo.actions';
import { generateToDos, ToDo } from './state/todo/todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  completeToDos: Observable<Array<ToDo>>;

  incompleteToDos: Observable<Array<ToDo>>;


  taskContents:any;

  constructor(private store: Store<State>) { }
  
  
  ngOnInit(){
    this.initialize()
  }

  initialize() {
    generateToDos().forEach(todo => this.store.dispatch(new AddToDo(todo)));
    this.completeToDos = this.store.pipe(select(completeToDos));
    this.incompleteToDos = this.store.pipe(select(incompleteToDos));
  }

  addToDo() {  
    this.store.dispatch(new AddToDo({
      id: Math.random(),
      complete: false,
      task: this.taskContents
    }));
  }

  onAddToDoChange(e) {
    console.log(e)
    this.taskContents = e.task
  }

  onCompleteToDo(toDo: ToDo) {
    this.store.dispatch(new CompleteToDo(toDo));
  }

  onIncompleteToDo(toDo: ToDo) {
    this.store.dispatch(new IncompleteToDo(toDo));
  }
}
