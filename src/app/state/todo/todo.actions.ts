import { Action } from '@ngrx/store';

import { ToDo } from './todo.model';

export enum ToDoActionTypes {
  AddToDo = '[Todo] Add Todo',
  CompleteToDo = '[Todo] Complete Todo',
  IncompleteToDo = '[Todo] Incomplete Todo',
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;
  constructor(public payload: ToDo) {}
}


export class CompleteToDo implements Action {
  readonly type = ToDoActionTypes.CompleteToDo;
  constructor(public payload: ToDo) {}
}

export class IncompleteToDo implements Action {
  readonly type = ToDoActionTypes.IncompleteToDo;
  constructor(public payload: ToDo) {}
}


export type ToDoActions = 
  | AddToDo
  | CompleteToDo
  | IncompleteToDo
