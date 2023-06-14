import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { ITodoListService } from '../services/todolist/itodo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  @Input()
  todo!: Todo;
  constructor(private router:Router,@Inject(ITodoListService) private todoListService:ITodoListService) { }

  ngOnInit(): void {
  }
  supprimerTodo(){
      this.todoListService.deleteTodoList(this.todo);
  }   
  modifierTodo(){
    this.todoListService.currentTodo$.next(this.todo);
    this.router.navigate(['/update'])
  }


}
