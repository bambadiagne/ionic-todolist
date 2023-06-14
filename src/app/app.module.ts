import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TodoListService } from './services/todolist/todo-list.service';
import { ITodoListService } from './services/todolist/itodo-list.service';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { DatePickerComponent } from './shared/date-picker/date-picker.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    SingleTodoComponent,
    ListTodoComponent,
    CreateTodoComponent,
    DatePickerComponent,
    UpdateTodoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    ReactiveFormsModule, 
    FormsModule, IonicModule.forRoot(),
  ],
  providers: [{ provide: ITodoListService, useClass: TodoListService },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
