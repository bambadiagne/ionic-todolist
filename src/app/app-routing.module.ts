import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [
  {
    path:'',
    component:ListTodoComponent
  },
  {
  path:'create',
  component:CreateTodoComponent,
  },
  {
    path:'update',
    component:UpdateTodoComponent,
  },
{
  path:'**',
  redirectTo:'/'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
