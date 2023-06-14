import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITodoListService } from '../services/todolist/itodo-list.service';
import { StatusTask } from '../models/status-task';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit,OnDestroy {
  public todoForm!: FormGroup;
  public statusTask=Object.keys(StatusTask);
  public creationSuccessful=false;
  public subscriptions:Subscription[]=[];
  constructor(private router:Router,private formBuilder:FormBuilder,@Inject(ITodoListService) private todoListService:ITodoListService) { 
    
  }
  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      description: ['test',Validators.required],
      status_task: [StatusTask.TO_DO, Validators.required],
      created_at: [new Date(),]
    });
  
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sus)=>{
      sus.unsubscribe();
    })
  }

  
  emitDate(date:Date){
    this.todoForm.patchValue({created_at:date});
  }
  onSubmit(): void {
  
    console.log(this.todoForm.value);
    const todo: Todo = {
      ...this.todoForm.value
    };

    this.todoListService.addTodoList(todo);
    this.subscriptions.push(this.todoListService.todoListsSubject$.subscribe((res)=>{
      this.creationSuccessful=true;
      setTimeout(()=>{this.router.navigate(['/']);},1500);
    }));
  }

}
