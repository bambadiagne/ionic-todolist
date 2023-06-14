import { BehaviorSubject, Subject } from 'rxjs';
import { Todo } from 'src/app/models/todo';


export abstract class ITodoListService {
  public  todoListsSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  public abstract getTodoLists(): Todo[];
  public abstract addTodoList(todoList: Todo): void;
  public abstract updateTodoList(todoList: Todo): void;
  public abstract deleteTodoList(todo: Todo): void
  public currentTodo$: BehaviorSubject<Todo|null> = new BehaviorSubject<Todo|null>(null);
}
