import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StatusTask } from 'src/app/models/status-task';
import { Todo } from 'src/app/models/todo';
import { ITodoListService } from './itodo-list.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService implements ITodoListService {

  public todoListsSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  public currentTodo$: BehaviorSubject<Todo|null> = new BehaviorSubject<Todo|null>(null);
  constructor() { 
    this.todoListsSubject$.next([{
      id:1,
      status_task:StatusTask.TO_DO,
      description:"Jouer au foot",
      created_at:new Date()
    },
    {
      id:2,
      status_task:StatusTask.IN_PROGRESS,
      description:"Jouer au foot",
      created_at:new Date()
    },{
      id:3,
      status_task:StatusTask.FINISHED,
      description:"Jouer au foot",
      created_at:new Date()
    },{
      id:4,
      status_task:StatusTask.TO_DO,
      description:"Jouer au foot",
      created_at:new Date()
    },{
      id:5,
      status_task:StatusTask.TO_DO,
      description:"Jouer au foot",
      created_at:new Date()
    },{
      id:6,
      status_task:StatusTask.IN_PROGRESS,
      description:"Jouer au foot",
      created_at:new Date()
    },{
      id:7,
      status_task:StatusTask.TO_DO,
      description:"Jouer au foot",
      created_at:new Date()
    }]);

  }

   public getTodoLists(): Todo[] {
    return this.todoListsSubject$.value;
  }

  public addTodoList(todoList: Todo): void {
    const currentTodoLists = this.getTodoLists();
    const updatedTodoLists = [...currentTodoLists, todoList];
    this.todoListsSubject$.next(updatedTodoLists);
  }

  public updateTodoList(todoList: Todo): void {
    const currentTodoLists = this.getTodoLists();
    const updatedTodoLists = currentTodoLists.map((item) => {
      if (item.id === todoList.id) {
        return todoList;
      }
      return item;
    });
    this.todoListsSubject$.next(updatedTodoLists);
  }

  public deleteTodoList(todo:Todo): void {
    const currentTodoLists = this.getTodoLists();
    const updatedTodoLists = currentTodoLists.filter((item) => item !== todo);
    this.todoListsSubject$.next(updatedTodoLists);
  }
}
