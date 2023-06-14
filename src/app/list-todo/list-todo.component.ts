import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { Subscription } from 'rxjs';
import { ITodoListService } from '../services/todolist/itodo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit,OnDestroy {
  public todos:Todo[]=[];
  public subscriptions:Subscription[]=[];
  constructor(private router:Router, @Inject(ITodoListService) private todoListService:ITodoListService) { 
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sus) => {
      sus.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(this.todoListService.todoListsSubject$.subscribe((todoLists) => {
      this.todos = todoLists;
    }));
    
  }
 public showTodoForm(){
     this.router.navigateByUrl('/create');
 }
}
