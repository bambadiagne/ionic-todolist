import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusTask } from '../models/status-task';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ITodoListService } from '../services/todolist/itodo-list.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  @Input() todo!:Todo;
  public todoForm!: FormGroup;
  public statusTask=Object.keys(StatusTask);
  public subscriptions:Subscription[]=[];
  public updateSuccessful: boolean=false;
  constructor(private router:Router,private formBuilder:FormBuilder,@Inject(ITodoListService) private todoListService:ITodoListService) { 
    
  }
  ngOnInit(): void {
    this.todoListService.currentTodo$.subscribe((todo:Todo|null)=>{
      if(todo){
        this.todo=todo;
        this.todoForm = this.formBuilder.group({
          description: [this.todo.description,Validators.required],
          status_task: [this.todo.status_task, Validators.required],
          created_at: [this.todo.created_at,Validators.required]
        });
      }else
      this.router.navigateByUrl('/');
    })
   
  
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
    const updatedTodo: Todo = {
      ...this.todo,
      ...this.todoForm.value
    };

    this.todoListService.updateTodoList(updatedTodo);
    this.updateSuccessful=true;
    setTimeout(()=>{this.router.navigate(['/']);},1500);
  }

}
